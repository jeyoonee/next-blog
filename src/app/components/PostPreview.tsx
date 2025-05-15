"use client";

import { PostPreviewData } from "@/types/post";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PostPreview({ data }: { data: PostPreviewData }) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer rounded-lg shadow-md bg-[#1E1E1E] hover:shadow-lg transition"
      onClick={() => {
        router.push(`/posts/${data.path}`);
      }}
    >
      <Image
        src={`/images/posts/${data.path}.png`}
        alt={data.description}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[165px]"
      />
      <div className="relative p-5 flex flex-col">
        <h2 className="font-bold text-[16px] mb-2">{data.title}</h2>
        <p className="mb-2 text-[14px]">{data.description}</p>
      </div>
    </div>
  );
}
