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

export default function PreOrder() {
  return (
    <>
      <Layout>
        <p className="subTitle">To pre-order, call 1-800-555-1212</p>

        <Link className="navLink" href="/">
          Back to the home page
        </Link>

        <div>
          <Image
            priority
            src="/images/preorder.jpg"
            height={425}
            width={640}
            alt="pre-order"
          />
        </div>

        <Link className="navLink" href="/">
          <p>Back to the home page</p>
        </Link>
      </Layout>
    </>
  );
}
