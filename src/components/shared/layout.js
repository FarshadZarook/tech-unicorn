import React, { useEffect, useState } from "react";
import Head from "next/head";
import NavMenu from "../shared/navMenu";
import Footer from "../shared/footer";
import 'bootstrap/dist/css/bootstrap.css';

const layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      
      <NavMenu />
      {props.children}
      <Footer />
    </>
  );
};

export default layout;
