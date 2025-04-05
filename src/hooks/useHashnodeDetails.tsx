import { fetchAllHashnodePosts } from "@/utils/actions/hashnodeArticles";
import { useState, useEffect } from "react";

interface HashnodeArticle {
  node: {
    title: string;
    brief: string;
    coverImage?: {
      url: string;
    };
    publishedAt: string;
  };
}

export function useHashnodeArticleDetails() {
  const [hashnodeArticles, setHashnodeArticles] = useState<HashnodeArticle[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);

    const posts = await fetchAllHashnodePosts();
    if (posts) {
      setHashnodeArticles(posts);
    } else {
      setError("Failed to fetch articles");
    }
    setLoading(false);
  };

  const fetchSinglePost = async (slug: string | string[]) => {
    setLoading(true);
    setError(null);

    try {
      const query = `
       query GetArticle($host: String!, $slug: String!) {
            publication(host: $host) {
              post(slug: $slug) {
                title
                brief
                readTimeInMinutes
                coverImage {
                  url
                }
                content {
                  html
                }
                publishedAt
                author {
                  name
                  username
                }
              }
            }
          }
      `;

      const response = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            host: "33audits.hashnode.dev",
            slug: slug,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch post details");
      }

      const data = await response.json();

      const post = data.data.publication.post;

      if (post) {
        return post;
      } else {
        throw new Error("Post not found");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {
    hashnodeArticles,
    loading,
    error,
    fetchSinglePost,
  };
}
