import React from "react";

interface Props {
  pools: number;
}

export default function Home(props: Props) {
  return <p>{props.pools}</p>;
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count");
  const json = await response.json();
  console.log(json);
  return {
    props: {
      pools: json.count,
    },
  };
};
