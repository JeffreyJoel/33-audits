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
  const [hashnodeArticles, setHashnodeArticles] = useState<HashnodeArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    setLoading(true);
    setError(null);

    try {
      const query = `
        query Publication(
          $host: String
        ) {
          publication(
            host: $host
          ) {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  coverImage {
                    url
                  },
                   publishedAt
                }
              }
              totalDocuments
              pageInfo {
                endCursor
                hasNextPage
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
          variables: { host: "33audits.hashnode.dev" },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch article details");
      }

      const data = await response.json();
      const posts = data.data.publication.posts.edges;

      if (posts) {
        setHashnodeArticles(posts);
      } else {
        throw new Error("Article not found");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
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
            slug: slug 
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
    fetchSinglePost 
  };
}


  