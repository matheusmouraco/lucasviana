import React from 'react';
import { MapPin, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="w-16 h-px bg-black"></div>
                <h2 className="text-4xl md:text-5xl font-extralight leading-tight text-black">
                  Um advogado que
                  <br />
                  <span className="font-light italic">fala a sua língua</span>
                </h2>
              </div>
            </div>

            <div className="space-y-8 text-black/70">
              <p className="text-xl font-light leading-relaxed">
                Sabemos que lidar com questões jurídicas pode ser confuso, técnico e desgastante. É por isso que o trabalho do Dr. Lucas Viana vai além da advocacia tradicional.
              </p>
              
              <div className="border-l-2 border-black/20 pl-8">
                <p className="text-2xl font-light italic text-black">
                  "É sobre traduzir o Direito em soluções reais, com empatia, transparência e foco total na sua necessidade."
                </p>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-32">
            <div className="group cursor-pointer">
              <div className="border border-black/10 p-12 hover:border-black/30 transition-all duration-500 group-hover:shadow-xl">
                <div className="space-y-6">
                  <div className="w-16 h-16 border-2 border-black/20 flex items-center justify-center group-hover:border-black transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-black/60 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-black">Atendimento Presencial</h3>
                    <p className="text-black/60 font-light tracking-wide">São Paulo e Região</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="border border-black/10 p-12 hover:border-black/30 transition-all duration-500 group-hover:shadow-xl">
                <div className="space-y-6">
                  <div className="w-16 h-16 border-2 border-black/20 flex items-center justify-center group-hover:border-black transition-colors duration-300">
                    <Globe className="w-8 h-8 text-black/60 group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-black">Atendimento Online</h3>
                    <p className="text-black/60 font-light tracking-wide">Para todo o Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}