import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage:
          "url(https://cdn.poehali.dev/files/577fcd67-7bab-4a39-9f01-13d87dc5d1cc.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <Hero />
        <About />
        <Contact />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Index;
