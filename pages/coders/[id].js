import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const CoderDetail = ({ user }) => {
  return (
    <>
      <Head>
        <title>Coder wikipedia || CoderDetail</title>
        <meta name="keywords" content="detail" />
      </Head>

      <div
        style={{
          padding: "40px 0px",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Coders detail</h1>
        <p>username: {user.username}</p>
        <p>email: {user.email}</p>
        <p>phone: {user.phone}</p>
      </div>
    </>
  );
};

export default CoderDetail;
