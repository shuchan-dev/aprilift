import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import MDXLayout from "@/components/MDXLayout";

interface PostProps {
  source: any;
  frontMatter: {
    title: string;
    description: string;
  };
}

export default function Post({ source, frontMatter }: PostProps) {
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <MDXLayout>
        <MDXRemote {...source} />
      </MDXLayout>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "content");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.md$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postFilePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const source = fs.readFileSync(postFilePath, "utf-8");

  const { content, data } = matter(source);

  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export const runtime = "edge";
