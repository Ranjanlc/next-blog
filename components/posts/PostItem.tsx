import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import classes from './PostItem.module.css';
import { Post } from '../../interfaces/post';
import { execPath } from 'process';
const PostItem: FC<{ post: Post }> = ({ post }) => {
  const { title, date, excerpt, slug, image } = post;
  const imagePath = `/images/posts/${slug}/${image}`;
  const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const linkPath = `/posts/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt="title"
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p> {excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
