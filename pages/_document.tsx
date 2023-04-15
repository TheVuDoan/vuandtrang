import Document, { Head, Html, Main, NextScript } from 'next/document';
import { metadata } from '../utils/config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/logo.svg" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Great Vibes&display=swap" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Muli&display=swap" />
          <meta name="description" content={metadata.description} />
          <meta property="og:site_name" content={metadata.ogSitename} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:image" content={metadata.ogImage} />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
