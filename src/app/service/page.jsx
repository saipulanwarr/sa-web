import React from "react";

import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Service from "@/components/Service/Service";
import serviceData from "@/data/service.json";
import Image from "next/image";

const ServicePage = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="Our Services"
          img="/images/header.webp"
          title="Our Services"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic illo
        cupiditate nam optio eligendi."
        />

        <div className="mt-[100px]">
          <div className="container">
            <div className="flex gap-8 max-lg:flex-col-reverse">
              <div className="w-full lg:w-1/2 flex flex-col justify-between gap-5 pr-10">
                <div className="heading3">
                  Credit Card Management
                  <div className="body2 text-secondary mt-4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
                    id iusto eos eligendi sed deserunt officiis libero rerum,
                    ipsam, aut dolorem tempore? Ut eum nisi, voluptatem error
                    pariatur ipsa cum!, Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ipsam voluptatibus vel quas aliquam
                    blanditiis rerum quasi molestias, necessitatibus cupiditate
                    pariatur accusamus eaque voluptatem, similique officia hic
                    recusandae iure quos aperiam.
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="bg-img w-full overflow-hidden rounded-xl">
                  <Image
                    width={5000}
                    height={5000}
                    className="w-full h-full block"
                    src="/images/assessment.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Service data={serviceData} className="pb-10" />
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ServicePage;
