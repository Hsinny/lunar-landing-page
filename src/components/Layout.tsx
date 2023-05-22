import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Lunar | 生產力工具</title>
      </Head>
      <Header />
      <main className="mt-[64px] lg:mt-[76px]">{children}</main>
      <Footer />
    </>
  );
}
