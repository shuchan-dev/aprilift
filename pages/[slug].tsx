import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";

import styles from "../styles/styles.module.css";
import Header from "@/components/header";
import Image from "next/image";
import Footer from "@/components/footer";

// Define the type for MDX source data
type MDXSource = {
  compiledSource: string;
  renderedOutput: string;
  scope: Record<string, unknown>;
};

// Define the type for params in getStaticProps
type Params = {
  slug: string;
};

export default function BlogPost({
  source,
  frontMatter,
}: {
  source: MDXSource;
  frontMatter: any;
}) {
  return (
    <div>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
        {/* You can add more meta tags here if needed */}
      </Head>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{frontMatter.title}</h1>
        <MDXRemote {...source} components={MDXComponents} />
      </div>
      <Footer />
    </div>
  );
}
const MDXComponents = {
  p: ({ children }: React.PropsWithChildren<{}>) => (
    <p className={styles.paragraph}>{children}</p>
  ),
  a: ({ href, children }: React.PropsWithChildren<{ href: string }>) => (
    <a href={href} className={styles.link}>
      {children}
    </a>
  ),
  img: ({ src, alt }: { src: string; alt: string }) => (
    <Image
      src={src}
      alt={alt}
      className={styles.image}
      width={300}
      height={300}
    />
  ),
};

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

export async function getStaticProps({ params }: { params: Params }) {
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
