import Link from "next/link";
import Layout from "../../components/layout";
import { getSinglePost, getPosts } from "../../lib/posts";

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

const BlogPage = (props) => (
  <Layout>
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export default BlogPage;
