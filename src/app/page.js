import Blog from "@/components/Blog/Blog";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import FormRequest from "@/components/FormRequest/FormRequest";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import PaymentGatewayTwo from "@/components/PaymentGateway/PaymentGatewayTwo";
import Service from "@/components/Service/Service";
import Slider from "@/components/Slider/Slider";
import Testimonial from "@/components/Testimonial/Testimonial";
import serviceData from "@/data/service.json";
import blogData from "@/data/blog.json";
import Partner from "@/components/Partner/Partner";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Slider />
        <Service data={serviceData} />
        <PaymentGateway />
        <CaseStudy />
        <PaymentGatewayTwo />
        <FormRequest />
        <Testimonial />
        <Blog data={blogData} />
        <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      </main>
    </div>
  );
}
