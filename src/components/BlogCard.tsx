import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { convertTitleToSlug } from "@/utils";

interface Post {
    id?: number;
    title?: string;
    content?: string;
    publishedAt?: number;
    post_url?: string;
    coverImage?: {url:string};
    brief?: string;
  }


function BlogCard({ post }: { post: Post }) {

  const slug = convertTitleToSlug(post?.title || "");
  return (
    <Card className="max-w-[380px] mx-auto relative bg-gray-200 text-foreground border border-slate-300   md:max-w-sm hover:shadow-md hover:shadow-blue-400 transition-all duration-300 rounded-2xl cursor-pointer">
      <Link href={`/blog/${slug}`}>
      {
        post?.coverImage?.url ?
        <Image
          src={post?.coverImage?.url || "https://pbs.twimg.com/profile_images/1677046353451466752/JQtGE1MF_400x400.jpg"}
          alt="Blog post cover image"
          width={400}
          height={100}
          className="rounded-t-2xl object-cover w-full h-[200px]"
        />:
        <div className="w-full h-[220px] bg-gray-300 rounded-t-2xl mb-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full text-slate-400">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      </div>
      }
        
        
        <CardContent className="px-6 pt-3 pb-10 text-foreground space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {/* <CalendarDaysIcon className="w-4 h-4" /> */}
            <span className="text-foreground">{post.publishedAt}</span>
          </div>
          <h3 className="text-2xl text-foreground font-bold">{post?.title}</h3>
          <p className="text-foreground h-[100px]">
            {post?.brief?.slice(0, 100) + "..."}
          </p>
        </CardContent>
      </Link>

        <div className="rounded-b-2xl absolute bottom-0 mt-8 px-4 w-full flex items-center justify-end h-[60px]">

          <ArrowRight />
        </div>
    </Card>
  );
}
export default BlogCard;