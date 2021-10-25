//import App from 'next/app'
import '../styles/dist/styles.css'
import Head from 'next/head'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  
  return <>
  <Head><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /></Head>
    <ThemeProvider><Component {...pageProps} /></ThemeProvider>
  </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp