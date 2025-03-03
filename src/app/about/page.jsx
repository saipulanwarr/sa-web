import React from "react";

import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import AboutSection from "@/components/Section/AboutSection";
import Counter from "@/components/Section/Counter";
import Service from "@/components/Service/Service";
import serviceData from "@/data/service.json";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="About Us"
          img="/images/header.webp"
          title="About Us"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic illo
        cupiditate nam optio eligendi."
        />
        <AboutSection />
        <Counter className="lg:pb-[50px] sm:pb-16 pb-10" />
        <Service data={serviceData} className="pb-10" />
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
