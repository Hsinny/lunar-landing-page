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
      <main className="mt-[64px] lg:mt-[76px]">
        {children}
      </main>
      <Footer />
    </>
  );
}