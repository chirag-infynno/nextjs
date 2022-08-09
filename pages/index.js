import Head from "next/head";
import Image from "next/image";
import { HeadComponent } from "../Component/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadComponent />
      <h1>Index page</h1>

      <div className="flex justify-center">{/* <span> flex</span> */}</div>
    </>
  );
}
