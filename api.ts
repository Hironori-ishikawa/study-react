import { Post } from "./types";

export const getAllPosts = async (): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    cache: "no-store",
  });
  const posts = res.json();

  return posts;
};
export const addPosts = async (post: Post): Promise<Post> => {
  const res = await fetch(`http://localhost:3001/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const newPosts = res.json();

  return newPosts;
};
