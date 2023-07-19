import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDir = path.join(process.cwd(), 'content');

interface Data {
  date?: string;
  isFeatured?: boolean;
  excerpt?: string;
  image?: string;
  title?: string;
}
export const readPosts = () => {
  return fs.readdirSync(postsDir, 'utf-8');
};
export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ''); //Remove file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content }: { data: Data; content: string } =
    matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};
// export function getAllPosts(onlyFiles: true): string[];
// export function getAllPosts(onlyFiles?: undefined): {
//   content: string;
//   date?: string;
//   isFeatured?: boolean;
//   excerpt?: string;
//   image?: string;
//   title?: string;
//   slug: string;
// }[];
// export function getAllPosts(onlyFiles: null): Object[];
export function getAllPosts() {
  const postFiles = readPosts();
  // if (onlyFiles) return postFiles;
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  const sortedPosts = allPosts.sort((a, b) => (b.date > a.date ? 1 : -1));
  return sortedPosts;
}

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter((post) => post.isFeatured);
  return filteredPosts;
};
