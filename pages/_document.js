import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>


                    <link rel="icon" href="static/svg/globe.svg" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />

                    <link rel="manifest" href="manifest.json" />
                    
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="application-name" content="Where in the world?" />
                    <meta name="apple-mobile-web-app-title" content="Where in the world?" />
                    <meta name="theme-color" content="#202c37" />
                    <meta name="msapplication-navbutton-color" content="#202c37" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="msapplication-starturl" content="/" />
                    

                    <link rel="icon" type="image/png" sizes="512x512" href="/static/icons/logo-512x512.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/icons/logo-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192" href="/static/icons/logo-192x192.png" />
                    <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/icons/logo-192x192.png" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument