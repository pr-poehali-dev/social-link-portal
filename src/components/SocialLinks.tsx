import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "Github",
      url: "https://github.com",
      color: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      url: "https://linkedin.com",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: "Twitter",
      url: "https://twitter.com",
      color: "hover:bg-blue-400",
    },
    {
      name: "Instagram",
      icon: "Instagram",
      url: "https://instagram.com",
      color: "hover:bg-pink-500",
    },
    {
      name: "Telegram",
      icon: "Send",
      url: "https://t.me/",
      color: "hover:bg-blue-500",
    },
    {
      name: "Behance",
      icon: "Palette",
      url: "https://behance.net",
      color: "hover:bg-indigo-600",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-montserrat">
          Найти меня в социальных сетях
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              asChild
              className={`bg-white/10 border-white/20 text-white hover:text-white ${social.color} transition-all duration-300 hover:scale-105`}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Icon name={social.icon as any} size={20} />
                {social.name}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-gray-300 mt-8 font-open-sans">
          Всегда рад новым знакомствам и интересным проектам!
        </p>
      </div>
    </section>
  );
};

export default SocialLinks;
