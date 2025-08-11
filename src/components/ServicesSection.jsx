
import React from 'react';
import { Scale, Receipt, Users, Building } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Scale,
      title: "Direito Civil",
      items: [
        "Ações de indenização por danos morais e materiais",
        "Elaboração e revisão de contratos", 
        "Questões envolvendo imóveis e obrigações"
      ]
    },
    {
      icon: Receipt,
      title: "Direito do Consumidor", 
      items: [
        "Cobranças abusivas, nome negativado indevidamente",
        "Produtos com defeito, serviços não prestados",
        "Defesa contra abusos de empresas"
      ]
    },
    {
      icon: Users,
      title: "Direito de Família",
      items: [
        "Divórcios consensuais e litigiosos",
        "Pensão alimentícia, guarda, regulamentação de visitas", 
        "Reconhecimento ou contestação de paternidade"
      ]
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      items: [
        "Assessoria jurídica preventiva para empresas",
        "Constituição de empresas, contratos sociais",
        "Cobrança judicial e extrajudicial de clientes"
      ]
    }
  ];

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="space-y-8">
              <div className="w-16 h-px bg-white mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight text-yellow-500">
                Especialidades jurídicas
                <br />
                <span className="font-light italic">com atendimento humanizado</span>
              </h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="border border-white/10 p-10 hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl h-full text-center">
                  <div className="space-y-8">
                    <div className="flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-2xl font-light text-white">{service.title}</h3>
                      <ul className="space-y-3">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-white/70 font-light leading-relaxed text-sm flex items-start justify-center">
                            <span className="w-1 h-1 bg-white/40 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-center">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
