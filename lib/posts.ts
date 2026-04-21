export type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  content: string; // plain text or markdown-ish — swap for MDX later
};

export const POSTS: Post[] = [
  {
    slug: "post-one",
    title: "Post title goes here",
    date: "Apr 2026",
    tag: "Thoughts",
    content: `Write your post here. You can replace this with whatever you want to say.

This is the second paragraph. Keep writing.`,
  },
  {
    slug: "post-two",
    title: "Another post title",
    date: "Mar 2026",
    tag: "Build Log",
    content: `Write your post here. You can replace this with whatever you want to say.

This is the second paragraph. Keep writing.`,
  },
  {
    slug: "post-three",
    title: "One more thing you wrote about",
    date: "Feb 2026",
    tag: "Dev",
    content: `Write your post here. You can replace this with whatever you want to say.

This is the second paragraph. Keep writing.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
