import { GetStaticProps } from "next";
import { ReactElement } from "react";

import ImageCard from "../components/ImageCard";
import Landing from "../components/Landing";
import Textcard from "../components/TextCard";
import { POSTS_DIRECTORY } from "../lib/constants";
import { getAllPostMeta,PostData } from "../lib/projects";

type PropsWrapper = {
  readonly props: Props;
};

type Props = {
  readonly post: PostData[];
};

export default function Home({ post }: Props): ReactElement {
  return (
    <>
      <Landing quality={35} />
      <div className="container grid mx-auto sm:grid-cols-1 md:grid-cols-2">
        {post.map((d: PostData) => (
          <div className="m-6" key={d.title}>
            <ImageCard
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={"/projects/" + d.slug}
              row={true}
              quality={35}
            />
          </div>
        ))}
      </div>

      <ul className="container mx-auto">
        <Textcard title="Lorem ipsum.">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin dui accumsan sapien maximus posuere. Sed feugiat
            vehicula interdum. Donec venenatis ac neque vel pharetra. Ut laoreet
            ultrices porttitor. Nulla quis rhoncus dolor. Vivamus ornare
            pharetra risus non semper. Vestibulum lobortis ligula nec velit
            ullamcorper ultrices. Integer quis sapien non arcu porttitor
            fringilla. Etiam vel facilisis ante. Aliquam blandit interdum erat,
            ut semper nisi egestas sit amet. Ut tincidunt erat nec quam
            elementum, sed convallis justo fermentum.
          </p>
        </Textcard>
      </ul>

      <ul className="container grid mx-auto sm:grid-cols-1 md:grid-cols-2">
        <Textcard title="Lorem ipsum.">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin dui accumsan sapien maximus posuere. Sed feugiat
            vehicula interdum. Donec venenatis ac neque vel pharetra. Ut laoreet
            ultrices porttitor. Nulla quis rhoncus dolor. Vivamus ornare
            pharetra risus non semper. Vestibulum lobortis ligula nec velit
            ullamcorper ultrices. Integer quis sapien non arcu porttitor
            fringilla. Etiam vel facilisis ante. Aliquam blandit interdum erat,
            ut semper nisi egestas sit amet. Ut tincidunt erat nec quam
            elementum, sed convallis justo fermentum.
          </p>
        </Textcard>
        <Textcard title="Lorem ipsum.">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            sollicitudin dui accumsan sapien maximus posuere. Sed feugiat
            vehicula interdum. Donec venenatis ac neque vel pharetra. Ut laoreet
            ultrices porttitor. Nulla quis rhoncus dolor. Vivamus ornare
            pharetra risus non semper. Vestibulum lobortis ligula nec velit
            ullamcorper ultrices. Integer quis sapien non arcu porttitor
            fringilla. Etiam vel facilisis ante. Aliquam blandit interdum erat,
            ut semper nisi egestas sit amet. Ut tincidunt erat nec quam
            elementum, sed convallis justo fermentum.
          </p>
        </Textcard>
      </ul>
    </>
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
