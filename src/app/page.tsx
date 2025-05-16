import Hero from "@/app/components/Hero";
import FeaturedPosts from "@/app/components/FeaturedPosts";
import MayLikePosts from "@/app/components/MayLikePosts";

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <Hero />
      <FeaturedPosts />
      <MayLikePosts />
    </div>
  );
}
