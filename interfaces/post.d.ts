export interface Post {
  slug: string;
  image: string;
  excerpt: string;
  title: string;
  date: string;
}
export interface PostProps {
  posts: Post[];
}
export interface PostHeaderInterface {
  title: string;
  image: string;
}
export interface PostContent {
  slug: string;
  title: string;
  image: string;
  content: string;
  date: string;
  excerpt?: string;
}
export interface PostContentProps {
  post: PostContent;
}
