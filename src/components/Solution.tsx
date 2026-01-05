import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Solution: React.FC = () => {
  const features = [
    "Coleta e entrega no mesmo dia para operações Flex",
    "Roteirização inteligente aplicada à operação real de entrega",
    "Integração nativa com Mercado Livre, Shopee e Magalu",
    "Motoristas treinados e frota dedicada para última milha",
    "Monitoramento total para garantir SLA e reputação",
    "Redução de custos logísticos com rotas otimizadas"
  ];

  return (
    <section id="solucao" aria-labelledby="solution-heading" className="py-24 bg-brand-dark text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
                <header>
                    <h2 id="solution-heading" className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        A Solução Logística Completa para <span className="text-brand-orange">Entregas no Mesmo Dia</span>
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                        Mais que tecnologia, somos uma <strong>transportadora especializada em última milha</strong>. A RouteFlex assume sua operação logística de ponta a ponta: realizamos a <strong>coleta em seu estoque</strong> e garantimos a entrega final, protegendo sua reputação no Mercado Livre, Shopee e Magalu.
                    </p>
                </header>
                
                <ul className="space-y-5">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <CheckCircle2 className="text-brand-orange shrink-0 mt-1" size={24} />
                            <span className="text-lg font-light text-gray-200">{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                   <a 
                     href="https://wa.me/5511999999999?text=Olá,%20quero%20contratar%20a%20coleta%20e%20entrega%20flex"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
                     title="Falar com um especialista logístico"
                   >
                     Quero Entregar no Mesmo Dia
                   </a>
                </div>
            </div>

            <div className="relative">
                <figure className="bg-gray-800/50 rounded-2xl p-4 shadow-2xl border border-gray-700 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" 
                        alt="Centro de distribuição e operação logística de última milha" 
                        className="rounded-lg w-full h-auto opacity-90 object-cover aspect-video"
                        loading="lazy"
                    />
                    <figcaption className="absolute bottom-8 left-8 right-8 bg-brand-dark/95 backdrop-blur p-5 rounded-xl border border-gray-600 shadow-xl">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">Status Operacional</span>
                            <span className="text-sm font-bold text-[#25D366] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                                Coleta Realizada
                            </span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-white font-bold text-lg">Entrega no Prazo</p>
                                <p className="text-xs text-gray-400">SLA Flex Garantido</p>
                            </div>
                            <div className="text-brand-orange font-mono font-bold">100%</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
  );
};