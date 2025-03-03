import React from "react";

import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Partner from "@/components/Partner/Partner";
import Breadcrumb from "@/components/Section/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="Our Services Details"
          img="/images/header.webp"
          title="Our Services Details"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic illo
        cupiditate nam optio eligendi."
        />

        <div className="content-detail-block lg:py-[100px] sm:py-16 py-10">
          <div className="container">
            <div className="flex max-xl:flex-col gap-y-8">
              <div className="w-full xl:w-3/4">
                <div className="w-full xl:pr-[80px]">
                  <div className="heading3">Cryptocurrency Trading</div>
                  <div className="bg-img mt-5 mb-5">
                    <Image
                      width={5000}
                      height={5000}
                      className="w-full h-full rounded-xl"
                      src="/images/assessment.webp"
                    />
                  </div>
                  <div className="body2 text-secondary mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo laboriosam saepe nihil inventore, recusandae
                    voluptatum, ut autem odio obcaecati quibusdam mollitia unde
                    voluptate illum commodi ducimus nam. Vitae, soluta ea. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
                    illo? Praesentium provident, quae quod vitae sed nostrum est
                    harum maxime nesciunt fuga repellendus perspiciatis, iste
                    dignissimos necessitatibus, consequuntur animi inventore.
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-1/4">
                <div className="more-infor border border-line rounded-xl py-8 px-8">
                  <div className="heading6">The best our services</div>
                  <div className="body3 text-secondary mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos,
                  </div>
                  <div className="list-nav mt-4">
                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        Payment solution
                      </div>
                    </Link>
                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        Financial Planning
                      </div>
                    </Link>
                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        Online Banking
                      </div>
                    </Link>
                    <Link
                      className="nav-item rounded-lg flex-between p-12"
                      href="/"
                    >
                      <div className="text-button text-secondary">
                        Personal Finance
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="ads-block rounded-lg md:mt-10 mt-6 relative">
                  <div className="bg-img">
                    <Image width={5000} height={5000} src="/images/ads.webp" />
                  </div>

                  <div className="text flex flex-col justify-between absolute left-0 top-0 w-full h-full p-8">
                    <div className="title">
                      <div className="heading5 text-white">Let's Talk</div>
                      <div className="body3 text-white mt-4">
                        If you have project contact us
                      </div>
                    </div>

                    <div className="button-block md:mt-10 mt-6">
                      <Link
                        className="button-main hover:bg-black hover:text-white inline-block bg-white text-button"
                        href="/contact"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ServiceDetails;
