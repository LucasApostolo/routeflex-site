import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Solution } from './components/Solution';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Componente para a Home (Landing Page)
const Home: React.FC = () => (
  <>
    <Helmet>
      <title>RouteFlex - Envios Flex e Entregas no Mesmo Dia</title>
      <meta name="description" content="Domine o Mercado Livre, Shopee e Magalu com a RouteFlex. Otimização de rotas para Envios Flex e redução de custos logísticos." />
    </Helmet>
    <Hero />
    <About />
    <Features />
    <Solution />
    <Contact />
  </>
);

// Exemplo de Página de Serviço Específica para SEO
const EnvioFlexPage: React.FC = () => (
  <>
    <Helmet>
      <title>Envio Flex RouteFlex - Entrega Rápida em Marketplaces</title>
      <meta name="description" content="Especialize sua operação em Envio Flex. Coleta e entrega garantida no mesmo dia para vendedores premium." />
    </Helmet>
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
       <h1 className="text-4xl font-bold text-brand-dark mb-6">Solução Especializada em <span className="text-brand-orange">Envio Flex</span></h1>
       <p className="text-lg text-brand-grey mb-8">Conteúdo específico sobre a operação Flex para melhorar o ranqueamento do Google.</p>
       <About />
       <Contact />
    </div>
  </>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/envio-flex" element={<EnvioFlexPage />} />
          {/* Fallback para 404 via React Router */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;