import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Lead } from '@/api/entities';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome_completo: '',
    email: '',
    telefone: '',
    tipo_demanda: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Lead.create(formData);
      setIsSuccess(true);
      setFormData({
        nome_completo: '',
        email: '',
        telefone: '',
        tipo_demanda: '',
        mensagem: ''
      });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact-form" className="py-32 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <div className="w-24 h-24 border-2 border-white flex items-center justify-center mx-auto">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-light">Mensagem enviada com sucesso</h3>
              <p className="text-white/70 text-xl font-light leading-relaxed">
                Obrigado pelo seu contato. O Dr. Lucas Viana retornará em até 24h úteis.
              </p>
            </div>
            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-white text-black hover:bg-white/90 font-medium px-8 py-3 rounded-none"
            >
              Enviar nova mensagem
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="space-y-8">
              <div className="w-16 h-px bg-white mx-auto"></div>
              <h2 className="text-4xl md:text-5xl font-extralight leading-tight">
                Prefere preencher
                <br />
                <span className="font-light italic">um formulário?</span>
              </h2>
              <p className="text-xl text-white/60 font-light">
                Envie seus dados e receba retorno em até 24h úteis
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="border border-white/20 p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-light text-white/70 uppercase tracking-wider">Nome completo</label>
                  <Input
                    name="nome_completo"
                    value={formData.nome_completo}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white text-white placeholder-white/40 h-12 text-lg font-light"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-light text-white/70 uppercase tracking-wider">E-mail</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white text-white placeholder-white/40 h-12 text-lg font-light"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-light text-white/70 uppercase tracking-wider">Telefone</label>
                  <Input
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white text-white placeholder-white/40 h-12 text-lg font-light"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-light text-white/70 uppercase tracking-wider">Tipo de demanda</label>
                  <Input
                    name="tipo_demanda"
                    value={formData.tipo_demanda}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white text-white placeholder-white/40 h-12 text-lg font-light"
                    placeholder="Ex: divórcio, cobrança, consulta geral"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-light text-white/70 uppercase tracking-wider">Mensagem detalhada</label>
                <Textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-transparent border border-white/20 rounded-none focus:border-white text-white placeholder-white/40 resize-none text-lg font-light"
                  placeholder="Descreva sua situação com o máximo de detalhes possível..."
                />
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-white/90 font-medium px-10 py-4 text-lg rounded-none group"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 border border-black/20 border-t-black rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}