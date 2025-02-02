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

export default function Home() {
  return (
    <>
      <Head>
        <title>ESPecto 1000 by ESP</title>
        <meta name="description" content="ESPecto 1000 by ESP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Introducing ESPectso 1000 by ESP</h1>
        <h2>An espresso maker reads your mind</h2>
      </div>

      <Link href="/gallery">
        <p>Click here to learn more ...</p>
      </Link>

      <div>
        <Image
          priority
          src="/images/hero.jpg"
          height={292}
          width={711}
          alt="ESPectso 1000"
        />
      </div>

      <div className="footer">
        <hr />
        <p>Copyrights (C) 2023 ESP, Inc. All Rights Reserved.</p>
      </div>
    </>
  );
}
