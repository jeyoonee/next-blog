import PostPreview from "@/app/components/PostPreview";
import { PostPreviewData } from "@/types/post";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const featuredPosts: PostPreviewData[] = await getFeaturedPosts();

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-left w-full text-[24px] font-bold mb-2 px-5">
        Featured Posts
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {featuredPosts.map((item, id) => (
          <PostPreview data={item} key={id} />
        ))}
      </div>
    </section>
  );
}
