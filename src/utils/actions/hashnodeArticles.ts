export async function fetchAllHashnodePosts() {
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
        return posts;
      } else {
        throw new Error("Article not found");
      }
    } catch (err) {
      return err;
    }
  }