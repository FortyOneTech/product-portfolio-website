import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import galleryStyles from "@/styles/Gallery.module.css";
import Layout from "@/components/Layout";

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
      <Layout>
      <p className="subTitle">Three models for every need</p>

      <Link className="navLink" href="/">
        <p>Back to the home page</p>
      </Link>

      <div>
        <div>
          <p className={galleryStyles.mainTitle}>Solitude</p>
          <p className={galleryStyles.subTitle}>Perfect for highly motivated individuals</p>
          <Image
            priority
            src="/images/solitude.jpg"
            height={277}
            width={381}
            alt="solitude"
          />
        </div>

        <div>
          <p className={galleryStyles.mainTitle}>Duo</p>
          <p className={galleryStyles.subTitle}>Perfect for you and your partner</p>
          <Image
            priority
            src="/images/duo.jpg"
            height={277}
            width={381}
            alt="duo"
          />
        </div>

        <div>
          <p className={galleryStyles.mainTitle}>Teamwork</p>
          <p className={galleryStyles.subTitle}>Perfect for your entire team</p>
          <Image
            priority
            src="/images/teamwork.jpg"
            height={277}
            width={381}
            alt="teamwork"
          />
        </div>
      </div>

      <Link className="navLink" href="/">
        <p>Back to the home page</p>
      </Link>

      </Layout>
    </>
  );
}
