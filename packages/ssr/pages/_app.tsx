import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center m-10">
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
