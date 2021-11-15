import "../styles/globals.css";
import "../styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/pt_BR";

import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={locale}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
