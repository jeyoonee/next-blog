import { getAllPosts } from "@/service/posts";
import PostPreview from "../components/PostPreview";
import { PostData } from "@/types/post";

export default async function FilteredPosts({ option }: { option: string }) {
  const posts = await getAllPosts();
  const filteredPosts =
    option === "all"
      ? posts
      : posts.filter((post: PostData) => post.category === option);

  return (
    <>
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {filteredPosts.map((item: PostData, id: number) => (
            <PostPreview data={item} key={id} />
          ))}
        </div>
      ) : (
        <p>No posts available in this category.</p>
      )}
    </>
  );
}
