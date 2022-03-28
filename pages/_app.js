import '../styles/globals.css'
import theme from '../styles/theme'
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../src/components/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </CacheProvider>
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
