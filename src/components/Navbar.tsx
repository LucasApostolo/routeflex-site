import React, { useState, useEffect } from 'react';
import { Menu, X, PackageOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Como Funciona', href: '#beneficios' },
    { name: 'Solução', href: '#solucao' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav 
      aria-label="Navegação Principal"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group" aria-label="RouteFlex Início">
          <div className="bg-brand-orange p-2 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
            <PackageOpen size={24} strokeWidth={2.5} aria-hidden="true" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-brand-dark">
            Route<span className="text-brand-orange">Flex</span>
          </span>
        </a>

        {/* Desktop Links - Semantic UL/LI */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-brand-dark hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contato"
              className="px-5 py-2.5 bg-brand-dark text-white text-sm font-semibold rounded-full hover:bg-brand-orange transition-colors duration-300"
            >
              Fale com a gente
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl flex flex-col p-6 animate-in slide-in-from-top-5 duration-200">
          <ul className="flex flex-col list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-3 text-lg font-medium text-brand-dark border-b border-gray-50 last:border-0 hover:text-brand-orange"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a 
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 bg-brand-orange text-white font-bold rounded-lg"
              >
                Fale com a gente
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};