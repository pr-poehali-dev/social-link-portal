import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-black/30 backdrop-blur-sm py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Профиль"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold text-white mb-4 font-montserrat drop-shadow-lg">
            Алексей Иванов
          </h1>
          <p className="text-xl text-white/90 mb-6 font-open-sans drop-shadow-md">
            Веб-разработчик и UI/UX дизайнер
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Создаю современные веб-приложения и интерфейсы, которые решают
            реальные задачи пользователей
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button className="bg-purple-600/90 hover:bg-purple-700/90 backdrop-blur-sm border border-purple-400/30">
            <Icon name="Download" size={18} />
            Скачать резюме
          </Button>
          <Button
            variant="outline"
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white hover:text-white"
          >
            <Icon name="Mail" size={18} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
