import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary: #15202b;
    --secondary: #192734;
    --search: #253341;
    --white: #FFF;
    --white-light: rgba(255, 255, 255, 0.03);
    --cyan-blue: #8899a6;
    --outline: #2F3336;
    --retweet: #17bf63;
    --retweet-hover: rgba(23, 191, 99, 0.1);
    --like: #ea245e;
    --like-hover: rgba(234, 36, 94, 0.1);
    --border: #38444d;
    --twitter: #1da1f2;
    --twitter-hover: rgba(29, 161, 242, 0.1);
    --twitter-light-hover: #1a91da;
  }
  * {
    margin: 0;
    padding: 0;
    color: var(--white);
    box-sizing: border-box;
  }
  html, body {
    max-width: 100vw;
    max-height: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Arial, 'Helvetica Neue', sans-serif;
    border: 0;
    background: none;
  }
  html {
    background: var(--primary);
  }
  a {
    text-decoration: none;
  }
`
