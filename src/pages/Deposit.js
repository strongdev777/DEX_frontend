import React from "react";
import Nav from "../components/Dashboard/Buycryptor/Nav";
import Buy from "../components/Dashboard/Buycryptor/Buy";
import Howtobuy from "../components/Dashboard/Buycryptor/Howtobuy";
import Bmarkets from "../components/Dashboard/Buycryptor/Bmarkets";
import Change from "../components/Dashboard/Buycryptor/Change";
import Conversion from "../components/Dashboard/Buycryptor/Conversion";
import Detail from "../components/Dashboard/Detail";
import Footer from "./Footer";
import Header from "./Header";
import Title1 from "../components/Dashboard/Deposit/title1";
import Select from "../components/Dashboard/Deposit/select";
import Explain from "../components/Dashboard/Recurring/Explain";
import Plan from "../components/Dashboard/Recurring/Plan";
import DCA from "../components/Dashboard/Recurring/DCA";
import Benefits from "../components/Dashboard/Recurring/Benefits";
import Started from "../components/Dashboard/Recurring/Started";
import TopCrypto from "../components/Dashboard/Recurring/TopCrypto";
import Guides from "../components/Dashboard/Recurring/Guides";
import FaqGuide from "../components/Dashboard/FaqGuide";

const Deposit = () => {
  return (
    <div>
      <Header />
      <div className="dashboard">
        <Nav />
        <Title1 />
        <Select />
        <Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Deposit;
