import { getPost } from "@/service/posts";
import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";
import MarkdownViewer from "@/app/components/MarkdownViewer";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import AdjacentPostCard from "@/app/components/AdjacentPostCard";
import { Metadata } from "next";

type PageProps = Promise<{
  slug: string;
}>;

export async function generateMetadata({
  params,
}: {
  params: PageProps;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post?.title ?? "Post",
    description: post?.description ?? "No description",
  };
}

export default async function SlugPage({ params }: { params: PageProps }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "data", "posts", `${slug}.md`);
  let content = "";

  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error(err);
    redirect("/posts");
  }

  const post = await getPost(slug);

  if (!post) {
    redirect("/posts");
  }

  const { title, date, description, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden mx-auto max-w-3/4 bg-gray-100 shadow-lg ">
      <Image
        src={`/images/posts/${post.path}.png`}
        alt={title}
        width={760}
        height={420}
        className="w-full h-1/5 max-h-[500px]"
      />
      <section className="flex flex-col px-6 py-10">
        <div className="flex items-center self-end text-gray-500">
          <AiTwotoneCalendar />
          <p className="font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-xl font-semibold">{description}</p>
        <div className="w-56 border-1 border-gray-400 mt-4 mb-8" />
        <MarkdownViewer content={content} />
      </section>
      <section className="flex shadow-md">
        {next && <AdjacentPostCard post={next} type="next" />}
        {prev && <AdjacentPostCard post={prev} type="prev" />}
      </section>
    </article>
  );
}
