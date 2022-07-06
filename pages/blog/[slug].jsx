import Link from "next/link";
import Layout from "../../components/layout";
import { getSinglePost, getPosts } from "../../lib/posts";

// PostPage page component
const PostPage = (props) => {
  // Render post title and content in the page from props
  return (
    <div>
      <Layout>
        <h1>{props.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
      </Layout>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}

export default PostPage;
