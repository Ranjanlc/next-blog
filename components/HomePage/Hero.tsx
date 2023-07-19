import { FC } from 'react';
import classes from './Hero.module.css';
import Image from 'next/image';
const Hero: FC = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ranjan.png"
          alt="Ranjan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi! I'm Ranjan</h1>
      <p>I blog about web development -including React and Graphql</p>
    </section>
  );
};

export default Hero;
