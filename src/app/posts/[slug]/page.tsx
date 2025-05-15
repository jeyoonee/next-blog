import { getPost } from "@/service/posts";
import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: {
    slug: string;
  };
};

export default async function SlugPage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "data", "posts", `${slug}.md`);
  let content = "";

  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error(err);
    redirect("/posts");
  }
  const post = await getPost(params.slug);

  if (!post) {
    redirect("/posts");
  }

  return (
    <>
      <h1>{post.title}</h1>
      <div className="prose max-w-none p-4">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </div>
    </>
  );
}
