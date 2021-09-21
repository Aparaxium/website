import path from "path";

//cwd can fail, https://stackoverflow.com/questions/10265798/determine-project-root-from-a-running-node-js-application
export const POSTS_DIRECTORY = path.join(process.cwd(), "content/projects");
