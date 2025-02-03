import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ESPecto 1000 by ESP</title>
        <meta name="description" content="ESPecto 1000 by ESP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="topBand">
        <p className="mainTitle">Introducing ESPectso 1000 by ESP</p>
      </div>

      { children }

      <div className="footer">
        <hr />
        <p>Copyrights (C) 2023 ESP, Inc. All Rights Reserved.</p>
      </div>
    </>
  );
}
