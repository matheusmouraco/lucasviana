import React from 'react';
import { Lightbulb, Zap, Heart } from 'lucide-react';

export default function ExpectationSection() {
  const expectations = [
    {
      icon: Lightbulb,
      title: "Clareza em cada explicação",
      description: "Você vai entender cada passo do seu processo, sem jargões jurídicos desnecessários."
    },
    {
      icon: Zap,
      title: "Agilidade para resolver", 
      description: "Sabemos que tempo importa, por isso buscamos soluções práticas e rápidas para seu caso."
    },
    {
      icon: Heart,
      title: "Empatia e atenção real",
      description: "Você será ouvido com atenção. Seu caso é único e tratado com toda seriedade que merece."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="space-y-8">
              <div className="w-16 h-px bg-black mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight text-black">
                O que você pode esperar
                <br />
                <span className="font-light italic">do nosso atendimento?</span>
              </h2>
              <p className="text-xl text-black/60 font-light max-w-2xl mx-auto">
                Atendimento jurídico com foco na sua realidade
              </p>
            </div>
          </div>

          {/* Expectations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            {expectations.map((expectation, index) => (
              <div key={index} className="text-center group">
                <div className="space-y-8">
                  <div className="w-20 h-20 border-2 border-black/10 flex items-center justify-center mx-auto group-hover:border-black transition-colors duration-500">
                    <expectation.icon className="w-10 h-10 text-black/40 group-hover:text-black transition-colors duration-500" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light text-black">{expectation.title}</h3>
                    <p className="text-black/60 font-light leading-relaxed">{expectation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="border-2 border-black p-16 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <blockquote className="text-3xl md:text-4xl font-light italic text-black leading-tight">
                "Meu compromisso é com a sua tranquilidade e com o melhor desfecho possível para o seu caso."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-black/20"></div>
                <cite className="text-black font-light tracking-wider text-sm uppercase">
                  Lucas Viana, Advogado
                </cite>
                <div className="w-12 h-px bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}