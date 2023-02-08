import Head from "next/head";
import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { data } };
};

const AllCoders = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Coder wikipedia || All Coders</title>
        <meta name="keywords" content="Coders" />
      </Head>

      <div className="coder__container">
        <h2>All coders</h2>
        {data.map((coder) => {
          return (
            <Link
              href={`/coders/${coder.id}`}
              className="coder__person"
              key={coder.id}
            >
              {coder.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllCoders;
