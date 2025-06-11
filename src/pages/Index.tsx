import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default Index;
