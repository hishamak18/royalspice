import HeroSection from "../../components/hero/Hero";
import About from "../../components/aboutsec/About"
import Features from "../../components/features/Features"
import Menu from "../../components/menu/Menu"
import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery"
import Blog from "../../components/blog/Blog"
import Contact from "../../components/contact/Contact"

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Features />
      <Menu />
      <Banner />
      <Gallery />
      <Blog />
      <Contact />
    </div>
  );
}
