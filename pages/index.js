import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";

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
      <Layout>
      <p className="subTitle">An espresso maker reads your mind</p>
      <Link className="navLink" href="/gallery">
        Click here to learn more ...
      </Link>

      <div className={styles.heroDiv}>
        <Image
          priority
          src="/images/hero.jpg"
          fill
          object-fit="contain"
          alt="ESPectso 1000"
        />
      </div>

      <Link className="navLink" href="/pre-order">
        Click here to pre-order...
      </Link>

      </Layout>
    </>
  );
}
