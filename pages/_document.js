import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>My page</title>
          {styleTags}
        </Head>
        <body>
          <div>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}