import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "@/components/BlogPostPage";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";

type BlogRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Spacelyt"
    };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 800,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostRoute({ params }: BlogRouteProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return <BlogPostPage post={post} />;
}
