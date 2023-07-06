import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@/components/MDXComponents";
import Header from "./header";
import Footer from "./footer";
import styles from "@/styles/styles.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
