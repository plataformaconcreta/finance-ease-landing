import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PieChart, FileText, CreditCard } from "lucide-react";
import SignUpForm from '../components/SignUpForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#333] text-white">
      <header className="bg-[#333] shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img src="https://logy.shippix.pt/logo.png" alt="LOGY" className="h-8" />
          <nav>
            <Button variant="ghost" className="text-white hover:text-[#f3c52a]">Início</Button>
            <Button variant="ghost" className="text-white hover:text-[#f3c52a]">Recursos</Button>
            <Button variant="ghost" className="text-white hover:text-[#f3c52a]">Preços</Button>
            <Button variant="ghost" className="text-white hover:text-[#f3c52a]">Contato</Button>
            <Button className="bg-[#f3c52a] text-[#333] hover:bg-[#d3a820]">Entrar</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-[#f3c52a]">Gestão Facilitada de Finanças</h1>
          <p className="text-xl mb-8">A melhor plataforma para gerenciar suas finanças de forma simples e eficiente</p>
          <div className="flex justify-center gap-4 mb-12">
            <Button className="bg-[#f3c52a] text-[#333] hover:bg-[#d3a820]">Saiba Mais</Button>
            <Button variant="outline" className="text-[#f3c52a] border-[#f3c52a] hover:bg-[#f3c52a] hover:text-[#333]">Experimente Grátis</Button>
          </div>
          <div className="bg-[#444] p-4 rounded-lg shadow-xl">
            <img src="https://logicmoney.shippix.pt/dash.png" alt="LOGY Dashboard" className="mx-auto object-cover rounded-lg shadow-inner" />
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8 text-[#f3c52a]">Nossos Recursos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#444]">
              <CardContent className="p-6">
                <PieChart className="text-[#f3c52a] mb-4 h-12 w-12 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-[#f3c52a]">Controle de Gastos</h3>
                <p className="text-gray-300">Mantenha um registro detalhado de todos os seus gastos.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#444]">
              <CardContent className="p-6">
                <FileText className="text-[#f3c52a] mb-4 h-12 w-12 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-[#f3c52a]">Relatórios Financeiros</h3>
                <p className="text-gray-300">Crie relatórios financeiros para entender melhor suas finanças.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#444]">
              <CardContent className="p-6">
                <CreditCard className="text-[#f3c52a] mb-4 h-12 w-12 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-[#f3c52a]">Integração de Bancos</h3>
                <p className="text-gray-300">Faça a gestão centralizada de MBWAY, Multibanco (Eupago), Stripe e Gocardless.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-[#444] rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#f3c52a]">Inscreva-se Agora</h2>
          <SignUpForm />
        </section>
      </main>

      <footer className="bg-[#222] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 LOGY. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;