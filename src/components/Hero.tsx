import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Профиль"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-montserrat">
            Алексей Иванов
          </h1>
          <p className="text-xl text-gray-600 mb-6 font-open-sans">
            Веб-разработчик и UI/UX дизайнер
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Создаю современные веб-приложения и интерфейсы, которые решают
            реальные задачи пользователей
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Download" size={18} />
            Скачать резюме
          </Button>
          <Button variant="outline">
            <Icon name="Mail" size={18} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
