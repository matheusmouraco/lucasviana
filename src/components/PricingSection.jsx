import React from 'react';
import { CheckCircle, DollarSign, Clock, Shield } from 'lucide-react';

export default function PricingSection() {
  const features = [
    {
      icon: DollarSign,
      title: "Valores personalizados",
      description: "Conforme tipo e complexidade do caso"
    },
    {
      icon: Shield,
      title: "Transparência total", 
      description: "Informado antes de qualquer cobrança"
    },
    {
      icon: Clock,
      title: "Primeira consulta",
      description: "Pode ser utilizada como crédito"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="space-y-8">
              <div className="w-16 h-px bg-black mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight text-black">
                Consulta com valor acessível
                <br />
                <span className="font-light italic">e possibilidade de parcelamento</span>
              </h2>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="space-y-6">
                  <div className="w-20 h-20 border border-black/10 flex items-center justify-center mx-auto group-hover:border-black transition-colors duration-500">
                    <feature.icon className="w-10 h-10 text-black/40 group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-light text-black">{feature.title}</h3>
                    <p className="text-black/60 font-light">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="border-2 border-black/10 p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-lg font-light text-black">Atendimento totalmente transparente</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                <span className="text-lg font-light text-black">Fale agora e receba orientações precisas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}