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

export default function Gallery() {
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
        <h2>Three models for every need</h2>
      </div>

      <Link href="/">
        <p>Back to the home page</p>
      </Link>

      <div>
        <div>
          <p className="mainTitle">Solitude</p>
          <p className="subTitle">Perfect for highly motivated individuals</p>
          <Image
            priority
            src="/images/solitude.jpg"
            height={277}
            width={381}
            alt="solitude"
          />
        </div>

        <div>
          <p className="mainTitle">Duo</p>
          <p className="subTitle">Perfect for you and your partner</p>
          <Image
            priority
            src="/images/duo.jpg"
            height={277}
            width={381}
            alt="duo"
          />
        </div>

        <div>
          <p className="mainTitle">Teamwork</p>
          <p className="subTitle">Perfect for your entire team</p>
          <Image
            priority
            src="/images/teamwork.jpg"
            height={277}
            width={381}
            alt="teamwork"
          />
        </div>
      </div>

      <Link href="/">
        <p>Back to the home page</p>
      </Link>

      <div className="footer">
        <hr />
        <p>Copyrights (C) 2023 ESP, Inc. All Rights Reserved.</p>
      </div>
    </>
  );
}
