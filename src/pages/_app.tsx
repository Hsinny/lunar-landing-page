import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} min-h-screen tracking-wide text-black`}>
      <Component {...pageProps} />
    </div>
  );
}
