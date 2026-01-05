import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" aria-label="Introdução à RouteFlex e Envios Flex" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="text-center lg:text-left">
            <header>
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6 border border-orange-100">
                LÍDER EM ENVIOS FLEX
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-brand-dark tracking-tight leading-[1.15] mb-6">
                <span className="text-gray-500 font-medium mr-2 md:mr-3">Domine os</span>
                <span className="text-brand-orange">Envios Flex</span>
                <span className="block mt-1 text-brand-dark">com Entrega no Mesmo Dia</span>
              </h1>

              <p className="text-lg text-brand-grey mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Aumente sua reputação no <strong>Mercado Livre</strong>, <strong>Shopee</strong> e <strong>Magalu</strong>. Operação logística completa que realiza a coleta e garante que sua entrega chegue no prazo.
              </p>
            </header>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10">
              <a 
                href="https://wa.me/5511999999999?text=Olá,%20quero%20otimizar%20meus%20envios%20flex%20com%20a%20RouteFlex"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2"
                title="Fale com um especialista em Envios Flex no WhatsApp"
              >
                Otimizar Meus Envios
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a 
                href="#beneficios" 
                className="w-full sm:w-auto px-8 py-4 bg-gray-100 text-brand-dark text-lg font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center"
                title="Entenda como funciona o Envio Flex"
              >
                Como Funciona
              </a>
            </div>

            {/* Partners Logos - Full Color & Visible */}
            <div className="border-t border-gray-100 pt-8">
              <p className="text-sm text-gray-500 font-medium mb-4 text-center lg:text-left">
                Homologado para Envios Flex dos principais marketplaces:
              </p>
              <ul className="flex flex-wrap justify-center lg:justify-start gap-8 items-center list-none p-0 m-0">
                <li>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/MercadoLibre_logo.svg/250px-MercadoLibre_logo.svg.png" 
                    alt="Mercado Livre Flex" 
                    className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/250px-Shopee.svg.png" 
                    alt="Shopee Xpress" 
                    className="h-8 md:h-10 w-auto object-contain hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </li>
                <li>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Magalu_logo.svg/250px-Magalu_logo.svg.png" 
                    alt="Magalu Entregas" 
                    className="h-6 md:h-8 w-auto object-contain mt-1 hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative mt-8 lg:mt-0">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800"
                  alt="Entregador motoboy realizando entrega rápida de encomenda flex"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Status da Entrega</p>
                      <p className="text-brand-dark font-bold">Chegando no Destino</p>
                    </div>
                  </div>
                </div>
             </div>
             
             {/* Decorative blob behind image */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/40 to-transparent rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};