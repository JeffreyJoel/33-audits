"use client";

import BlogCard from "@/components/BlogCard";
import Footer from "@/components/shared/footer";
import CardLoader from "@/components/shared/loaders/CardLoader";
import NavBar from "@/components/shared/navbar";
import { useHashnodeArticleDetails } from "@/hooks/useHashnodeDetails";
import { useEffect, useState } from "react";

export default function Blog() {
  const { hashnodeArticles, loading, error } = useHashnodeArticleDetails();

  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setPageLoading(false), 2000);
  }, [])

  return (
    <>
      <NavBar isHome={false}/>
      <div className="w-full mx-auto my-8 pt-8 relative">
        <h1 className="text-center font-semibold text-3xl mb-8 md:text-5xl">
          Blog
        </h1>
        <p className="my-4 font-medium text-base md:text-xl text-gray-200 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
          Check out articles published by 33Audits
        </p>
        {pageLoading || loading ? (
          <CardLoader />
        ) : (
          <div className="mx-auto grid max-w-7xl  grid-cols-1 gap-6 p-3 md:p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {hashnodeArticles &&
              hashnodeArticles?.map((post) => <BlogCard post={post?.node} key={post?.node?.title} />)}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}
