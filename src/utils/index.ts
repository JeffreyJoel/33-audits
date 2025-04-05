export function convertTitleToSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export const getOrdinalSuffix = (day: number) => {
  if (typeof day !== "number" || day < 1 || day > 31) {
    return "";
  }

  const j = day % 10;
  const k = day % 100;

  if (j === 1 && k !== 11) return `${day}st`;
  if (j === 2 && k !== 12) return `${day}nd`;
  if (j === 3 && k !== 13) return `${day}rd`;
  return `${day}th`;
};

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
