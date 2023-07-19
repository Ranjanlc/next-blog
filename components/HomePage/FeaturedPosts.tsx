import { FC } from 'react';
import classes from './FeaturedPosts.module.css';
import PostsGrid from '../posts/PostsGrid';
import { PostProps } from '../../interfaces/post';
const FeaturedPosts: FC<PostProps> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
