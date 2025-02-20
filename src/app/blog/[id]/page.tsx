"use client";

import NavBar from "@/components/shared/navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Footer from "@/components/shared/footer";
import Image from "next/image";
import Link from "next/link";
import { TailwindStyledContent } from "@/hooks/useTailwindStyledContent";
import { useHashnodeArticleDetails } from "@/hooks/useHashnodeDetails";
import { BookOpen, Clock } from "lucide-react";
import BlogSkeleton from "@/components/shared/loaders/BlogLoader";
import { getOrdinalSuffix } from "@/utils";

export default function SinglePost() {
  const params = useParams();

  const { fetchSinglePost, loading, error } = useHashnodeArticleDetails();
  const [hashnodeDetails, setHashnodeDetails] = useState<any | null>(null);
  const [date, setDate] = useState<any | null>(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setPageLoading(false), 2000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const post_details = await fetchSinglePost(params?.id);
      setHashnodeDetails(post_details);
      const date = new Date(post_details.publishedAt);
      setDate(date);
    };

    fetchData();
  }, [params.id]);
  return (
    <div>
      <NavBar isHome={false} />
      <div className="main-layout pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl  mb-20">
          {loading || pageLoading ? (
            <BlogSkeleton />
          ) : (
            <div className="">
              {hashnodeDetails && hashnodeDetails?.coverImage?.url ? (
                <div
                  className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
                  style={{ height: "28em" }}
                >
                  <div
                    className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,transparent,rgba(0,0,0,.7)",
                    }}
                  ></div>
                  <Image
                    loading="lazy"
                    src={hashnodeDetails?.coverImage?.url || ""}
                    className="absolute left-0 top-0 w-full h-full h-25 z-0 object-cover"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                  <div className="p-4 absolute bottom-0 left-0 z-10">
                    {/* <h2 className="text-2xl sm:text-4xl font-semibold text-gray-100 leading-tight">
             {hashnodeDetails?.title}
           </h2> */}
                  </div>
                </div>
              ) : (
                ""
              )}
              {/*  */}
              <div className="px-4 lg:px-0 mt-2 md:mt-12 text-foreground/90 max-w-screen-md mx-auto text-lg leading-relaxed prose">
                <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-center uppercase font-bold text-foreground/90  mb-5">
                  {hashnodeDetails?.title}
                </h1>

                <div className="my-4 flex justify-center">
                  <span className="flex items-center gap-2">
                    <BookOpen /> {hashnodeDetails?.readTimeInMinutes} minutes
                  </span>
                  <span className="flex items-center gap-2 ml-4">
                    <Clock /> {getOrdinalSuffix(date?.getDate())}{" "}
                    {date?.toLocaleString("default", { month: "long" })}{" "}
                    {date?.getFullYear()}
                  </span>
                </div>

                <div className="mb-10 text-foreground">
                  <TailwindStyledContent
                    content={hashnodeDetails?.content?.html || ""}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
