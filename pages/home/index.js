import React, { useState } from "react";
import FooterComponent from "../../Component/footer";
import { HeadComponent } from "../../Component/head";
// import d from "../../img/autodigg.png";

import { HeaderComponent } from "../../Component/header";

const Index = () => {
  const a = 0;
  const [backgroundclick, setbackgroundclick] = useState(false);

  return (
    <>
      <HeaderComponent />
      <FooterComponent />
    </>
  );
};

export default Index;
