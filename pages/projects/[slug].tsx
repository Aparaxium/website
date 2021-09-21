import { GetStaticPaths, GetStaticProps } from "next";
import { useTheme } from "next-themes";
import path from "path";
import { ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vs,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

import { POSTS_DIRECTORY } from "../../lib/constants";
import { getFileNames, getPost, Post } from "../../lib/projects";

type PropsWrapper = {
  readonly props: Props;
};

type Props = {
  readonly post: Post;
};

export default function Project({ post }: Props): ReactElement {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can render
  //prevents code blocks from being in the wrong darkmode state
  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  return (
    <div className="container py-6 mx-auto divide-y divide-black">
      <h1 className="py-6 text-3xl font-extrabold tracking-tight text-center sm:text-4xl md:text-6xl">
        {post.data.title}
      </h1>
      <div className="flex-col mx-auto prose dark:prose-dark">
        <ReactMarkdown
          rehypePlugins={[remarkGfm]}
          components={{
            //Will inline ever be used?
            code({ className, children }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  style={theme == "dark" ? vscDarkPlus : vs}
                  language={match[1]}
                  PreTag="div"
                >
                  {children + "".replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className}>{children}</code>
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getFileNames(POSTS_DIRECTORY);
  console.log("getStaticPaths", paths);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<PropsWrapper> => {
  console.log("getStaticProps", params);
  if (params === undefined) {
    throw new Error("Undefined static props in pages/projects/[slug].tsx");
  } else {
    const fullPath: string = path.join(POSTS_DIRECTORY, params.slug as string);
    const postData: Post = getPost(fullPath + ".mdx");
    const props = {
      props: {
        post: {
          ...postData,
        },
      },
    };
    return props;
  }
};
