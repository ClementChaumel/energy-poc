import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en-GB">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <link rel="shortcut icon" href="http://ddqol34nhllwe.cloudfront.net/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="http://ddqol34nhllwe.cloudfront.net/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://d3tbpaf5tfzpa.cloudfront.net/buenos-aires.css" />
          <link rel="stylesheet" href="https://d3tbpaf5tfzpa.cloudfront.net/source-sans-pro.css" />
          <link rel="stylesheet" href="https://ddqol34nhllwe.cloudfront.net/reset.css" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
