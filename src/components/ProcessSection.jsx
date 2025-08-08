import React from 'react';
import { MessageCircle, Calendar, FileSearch, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Contato inicial",
      description: "Entre em contato pelo WhatsApp ou formulário. Conte brevemente seu caso e suas necessidades."
    },
    {
      number: 2, 
      icon: Calendar,
      title: "Agendamento da consulta",
      description: "Marcamos uma conversa — online ou presencial — no melhor horário para você."
    },
    {
      number: 3,
      icon: FileSearch,
      title: "Análise e orientação", 
      description: "O Dr. Lucas analisa sua situação e apresenta as possíveis soluções com total clareza."
    },
    {
      number: 4,
      icon: DollarSign,
      title: "Definição de honorários",
      description: "Você é informado com antecedência sobre os valores, com possibilidade de parcelamento."
    },
    {
      number: 5,
      icon: CheckCircle2,
      title: "Acompanhamento jurídico completo",
      description: "Caso avance com o processo, você terá acompanhamento próximo em todas as etapas."
    }
  ];

  const whatsappNumber = "5511998980215";
  const whatsappMessage = "Olá Dr. Lucas! Gostaria de iniciar meu atendimento.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="space-y-8">
              <div className="w-16 h-px bg-white mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
                Como funciona
                <br />
                <span className="font-light italic">o atendimento?</span>
              </h2>
              <p className="text-xl text-white/60 font-light">
                Um processo simples e transparente
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group">
                {/* Step Number */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <div className="text-6xl md:text-7xl font-extralight text-white/20 group-hover:text-white/40 transition-colors duration-500">
                    {step.number.toString().padStart(2, '0')}
                  </div>
                </div>

                {/* Icon */}
                <div className="lg:col-span-2 text-center">
                  <div className="w-20 h-20 border border-white/20 flex items-center justify-center mx-auto group-hover:border-white/50 transition-colors duration-500">
                    <step.icon className="w-10 h-10 text-white/60 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                  <h3 className="text-2xl font-light text-white">{step.title}</h3>
                  <p className="text-white/70 font-light leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-black hover:bg-white/90 font-medium px-10 py-4 text-lg rounded-none border-0 shadow-none hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
            >
              <span>Quero iniciar meu atendimento</span>
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}