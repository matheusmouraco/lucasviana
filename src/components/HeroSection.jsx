
import React from 'react';
import { CheckCircle, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const whatsappNumber = "5511998980215"; // Updated WhatsApp number
  const whatsappMessage = "Olá Dr. Lucas! Gostaria de agendar uma consulta jurídica.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-white opacity-[0.01] rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-32 flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-12 text-center lg:text-left">
            {/* Header Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center px-6 py-3 border border-white/20 rounded-full backdrop-blur-sm">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/15362d809_lucas-2.png"
                  alt="Lucas Viana Advocacia"
                  className="h-12 w-auto"
                />
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-extralight leading-[0.9] tracking-tight text-yellow-500">
                Precisa de um
                <br />
                <span className="font-light italic">advogado</span>
                <br />
                <span className="font-bold">confiável?</span>
              </h1>
              
              <div className="max-w-lg mx-auto lg:mx-0">
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  Você chegou ao lugar certo. Atendimento jurídico de excelência com clareza e transparência total.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 max-w-md mx-auto lg:mx-0">
              {[
                "Atendimento pelo WhatsApp",
                "Suporte direto com o advogado",
                "Linguagem acessível e clara",
                "Valores informados com transparência"
              ].map((feature, index) => (
                <div key={index} className="flex items-center group justify-center lg:justify-start">
                  <div className="w-3 h-3 border border-white/30 rounded-full mr-4 group-hover:bg-white transition-all duration-300"></div>
                  <span className="text-white/90 font-light text-lg tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-white text-black hover:bg-white/90 font-medium px-8 py-4 text-lg rounded-none border-0 shadow-none hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <span>Falar com Dr. Lucas Viana</span>
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <div className="text-white/50 font-light text-sm tracking-wider uppercase">
                Atendimento presencial e online
              </div>
            </div>
          </div>

          {/* Right Side - Image Space */}
          <div className="relative">
            <div className="aspect-[3/4] bg-black">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ec95acb58_freepik_edit_Professional-male-lawyer-lucas-wearing-a-tailored-1.png"
                alt="Dr. Lucas Viana"
                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-white/20"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-white/20"></div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </section>
  );
}
