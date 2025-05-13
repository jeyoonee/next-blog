"use client";

import { PostPreviewData } from "@/types/post";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PostPreview({ data }: { data: PostPreviewData }) {
  const router = useRouter();

  return (
    <div
      className="w-50"
      onClick={() => {
        router.push(`/posts/${data.path}`);
      }}
    >
      <Image
        src={`/images/posts/${data.path}.png`}
        alt={data.description}
        width={400}
        height={300}
      />
      <h2 className="font-bold">{data.title}</h2>
      <p className="mb-2">{data.description}</p>
      <span className="">{data.date}</span>
    </div>
  );
}
