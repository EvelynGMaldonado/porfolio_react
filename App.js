import React from "react";
import Header from "./components/Header";
import SectionRight from "./components/SectionRight";
import Navbar from "./components/Navbar";
import SectionLeft from "./components/SectionLeft";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <SectionRight />
      <SectionLeft />
      <ContactInfo />
      <Footer />
      

    </div>
  );
}

export default App;
