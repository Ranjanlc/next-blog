import { FC } from 'react';
import { PostHeaderInterface } from '../../../interfaces/post';
import Image from 'next/image';
import classes from './PostHeader.module.css';
const PostHeader: FC<PostHeaderInterface> = ({ title, image }) => {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt="post" width={200} height={150} />
    </header>
  );
};

export default PostHeader;
