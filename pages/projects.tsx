import { GetStaticProps } from "next";
import { ReactElement } from "react";

import Imagecard from "../components/ImageCard";
import { POSTS_DIRECTORY } from "../lib/constants";
import { getAllPostMeta,PostData } from "../lib/projects";

type PropsWrapper = {
  readonly props: Props;
};

type Props = {
  readonly post: PostData[];
};

export default function Projects({ post }: Props): ReactElement {
  return (
    <div className="container py-6 mx-auto text-center divide-y divide-black">
      <h1 className="py-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-6xl">
        What We Have Done.
      </h1>
      <div className="flex flex-col mx-auto">
        {post.map((d: PostData) => (
          <Imagecard
            key={d.title}
            title={d.title}
            description={d.description}
            imgSrc={d.imgSrc}
            href={"/projects/" + d.slug}
            row={false}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps =
  async (): Promise<PropsWrapper> => {
    const post: PostData[] = getAllPostMeta(POSTS_DIRECTORY);
    return {
      props: {
        post,
      },
    };
  };
