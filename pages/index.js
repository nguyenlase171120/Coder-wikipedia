import Head from "next/head";
import Link from "next/link";
import styled from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coder wikipedia || Homepage</title>
        <meta name="keywords" content="home" />
      </Head>
      <div className={styled.container}>
        <h1 className={styled.title}>Homepage</h1>

        <div className={styled.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
            impedit suscipit architecto, odio inventore nostrum non neque dicta.
            Quam magni accusantium culpa distinctio tempore iure accusamus,
            dolorem nobis odit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
            impedit suscipit architecto, odio inventore nostrum non neque dicta.
            Quam magni accusantium culpa distinctio tempore iure accusamus,
            dolorem nobis odit.
          </p>
        </div>

        <Link href="/coders" className={styled.button}>
          See All Coders
        </Link>
      </div>
    </>
  );
}
