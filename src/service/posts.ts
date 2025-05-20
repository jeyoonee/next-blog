import path from "path";
import { promises as fs } from "fs";
import { PostData } from "../types/post";
import { cache } from "react";

export const getAllPosts = cache(async () => {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
});

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post: PostData) => post.featured);
}

export async function getNonFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.filter((post: PostData) => !post.featured);
}

export async function getPost(
  path: string
): Promise<PostData & { next: PostData | null; prev: PostData | null }> {
  const posts = await getAllPosts();
  const post = posts.find((item: PostData) => item.path === path);

  if (!post) throw new Error("해당하는 포스트를 찾을 수 없음");

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;

  return { ...post, next, prev };
}
