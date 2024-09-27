import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, FileText, CreditCard, BarChart, Users, Globe, Lock, Zap, DollarSign, ShoppingCart, Truck, Package } from "lucide-react";
import SignUpForm from '../components/SignUpForm';

const Index = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#333] text-white relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0" 
        style={{backgroundImage: "url('https://logicmoney.shippix.pt/dash.png')"}}
      ></div>
      <div className="relative z-10">
        <header className="bg-[#333] shadow-md sticky top-0">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <img src="https://logy.shippix.pt/logo.png" alt="LOGY" className="h-8" />
            <nav>
              <Button variant="ghost" className="text-white hover:text-[#f3c52a]" onClick={() => scrollToSection('inicio')}>Início</Button>
              <Button variant="ghost" className="text-white hover:text-[#f3c52a]" onClick={() => scrollToSection('recursos')}>Recursos</Button>
              <Button variant="ghost" className="text-white hover:text-[#f3c52a]" onClick={() => scrollToSection('contato')}>Contato</Button>
              <Button className="bg-[#f3c52a] text-[#333] hover:bg-[#d3a820]" onClick={() => window.location.href = 'https://logy.shippix.pt/app/login.php'}>Entrar</Button>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section id="inicio" className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#f3c52a]">Gestão Completa para seu Negócio</h1>
            <p className="text-xl mb-8">
              LOGY: A plataforma definitiva para gerenciar suas finanças, vendas em marketplaces, 
              logística e muito mais - tudo em um só lugar!
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button className="bg-[#f3c52a] text-[#333] hover:bg-[#d3a820]" onClick={() => scrollToSection('contato')}>Saiba Mais</Button>
              <Button variant="outline" className="text-[#f3c52a] border-[#f3c52a] hover:bg-[#f3c52a] hover:text-[#333]" onClick={() => scrollToSection('contato')}>Experimente Grátis</Button>
            </div>
            <div className="bg-[#444] p-4 rounded-lg shadow-xl">
              <img src="https://logicmoney.shippix.pt/dash.png" alt="LOGY Dashboard" className="mx-auto object-cover rounded-lg shadow-inner" />
            </div>
          </section>

          <section id="recursos" className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8 text-[#f3c52a]">Recursos Completos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard icon={<PieChart />} title="Controle de Gastos" description="Mantenha um registro detalhado de todos os seus gastos, categorizando e analisando onde seu dinheiro está sendo aplicado." />
              <FeatureCard icon={<FileText />} title="Relatórios Financeiros" description="Crie relatórios financeiros personalizados para entender melhor suas finanças e tomar decisões informadas." />
              <FeatureCard icon={<CreditCard />} title="Integração de Bancos" description="Faça a gestão centralizada de MBWAY, Multibanco (Eupago), Stripe e Gocardless para uma visão completa de suas transações." />
              <FeatureCard icon={<BarChart />} title="Análise de Tendências" description="Visualize tendências de gastos e receitas ao longo do tempo para planejar melhor seu futuro financeiro." />
              <FeatureCard icon={<Users />} title="Gestão Multi-usuário" description="Compartilhe o acesso com sua equipe ou família, definindo permissões personalizadas para cada usuário." />
              <FeatureCard icon={<Globe />} title="Acesso Global" description="Acesse suas informações financeiras de qualquer lugar, a qualquer momento, com nossa plataforma baseada em nuvem." />
              <FeatureCard icon={<ShoppingCart />} title="Integração com Marketplaces" description="Envie, liste e gerencie produtos na Worten, Fnac e Amazon diretamente da plataforma LOGY." />
              <FeatureCard icon={<Truck />} title="Gestão de Fullfilment" description="Controle o estoque no armazém SHIPPIX e gerencie todo o processo de fullfilment com facilidade." />
              <FeatureCard icon={<Package />} title="Gestão de Envios" description="Gerencie de forma completa todos os seus envios, desde a criação até a entrega." />
              <FeatureCard icon={<DollarSign />} title="Gestão de Saldos" description="Acompanhe e gerencie os saldos de todas as suas contas e marketplaces em um só lugar." />
              <FeatureCard icon={<FileText />} title="Gestão de Faturas" description="Crie, envie e acompanhe faturas de forma eficiente, mantendo sua contabilidade em dia." />
              <FeatureCard icon={<CreditCard />} title="Gestão de Pagamentos" description="Controle todos os pagamentos recebidos e a receber, garantindo um fluxo de caixa saudável." />
            </div>
          </section>

          <section id="contato" className="bg-[#444] rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center text-[#f3c52a]">Comece Agora</h2>
            <p className="text-center mb-6">Experimente o LOGY gratuitamente e transforme a gestão do seu negócio!</p>
            <SignUpForm />
          </section>
        </main>

        <footer className="bg-[#222] text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 LOGY. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-[#444]">
    <CardContent className="p-6">
      {React.cloneElement(icon, { className: "text-[#f3c52a] mb-4 h-12 w-12 mx-auto" })}
      <h3 className="text-xl font-semibold mb-2 text-[#f3c52a]">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

export default Index;