"use client";

import PostPreview from "./components/PostPreview";
import postData from "../../data/posts.json";
import { PostPreviewData } from "@/types/post";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import Hero from "@/app/components/Hero";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

const featuredData: PostPreviewData[] = postData.filter(
  (data) => data.featured
);

const mayLikeData: PostPreviewData[] = postData.filter(
  (data) => !data.featured
);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Home() {
  return (
    <div className="w-full m-auto">
      <Hero />
      <div className="flex flex-col items-center">
        <h1 className="text-left w-full text-[24px] font-bold mb-2 px-5">
          Featured Posts
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {featuredData.map((item, id) => (
            <PostPreview data={item} key={id} />
          ))}
        </div>
      </div>
      <h1 className="text-[24px] font-bold mt-3 p-5">You may like</h1>
      <div className="px-5 mb-10">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="px-3"
        >
          {mayLikeData.map((item, id) => (
            <PostPreview data={item} key={id} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
