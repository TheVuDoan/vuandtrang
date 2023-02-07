import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Great Vibes" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Muli" />
          <meta
            name="description"
            content="VuandTrang Wedding Site!"
          />
          <meta property="og:site_name" content="vandt.day" />
          <meta
            property="og:description"
            content="VuandTrang Wedding Site!"
          />
          <meta property="og:title" content="VuandTrang Wedding Site!" />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
