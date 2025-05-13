import path from "path";
import { promises as fs } from "fs";
import { PostPreviewData } from "../types/post";

export async function getPosts(): Promise<PostPreviewData[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getPost(
  path: string
): Promise<PostPreviewData | undefined> {
  console.log("path", path);
  const posts = await getPosts();
  return posts.find((item) => item.path === path);
}
