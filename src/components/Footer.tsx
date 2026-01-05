import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="text-2xl font-bold tracking-tight text-white block mb-2">
            Route<span className="text-brand-orange">Flex</span>
          </span>
          <p className="text-sm">Otimização Logística Inteligente para Envios Flex</p>
        </div>

        <nav aria-label="Links do Rodapé">
            <ul className="flex gap-8 text-sm font-medium list-none p-0 m-0">
                <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
        </nav>

        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} RouteFlex.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};