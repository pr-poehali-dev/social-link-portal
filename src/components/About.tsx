import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 font-montserrat">
              Обо мне
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto font-open-sans">
              Привет! Я увлечённый разработчик с 5-летним опытом создания
              веб-приложений. Специализируюсь на React, TypeScript и современных
              фронтенд-технологиях. Люблю превращать сложные идеи в простые и
              красивые решения.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4 font-open-sans">
              В свободное время изучаю новые технологии, читаю книги по
              UX-дизайну и занимаюсь фотографией. Всегда открыт для интересных
              проектов и сотрудничества!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
