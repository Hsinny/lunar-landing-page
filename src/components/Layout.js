import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
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
};
export default Layout;