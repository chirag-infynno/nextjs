import React from "react";
import { useRouter } from "next/router";
// import

const name = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);

  return <h1>Name:{name && name}</h1>;
};

export default name;
