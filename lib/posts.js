import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "https://blog.anthropogenic.com",
  key: "7b17904f7b9a011fdd1be92023",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: "tags,authors",
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
