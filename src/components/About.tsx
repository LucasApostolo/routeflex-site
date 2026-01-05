import React from 'react';
import { Truck, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" aria-labelledby="about-heading" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Coluna de Texto */}
        <article>
          <h2 id="about-heading" className="text-brand-orange font-bold uppercase tracking-wider text-sm mb-3">
            Quem Somos
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-6 leading-tight">
            Operação Logística Real: <br/>
            <span className="text-brand-orange">Coleta e Entrega no Mesmo Dia</span>
          </h3>
          
          <p className="text-brand-grey text-lg leading-relaxed mb-6">
            A RouteFlex não é apenas um sistema. Somos o <strong>braço operacional</strong> do seu e-commerce. Realizamos a <strong>coleta diária</strong> no seu centro de distribuição e executamos a <strong>última milha</strong> com frota dedicada e motoristas treinados.
          </p>
          
          <p className="text-brand-grey text-lg leading-relaxed mb-8">
            Especialistas em <strong>Envios Flex</strong> para Mercado Livre, Shopee e Magalu. Nossa estrutura garante que seu pacote saia da sua loja e chegue na mão do cliente em poucas horas, blindando sua reputação e garantindo o cumprimento rigoroso do SLA.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Feature 1: Foco na Coleta */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-100 p-2.5 rounded-lg text-brand-orange shrink-0" aria-hidden="true">
                <Truck size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-base mb-1">Coleta Dedicada</h4>
                <p className="text-sm text-brand-grey leading-snug">Retiramos em sua loja ou CD todos os dias, sem falhas.</p>
              </div>
            </div>

            {/* Feature 2: Foco na Reputação */}
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-orange-100 p-2.5 rounded-lg text-brand-orange shrink-0" aria-hidden="true">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark text-base mb-1">Reputação Protegida</h4>
                <p className="text-sm text-brand-grey leading-snug">Entrega garantida para manter sua conta no verde.</p>
              </div>
            </div>
          </div>
        </article>
        
        {/* Coluna de Imagem */}
        <div className="relative mt-8 md:mt-0">
          <figure className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative group">
             {/* Imagem: Motoboy com bag laranja (Cores da RouteFlex) */}
             <img 
               src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?auto=format&fit=crop&q=80&w=800" 
               alt="Motoboy parceiro RouteFlex com bag laranja realizando entrega expressa no trânsito urbano" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
               loading="lazy"
             />
             
             {/* Overlay sutil para garantir leitura do badge se necessário */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

             {/* Badge de Performance Operacional */}
             <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md p-5 rounded-xl shadow-lg border-l-4 border-brand-orange flex items-center justify-between gap-4">
                    <div>
                        <div className="text-4xl font-extrabold text-brand-dark mb-1">99.8%</div>
                        <div className="text-xs font-bold text-brand-grey uppercase tracking-wide">De Envios no Prazo</div>
                    </div>
                    <div className="hidden sm:block text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-1">
                            SLA FLEX
                        </span>
                        <p className="text-xs text-gray-500">Performance verificada</p>
                    </div>
                </div>
             </figcaption>
          </figure>
          
          {/* Elemento Decorativo de Fundo */}
          <div className="absolute -z-10 top-8 -right-8 w-full h-full border-2 border-brand-orange/20 rounded-2xl hidden md:block" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
};