import { FC } from 'react';
import classes from './AllPosts.module.css';
import PostsGrid from './PostsGrid';
import { PostProps } from '../../interfaces/post';

const AllPosts: FC<PostProps> = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
