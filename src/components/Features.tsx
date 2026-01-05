import React from 'react';
import { Truck, Clock, Store, MapPin } from 'lucide-react';

export const Features: React.FC = () => {
  const services = [
    {
      icon: <Truck size={32} />,
      title: "Coleta no Mesmo Dia",
      description: "Realizamos a coleta das encomendas no seu centro de distribuição, loja ou estoque no mesmo dia do pedido. Agilidade física desde a primeira etapa."
    },
    {
      icon: <Clock size={32} />,
      title: "Entrega no Mesmo Dia",
      description: "Operação logística otimizada para garantir que o pacote chegue ao destino no mesmo dia, atendendo rigorosamente aos padrões Flex."
    },
    {
      icon: <Store size={32} />,
      title: "Logística para Marketplaces",
      description: "Transportadora homologada para operações Shopee Flex, Mercado Livre Flex e Magalu. Aumente sua reputação com entregas pontuais."
    },
    {
      icon: <MapPin size={32} />,
      title: "Rastreamento da Entrega",
      description: "Acompanhe o status físico da entrega durante todo o trajeto. Transparência total para sua expedição e para o cliente final."
    }
  ];

  return (
    <section id="beneficios" aria-label="Serviços de Transporte e Logística Flex" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Transportadora com <span className="text-brand-orange">Coleta e Entrega no Mesmo Dia</span> para E-commerce
          </h2>
          <p className="text-brand-grey text-lg leading-relaxed">
            Somos uma <strong>transportadora especializada</strong> em coleta e entrega no mesmo dia para e-commerces e vendedores de marketplaces. A RouteFlex cuida de <strong>toda a operação logística</strong>, desde a coleta em seu estoque até a entrega final, garantindo rapidez e eficiência.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <article 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-orange mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {item.title}
              </h3>
              <p className="text-brand-grey leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};