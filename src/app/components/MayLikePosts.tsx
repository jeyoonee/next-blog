import PostPreview from "@/app/components/PostPreview";
import { PostData } from "@/types/post";
import MultiCarousel from "./MultiCarousel";
import { getNonFeaturedPosts } from "@/service/posts";

export default async function MayLikePosts() {
  const mayLikePosts: PostData[] = await getNonFeaturedPosts();

  return (
    <>
      <h1 className="text-[24px] font-bold mt-3 p-5">You may like</h1>
      <div className="px-5 mb-10">
        <MultiCarousel>
          {mayLikePosts.map((item, id) => (
            <PostPreview data={item} key={id} />
          ))}
        </MultiCarousel>
      </div>
    </>
  );
}
