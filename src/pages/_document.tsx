import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  window.ybug_settings = {"id":"qpd4qfn7k5h0n92rwb9c"};
                  var ybug = document.createElement('script');
                  ybug.type = 'text/javascript';
                  ybug.async = true;
                  ybug.src = 'https://widget.ybug.io/button/'+window.ybug_settings.id+'.js';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(ybug, s);
                })();
              `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
