/* eslint-disable @next/next/no-title-in-document-head */
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <main>
          <Main />
          <NextScript />
        </main>
      </Html>
    );
  }
}
