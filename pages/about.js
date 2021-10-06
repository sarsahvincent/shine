import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import React from "react";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>about</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <container>
          <AboutHero className={styles.about__hero__image} />
        </container>
        <container>
          <AboutUs />
        </container>
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
