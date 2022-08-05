import React from "react";
import { useRouter } from "next/router";

import axios from "axios";

const ProductDetail = ({ userdata }) => {
  console.log(userdata);
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading....</p>;
  }

  return (
    <>
      <spna>{userdata.title}</spna>
      <h1>a</h1>
      {/* <spna>{userdata.id}</spna>
      &nbsp; <span>id</span> &nbsp;
      <br />
      &nbsp; <span>title</span> &nbsp;
      <br />
      &nbsp; <span>description</span> &nbsp;
      <spna>{userdata.description}</spna>
      <br /> */}
    </>
  );
};
export default ProductDetail;

// export async function getStaticPaths() {
// const response = await axios.get("https://dummyjson.com/products");
// const data = response.data.products;

// return {
//   paths: [{ params: { id: "1" } }],
//   fallback: true,
// };
// }

export async function getStaticPaths() {
  const response = await axios.get("https://dummyjson.com/products");
  const data = response.data.products;

  console.log(data);

  const paths = data.map((id) => {
    console.log(id);
    return {
      params: {
        id: `${id.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//     fallback: true,
//   };
// }
export async function getStaticProps(context) {
  const { params } = context;
  const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
  console.log(res);
  return {
    props: {
      userdata: res.data,
    },
    revalidate: 1,
  };
}
