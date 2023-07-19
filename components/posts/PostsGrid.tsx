import { FC } from 'react';
import PostItem from './PostItem';
import classes from './PostsGrid.module.css';
import { PostProps } from '../../interfaces/post';
const PostsGrid: FC<PostProps> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
