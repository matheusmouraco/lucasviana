
import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FinalCTASection() {
  const whatsappNumber = "5511998980215";
  const whatsappMessage = "Olá Dr. Lucas! Gostaria de agendar uma consulta jurídica.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Content */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extralight leading-[0.9] text-black">
                Segurança jurídica é
                <br />
                <span className="font-light italic">questão de escolha</span>
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-2xl font-light text-black/70 leading-relaxed">
                  O Dr. Lucas Viana está pronto para ouvir você, entender seu caso e construir uma solução clara, eficaz e humanizada.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center items-center gap-12 md:gap-24 text-black">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light">24h</div>
                <div className="text-sm uppercase tracking-widest text-black/60 font-light mt-1">Tempo de resposta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light">100%</div>
                <div className="text-sm uppercase tracking-widest text-black/60 font-light mt-1">Transparência</div>
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-8 px-4">
              <div className="text-black/50 font-light text-sm tracking-wider uppercase">
                Entre em contato agora mesmo
              </div>

              <div className="flex justify-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-black text-white hover:bg-black/90 font-medium px-4 sm:px-8 md:px-16 py-4 md:py-6 text-sm sm:text-base md:text-xl rounded-none border-0 shadow-none hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group max-w-full"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 md:mr-4" />
                  <span className="text-center whitespace-nowrap">Falar com Dr. Lucas no WhatsApp</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 md:ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
