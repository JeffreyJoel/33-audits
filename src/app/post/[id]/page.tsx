"use client";

import NavBar from "@/components/shared/navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Footer from "@/components/shared/footer";
import Image from "next/image";
import Link from "next/link";
import { TailwindStyledContent } from "@/hooks/useTailwindStyledContent";
import { useHashnodeArticleDetails } from "@/hooks/useHashnodeDetails";

export default function SinglePost() {
  const params = useParams();

  const { fetchSinglePost, loading, error } = useHashnodeArticleDetails();
  const [hashnodeDetails, setHashnodeDetails] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const post_details = await fetchSinglePost(params?.id);
      console.log(post_details);
      
      setHashnodeDetails(post_details);
    };

    fetchData();
  }, [params.id]);
  return (
    <div>
      <NavBar />
      <div className="main-layout pt-20">
        <div className="mx-auto max-w-6xl  mb-20">
          <div className="">
           {
            hashnodeDetails && hashnodeDetails?.coverImage?.url ?  <div
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
              src={hashnodeDetails?.coverImage || ""}
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
          </div>:
          ""
           }
            {/*  */}
            <div className="px-4 lg:px-0 mt-12 text-[#fafafa] max-w-screen-md mx-auto text-lg leading-relaxed prose">
              <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight text-center uppercase font-bold text-[#fafafa]  mb-5">
                {hashnodeDetails?.title}
              </h1>

              <div className="mb-10 text-white">
                <TailwindStyledContent
                  content={hashnodeDetails?.content?.html || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
