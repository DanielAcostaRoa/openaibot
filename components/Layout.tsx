import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

const Layout = ({children}) => {
  return (
    <>
      <Head>AiBot Webapp</Head>
      <div className={styles.container}>
        <div className={styles.chat}>
          {children}
          </div>
      </div>
    </>
  );
};

export default Layout;
