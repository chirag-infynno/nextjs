import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
const Index = ({ user }) => {
  // const
  const router = useRouter();

  console.log(user);
  return (
    <>
      {user.map((data) => (
        <>
          &nbsp; <span> {data.id}</span> &nbsp;
          <spna onClick={() => router.push(`prerendering/${data.id}`)}>
            {data.title}
          </spna>
          <br></br>
        </>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const res = await axios.get("https://dummyjson.com/products");
  // const data = res.json();
  return {
    props: {
      user: res.data.products,
    },
  };
}

export default Index;
