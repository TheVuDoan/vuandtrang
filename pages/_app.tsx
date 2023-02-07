import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Layout from '../components/Layout';
// import Loading from '../components/Loading';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on("routeChangeError", (e) => setLoading(true));
    router.events.on("routeChangeStart", (e) => setLoading(true));
    router.events.on("routeChangeComplete", (e) => setLoading(false));

    return () => {
      router.events.off("routeChangeError", (e) => setLoading(true));
      router.events.off("routeChangeStart", (e) => setLoading(true));
      router.events.off("routeChangeComplete", (e) => setLoading(false));
    };
  }, [router.events]);

  return (
    <Layout>
      {/* {loading ? <Loading /> : 
        <Component {...pageProps} />
      } */}
      <Component {...pageProps} />
    </Layout>
  )
}
