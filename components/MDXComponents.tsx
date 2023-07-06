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
  p: ({ children }: ParagraphProps) => (
    <p className={styles.paragraph}>{children}</p>
  ),
  a: ({ href, children }: AnchorProps) => (
    <a href={href} className={styles.link}>
      {children}
    </a>
  ),
  img: ({ src, alt }: ImageProps) => (
    <Image
      src={src}
      alt={alt}
      className={styles.image}
      width={300}
      height={300}
    />
  ),
};

export default components;
