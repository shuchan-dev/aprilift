import React from "react";
import styles from "@/styles/styles.module.css";
import Image from "next/image";

interface MDXComponents {
  [key: string]: React.ComponentType<any>;
}

interface ParagraphProps {
  children: React.ReactNode;
}

interface AnchorProps {
  href: string;
  children: React.ReactNode;
}

interface ImageProps {
  src: string;
  alt: string;
}

const components: MDXComponents = {
  h1: ({ children }: ParagraphProps) => (
    <h1 className={styles.title}>{children}</h1>
  ),
  h2: ({ children }: ParagraphProps) => (
    <h2 className={styles.h2}>{children}</h2>
  ),
  h3: ({ children }: ParagraphProps) => (
    <h3 className={styles.h3}>{children}</h3>
  ),
  p: ({ children }: ParagraphProps) => (
    <p className={styles.paragraph}>{children}</p>
  ),
  a: ({ href, children }: AnchorProps) => (
    <a href={href} className={styles.link}>
      {children}
    </a>
  ),
  li: ({ children }: ParagraphProps) => (
    <li className={styles.li}>{children}</li>
  ),
  ul: ({ children }: ParagraphProps) => (
    <ul className={styles.ul}>{children}</ul>
  ),
  img: ({ src, alt }: ImageProps) => (
    <Image
      src={src}
      alt={alt}
      className={styles.image}
      width={350}
      height={500}
    />
  ),
};

export default components;
