"use client";

import { useInView } from "framer-motion";
import React, { useRef } from "react";
import ServiceItem from "./Item/ServiceItem";

const Service = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <section className="service-block lg:mt-[100px] sm:mt-16 mt-10" ref={ref}>
        <div className="container">
          <h3 className="heading3 text-center">Our Services</h3>
          <div
            className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10"
            style={{
              transform: isInView ? "none" : "translateY(60px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
          >
            {data.slice(0, 6).map((item, index) => (
              <ServiceItem data={item} key={index} number={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
