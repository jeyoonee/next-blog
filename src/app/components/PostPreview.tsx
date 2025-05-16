"use client";

import { PostPreviewData } from "@/types/post";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PostPreview({
  data: { path, description, title },
}: {
  data: PostPreviewData;
}) {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition"
      onClick={() => {
        router.push(`/posts/${path}`);
      }}
    >
      <Image
        src={`/images/posts/${path}.png`}
        alt={description}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full"
      />
      <div className="relative p-4 flex flex-col">
        <h2 className="font-bold text-[16px] mb-2">{title}</h2>
        <p className="mb-2 text-[14px]">{description}</p>
      </div>
    </div>
  );
}
