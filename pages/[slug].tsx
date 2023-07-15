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

  const paths = filenames.map((filename) => {
    const fileExtension = path.extname(filename);

    if (fileExtension === ".md" || fileExtension === ".mdx") {
      return {
        params: {
          slug: filename.replace(fileExtension, ""),
        },
      };
    }
  });

  return {
    paths: paths.filter(Boolean), // Filter out undefined values
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postFilePathMDX = path.join(
    process.cwd(),
    "content",
    `${params.slug}.mdx`
  );
  const postFilePathMD = path.join(
    process.cwd(),
    "content",
    `${params.slug}.md`
  );
  const mdxSource = fs.existsSync(postFilePathMDX)
    ? fs.readFileSync(postFilePathMDX, "utf-8")
    : "";

  let content, data;

  if (mdxSource) {
    const { content: mdxContent, data: mdxData } = matter(mdxSource);
    content = mdxContent;
    data = mdxData;
  } else {
    const mdSource = fs.readFileSync(postFilePathMD, "utf-8");
    const { content: mdContent, data: mdData } = matter(mdSource);
    content = mdContent;
    data = mdData;
  }

  const mdxSerialized = await serialize(content);

  return {
    props: {
      source: mdxSerialized,
      frontMatter: data,
    },
  };
}
