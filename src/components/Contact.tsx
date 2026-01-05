import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contato" aria-labelledby="contact-heading" className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
          Escale suas Entregas Flex Hoje Mesmo
        </h2>
        <p className="text-xl text-brand-grey mb-12 max-w-2xl mx-auto">
          Não deixe sua reputação cair por atrasos. Fale com a RouteFlex e descubra como garantir a <strong>entrega no mesmo dia</strong> reduzindo custos operacionais.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://wa.me/5511999999999?text=Olá,%20tenho%20interesse%20na%20solução%20para%20Envios%20Flex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white text-lg font-bold rounded-full hover:bg-[#1fa851] transition-all shadow-xl shadow-green-500/20"
            title="Converse com a RouteFlex no WhatsApp"
          >
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </a>
          
          <a 
            href="mailto:contato@routeflex.com?subject=Interesse%20em%20Otimização%20Flex"
            className="flex items-center justify-center gap-3 px-8 py-5 bg-brand-dark text-white text-lg font-bold rounded-full hover:bg-black transition-all shadow-xl shadow-gray-500/20"
            title="Envie um e-mail para nossa equipe comercial"
          >
            <Mail size={24} />
            Solicitar Proposta
          </a>
        </div>
      </div>
    </section>
  );
};