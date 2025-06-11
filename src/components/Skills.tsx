import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Skills = () => {
  const skills = [
    { name: "React & TypeScript", icon: "Code", level: 95 },
    { name: "UI/UX Design", icon: "Palette", level: 90 },
    { name: "Node.js", icon: "Server", level: 85 },
    { name: "Figma & Photoshop", icon: "PenTool", level: 88 },
  ];

  const interests = [
    { name: "Фотография", icon: "Camera" },
    { name: "Путешествия", icon: "Plane" },
    { name: "Музыка", icon: "Music" },
    { name: "Спорт", icon: "Dumbbell" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 font-montserrat">
                Навыки
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon
                        name={skill.icon as any}
                        size={18}
                        className="text-purple-600"
                      />
                      <span className="font-medium font-open-sans">
                        {skill.name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800 font-montserrat">
                Интересы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg"
                  >
                    <Icon
                      name={interest.icon as any}
                      size={20}
                      className="text-purple-600"
                    />
                    <span className="font-medium font-open-sans">
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
