
import React from 'react';
import { MapPin, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "5511982442447";
  const whatsappMessage = "Olá Dr. Lucas! Gostaria de agendar uma consulta jurídica.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16 text-center lg:text-left">
            {/* Logo Section */}
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="space-y-6">
                {/* Logo */}
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/15362d809_lucas-2.png"
                  alt="Lucas Viana Advocacia - Logotipo"
                  className="w-48 h-auto mx-auto lg:mx-0"
                />
                
                <div className="pt-2">
                  <p className="text-white/70 font-light leading-relaxed">
                    Advocacia de excelência com atendimento humanizado e transparência total.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-lg font-light uppercase tracking-wider text-white/90">Contato</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 justify-center lg:justify-start">
                  <MapPin className="w-5 h-5 text-white/60 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-white/90 font-light">São Paulo, SP</p>
                    <p className="text-white/60 font-light text-sm">Atendimento presencial e online</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <Phone className="w-5 h-5 text-white/60 flex-shrink-0" />
                  <p className="text-white/90 font-light">(11) 98244-2447</p>
                </div>

                <div className="flex items-center space-x-4 justify-center lg:justify-start">
                  <Mail className="w-5 h-5 text-white/60 flex-shrink-0" />
                  <p className="text-white/90 font-light">contato@lucasvianaadv.com</p>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-4 group hover:text-white transition-colors duration-300 mx-auto lg:mx-0"
                >
                  <MessageCircle className="w-5 h-5 text-white/60 group-hover:text-white flex-shrink-0" />
                  <p className="text-white/90 group-hover:text-white font-light">WhatsApp</p>
                </button>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-8">
              <h4 className="text-lg font-light uppercase tracking-wider text-white/90">Áreas de Atuação</h4>
              
              <div className="space-y-4">
                {[
                  "Direito Civil",
                  "Direito do Consumidor",
                  "Direito de Família",
                  "Direito Empresarial"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
                    <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    <span className="text-white/70 font-light">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-12 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
              <div className="text-white/50 font-light text-sm">
                © 2025 Lucas Viana - Advogado. Todos os direitos reservados.
              </div>
              
              <div className="flex items-center flex-wrap justify-center gap-x-8 gap-y-2 text-white/50 font-light text-sm">
                <span>OAB/SP 483.551</span>
                <span className="hidden md:inline">•</span>
                <a 
                  href="https://matistudio.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  Site por Mati Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
