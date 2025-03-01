import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Service from "@/components/Service/Service";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

      <main className="content">
        <Slider />
        <Service />
      </main>
    </div>
  );
}
