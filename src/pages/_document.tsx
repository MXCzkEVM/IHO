/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="dark" suppressHydrationWarning lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `!function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=localStorage.getItem("use-dark")||'"system"';('"dark"'===t||e&&'"light"'!==t)&&document.documentElement.classList.toggle("dark",!0)}();` }}></script>
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
