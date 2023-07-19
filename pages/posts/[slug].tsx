import { GetStaticPaths, GetStaticProps } from 'next';
import PostContent from '../../components/posts/PostDetail/PostContent';
import { getPostData, readPosts } from '../../lib/posts-util';
import { FC } from 'react';
import { PostContentProps } from '../../interfaces/post';
import Head from 'next/head';

const PostDetailPage: FC<PostContentProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {
    params: { slug },
  }: {
    params?: {
      slug?: string;
    };
  } = context;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const postFileNames = readPosts();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
