import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="about-block lg:py-[100px] sm:py-16 py-10 bg-white">
      <div className="container">
        <div className="row flex max-lg:flex-col lg:items-center gap-y-6">
          <div className="w-full lg:w-1/2">
            <div className="bg-img w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/assessment.webp"
                width={4000}
                height={4000}
                alt=""
                className="w-full h-full block"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex-col lg:pl-20">
            <div className="heading3">Financial Management</div>
            <div className="nav-infor mt-8">
              <div className="title text-secondary mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores, totam in ad voluptas est dolores quibusdam laborum
                blanditiis aperiam facere. Architecto repellendus quos nostrum
                distinctio magni expedita quisquam, est veniam. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Suscipit possimus
                eos numquam sunt doloremque alias odio ipsam accusantium commodi
                laboriosam eligendi, id expedita perferendis quaerat iure eius
                blanditiis nobis repellendus!
              </div>
            </div>

            <div className="button-block flex items-center gap-5 md:mt-10 mt-6 pb-2">
              <a
                href="/"
                className="button-main text-white bg-blue-800 hover-button-black text-button rounded-full"
              >
                {" "}
                Get Started
              </a>
              <a
                href="/"
                className="button-main text-on-surface hover:bg-black hover:text-white hover:border-transparent bg-white text-button rounded-full border-2 border-blue-800 flex items-center gap-2"
              >
                12321-343321-321
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
