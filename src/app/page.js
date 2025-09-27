import About from "./components/about/About";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Banner from "./components/home/Banner";
import Projects from "./components/projects/Projects";
import Service from "./components/service/Service";
import Stats from "./components/stats/Stats";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Feature />
      <Stats />
      <Projects />
      <Footer />
    </>
  );
}
