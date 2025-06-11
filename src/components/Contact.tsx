import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Mail",
      label: "Email",
      value: "alexey.ivanov@example.com",
      href: "mailto:alexey.ivanov@example.com",
    },
    {
      icon: "Phone",
      label: "Телефон",
      value: "+7 (999) 123-45-67",
      href: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      label: "Местоположение",
      value: "Москва, Россия",
      href: "#",
    },
  ];

  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 font-montserrat">
              Контакты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                    <Icon
                      name={contact.icon as any}
                      size={24}
                      className="text-purple-600"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2 font-montserrat">
                    {contact.label}
                  </h3>
                  <Button
                    variant="link"
                    asChild
                    className="text-gray-600 p-0 h-auto font-open-sans"
                  >
                    <a href={contact.href}>{contact.value}</a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
