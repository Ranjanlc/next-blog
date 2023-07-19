import { FC } from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { PostProps } from '../../interfaces/post';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head';

const AllPostsPage: FC<PostProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All blogs written by ranjan" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};
export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
export default AllPostsPage;
