"use client";

import BlogCard from "@/components/BlogCard";
import NavBar from "@/components/shared/navbar";
import { useHashnodeArticleDetails } from "@/hooks/useHashnodeDetails";

export default function Blog() {
  const { hashnodeArticles, loading, error } = useHashnodeArticleDetails();
  console.log(hashnodeArticles);
  

  return (
    <>
      <NavBar />
      <div className="w-full mx-auto mt-12 pt-8 relative">
        <h1 className="text-center font-semibold text-3xl mb-8 md:text-5xl">Blog</h1>

        <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-6 p-3 md:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {(hashnodeArticles &&
              hashnodeArticles?.map((post) => (
                <BlogCard  post={post?.node} />
              ))) }
          </div>
      </div>
    </>
  );
}
