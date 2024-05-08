import About from "@/components/aboutsec/About";
import Hero from "@/components/hero/Hero";
import Banner from "@/components/Banner/Banner"
import Menu from "@/components/menu/Menu";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Map from "@/components/Map/Map";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="px-10">
        <About />
        <Banner />
        <Menu />
        <Blog />
        <Contact />
        <Map />
      </div>
    </div>
  );
}
