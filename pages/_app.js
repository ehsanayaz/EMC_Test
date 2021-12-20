import Head from "next/head";
import { createContext, Fragment } from "react";
import { END } from "@redux-saga/core";
import { wrapper } from "store/rootStore.js";
import { AUTH_FILL_EXISTS } from "store/auth/authSagaActions";
import { LOCATIONS_FETCH } from "store/locations/locationsSagaActions";

import "assets/css/reset.css";
import "assets/css/base.css";
import "assets/css/layout.css";
import "swiper/swiper-bundle.min.css";

import Layout from "components/Layouts";
import { getStrapiMedia } from "lib/media";
import { fetchAPI } from "lib/api";
import nookies from "nookies";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const GlobalCtx = createContext();
const MyApp = ({
  Component,
  pageProps: { categories, pathname, global, latest5Articles, ...restProps },
}) => {
  return (
    <Fragment>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={getStrapiMedia(global.favicon)}
        />
        <title>{global.siteName}</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
      </Head>
      <GlobalCtx.Provider value={{ categories, global, latest5Articles }}>
        <Layout {...{ pathname }}>
          <Component {...restProps} />
        </Layout>
      </GlobalCtx.Provider>
    </Fragment>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ Component, ctx }) => {
      // From next-redux-wrapper
      // Calls page's `getInitialProps` and fills `pageProps`
      // Fetch global site settings from Strapi
      const { jwt: token } = nookies.get(ctx);
      if (token) store.dispatch(AUTH_FILL_EXISTS(token));

      if (ctx.req) {
        store.dispatch(END);
        await store.sagaTask.toPromise();
      }

      // Pass the data to our page via props
      return {
        pageProps: {
          // Call page-level getInitialProps
          // DON'T FORGET TO PROVIDE STORE TO PAGE
          ...(Component.getInitialProps
            ? await Component.getInitialProps({ ...ctx, store })
            : {}),
          global: await fetchAPI("/global"),
          categories: await fetchAPI("/categories"),
          latest5Articles: await fetchAPI(
            "/articles?_start=0&_limit=3&_sort=created_at:DESC"
          ),
          pathname: ctx.pathname,
        },
      };
    }
);

export default wrapper.withRedux(MyApp);
