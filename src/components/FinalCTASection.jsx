
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
              <h2 className="text-5xl md:text-7xl font-extralight leading-[0.9] text-black">
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

            {/* CTA */}
            <div className="space-y-8">
              <div className="text-black/50 font-light text-sm tracking-wider uppercase">
                Entre em contato agora mesmo
              </div>

              <Button 
                onClick={handleWhatsAppClick}
                className="bg-black text-white hover:bg-black/90 font-medium px-12 py-5 text-xl rounded-none border-0 shadow-none hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 group"
              >
                <MessageCircle className="w-6 h-6 mr-4" />
                <span>Falar com Dr. Lucas no WhatsApp</span>
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-20 grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="space-y-3">
                <div className="text-4xl font-extralight text-black">500+</div>
                <div className="text-black/50 font-light text-sm tracking-wider uppercase">Casos resolvidos</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-extralight text-black">24h</div>
                <div className="text-black/50 font-light text-sm tracking-wider uppercase">Tempo de resposta</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-extralight text-black">100%</div>
                <div className="text-black/50 font-light text-sm tracking-wider uppercase">Transparência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
    </section>
  );
}
