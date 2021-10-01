import React from 'react';
import Document, {
  Head,
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang={'ru'}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function (m, e, t, r, i, k, a) {
                  m[i] =
                    m[i] ||
                    function () {
                      (m[i].a = m[i].a || []).push(arguments);
                    };
                  m[i].l = 1 * new Date();
                  (k = e.createElement(t)),
                    (a = e.getElementsByTagName(t)[0]),
                    (k.async = 1),
                    (k.src = r),
                    a.parentNode.insertBefore(k, a);
                })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
                ym(85718205, 'init', {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true,
                });
              `,
            }}
          />
        </Head>
        <body>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://mc.yandex.ru/watch/85718205"
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
