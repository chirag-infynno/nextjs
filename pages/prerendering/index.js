import axios from "axios";
import React from "react";

const index = ({ user }) => {
  console.log(user);
  return (
    <>
      {user.map((data) => (
        <>
          &nbsp; <span> {data.id}</span> &nbsp;
          <spna>{data.title}</spna>
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

export default index;
