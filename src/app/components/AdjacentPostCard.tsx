import { PostData } from "@/types/post";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: PostData;
  type: "prev" | "next";
};

const ICON_CLASS =
  "text-5xl m-4 text-gray-400 transition-all group-hover:text-6xl";

export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
        className="w-full opacity-40"
      />
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-8">
        {type === "next" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "prev" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
