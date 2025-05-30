"use client";

import DropdownSelect from "../components/Dropdown";
import postData from "../../../data/posts.json";
import PostPreview from "../components/PostPreview";
import { PostData } from "@/types/post";
import { useState } from "react";

export default function Posts() {
  const [option, setOption] = useState("all");
  const filteredPosts =
    option === "all"
      ? postData
      : postData.filter((post: PostData) => post.category === option);

  return (
    <>
      <div className="mb-4 w-60">
        <DropdownSelect selected={option} onChange={setOption} />
      </div>
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
          {filteredPosts.map((item, id) => (
            <PostPreview data={item} key={id} />
          ))}
        </div>
      ) : (
        <p>No posts available in this category.</p>
      )}
    </>
  );
}
