import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />)); // eslint-disable-line react/jsx-props-no-spreading
    const styleTags = sheet.getStyleElement();
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
