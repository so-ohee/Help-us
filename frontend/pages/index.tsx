import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>main</h1>
      <button onClick={() => router.push("/good")}>Good</button>
    </div>
  );
};

export default Home;
