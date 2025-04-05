import type { MetadataRoute } from "next";
import { fetchAllHashnodePosts } from "@/utils/actions/hashnodeArticles";
import { convertTitleToSlug } from "@/utils";

export default async function sitemap() {
  const baseUrl = "https://www.33audits.xyz/";
  const hashnodePosts = await fetchAllHashnodePosts();

  const hashnodeUrls = hashnodePosts?.map((post: any) => ({
    url: `${baseUrl}/blog/${convertTitleToSlug(post.node.title)}`,
    lastModified: new Date(post.node.publishedAt),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...hashnodeUrls
  ];
}
