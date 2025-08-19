export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: number;
}
