import About from "../components/aboutsec/About";
import Hero from "../components/hero/Hero";
import Banner from "../components/Banner/Banner"
import Menu from "../components/menu/Menu";
import Blog from "../components/blog/Blog";
import Contact from "../components/contact/Contact";
import Map from "../components/Map/Map";
import Features from "../components/features/Features";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Features />
      <Menu />
      <Banner />
      <Blog />
      <Contact />
    </div>
  );
}
