import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BlogList = ({ data }) => {
  return (
    <div className="list-blog lg:py-[100px] sm:py-16 py-10">
      <div className="container">
        <div className="flex max-lg:flex-col gap-y-10">
          <div className="w-full lg:w-2/3">
            <div className="list flex flex-col gap-y-10">
              {data.slice(0, 5).map((item, index) => (
                <Link
                  key={index}
                  className="blog-item flex max-md:flex-col md:items-center gap-7 gap-y-5"
                  href={"/blog/blog-details/[slug]"}
                  as={`/blog/blog-details/${item.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="bg-img w-full overflow-hidden rounded-2xl">
                      <Image
                        width={5000}
                        height={5000}
                        className="w-full h-full block"
                        src={item.img}
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize bg-slate-100">
                      {item.category}
                    </div>
                    <div className="heading6 mt-2">{item.title}</div>
                    <div className="date flex items-center gap-4 mt-2">
                      <div className="author caption2 text-secondary">
                        {" "}
                        By <span className="text-onsurface">{item.author}</span>
                      </div>

                      <div className="item-date flex items-center">
                        <Icon.CalendarBlank weight="bold" />
                        <span className="ml-1 caption2">{item.date}</span>
                      </div>
                    </div>

                    <div className="body3 text-secondary mt-4 pb-4">
                      {item.desc}
                    </div>
                    <div className="read font-bold underline">Read More</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/3 lg:pl-[55px]">
            <div className="search-block rounded-lg bg-surface h-[50px] relative">
              <input
                className="rounded-lg bg-surface w-full h-full pl-4 pr-12 bg-slate-100"
                type="text"
                placeholder="search"
              />
              <Icon.MagnifyingGlass className="absolute top-1/2 -translatey-1/2 right-4 text-xl cursor-pointer" />
            </div>

            <div className="cate-block md:mt-10 mt-6">
              <div className="heading6">Blog Category</div>

              <div className="list-nav mt-4">
                <Link className="nav-item" href="/">
                  <div className="text-button text-secondary mt-2">
                    Payment solution
                  </div>
                </Link>
                <Link className="nav-item" href="/">
                  <div className="text-button text-secondary mt-2">
                    Financial Planning
                  </div>
                </Link>
                <Link className="nav-item" href="/">
                  <div className="text-button text-secondary mt-2">
                    Online Banking
                  </div>
                </Link>
                <Link className="nav-item" href="/">
                  <div className="text-button text-secondary mt-2">
                    Personal Finance
                  </div>
                </Link>
              </div>
            </div>

            <div className="recent-post-block md:mt-10 mt-6">
              <div className="recent-post-heading heading7">Recent Post</div>
              <div className="list-recent-post flex flex-col gap-6 mt-4">
                {data.slice(0, 3).map((item, index) => (
                  <Link
                    key={index}
                    className="recent-post-item flex items-start gap-4 cursor-pointer"
                    href={"/blog/blog-details/[slug]"}
                    as={`/blog/blog-details/${item.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    <div className="item-img flex-shrink-0 w-20 h-20 rounded">
                      <Image
                        width={5000}
                        height={5000}
                        src={item.img}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="item-infor w-full">
                      <div className="item-date flex items-center">
                        <Icon.CalendarBlank weight="bold" />
                        <span className="ml-1 caption2">{item.date}</span>
                      </div>
                      <div className="item-title mt-1">{item.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
