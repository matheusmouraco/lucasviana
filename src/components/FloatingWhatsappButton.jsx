import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsappButton() {
  const whatsappNumber = "5511998980215";
  const whatsappMessage = "Olá Dr. Lucas! Gostaria de agendar uma consulta jurídica.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-600 hover:scale-110 transform transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}