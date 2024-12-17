import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { convertTitleToSlug } from "@/utils";

interface Post {
    id?: number;
    title?: string;
    content?: string;
    createdAt?: number;
    post_url?: string;
    coverImage?: {url:string};
    brief?: string;
    platform?: string;
    creator_address?: string;
  }


function BlogCard({ post }: { post: Post }) {

  const slug = convertTitleToSlug(post?.title || "");
  return (
    <Card className="max-w-[380px] mx-auto relative bg-blue-700 text-white border border-slate-950 md:max-w-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl cursor-pointer">
      <Link href={`/post/${slug}`}>
        <Image
          src={post?.coverImage?.url || "https://pbs.twimg.com/profile_images/1677046353451466752/JQtGE1MF_400x400.jpg"}
          alt="Blog post cover image"
          width={400}
          height={100}
          className="rounded-t-2xl object-cover w-full h-[200px]"
        />
        <CardContent className="px-6 pt-3 pb-10 text-white space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {/* <CalendarDaysIcon className="w-4 h-4" /> */}
            <span>{post.createdAt}</span>
          </div>
          <h3 className="text-xl text-white font-bold">{post?.title}</h3>
          <p className="text-muted-white h-[100px]">
            {post?.brief?.slice(0, 150) + "..."}
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