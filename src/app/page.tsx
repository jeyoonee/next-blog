import Image from "next/image";
import PostPreview from "./components/PostPreview";
import postData from "../../data/posts.json";
import { PostPreviewData } from "@/types/post";

const typedPostData = postData as PostPreviewData[];

export default function Home() {
  return (
    <div>
      <p>I'm Jay</p>
      <Image
        src="/images/doggy.jpeg"
        alt="doggy"
        width={200}
        height={200}
        className="rounded-full"
      />

      <h1 className="text-[24px] font-bold">Featured Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {typedPostData.map((item, id) => (
          <PostPreview data={item} key={id} />
        ))}
      </div>
      <h1 className="text-[24px] font-bold">You may like</h1>
    </div>
  );
}
