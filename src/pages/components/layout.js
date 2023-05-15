import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default ({ children }) => {
  return (
    <>
      <Head>
        <title>Lunar | 生產力工具</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}