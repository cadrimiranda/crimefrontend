import "../styles/globals.css";
import "../styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import locale from "antd/lib/locale/pt_BR";
import { Provider as UseFetchProvider } from "use-http";
import { FilterProvider } from "../components/FilterProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider locale={locale}>
      <UseFetchProvider url={process.env.NEXT_PUBLIC_SERVICE_URL || ""}>
        <FilterProvider>
          <Component {...pageProps} />
        </FilterProvider>
      </UseFetchProvider>
    </ConfigProvider>
  );
}

export default MyApp;
