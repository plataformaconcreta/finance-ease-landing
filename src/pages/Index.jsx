import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import SignUpForm from '../components/SignUpForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">LOGY</h1>
          <nav>
            <Button variant="ghost">Recursos</Button>
            <Button variant="ghost">Preços</Button>
            <Button variant="ghost">Contato</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Gestão Facilitada de Finanças</h2>
          <p className="text-xl text-gray-600 mb-8">A melhor plataforma para gerenciar suas finanças de forma simples e eficiente</p>
          <img src="https://logicmoney.shippix.pt/dash.png" alt="LOGY Dashboard" className="mx-auto object-cover rounded-lg shadow-xl max-w-4xl w-full" />
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6">
              <CheckCircle2 className="text-green-500 mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold mb-2">CRM Incorporado</h3>
              <p className="text-gray-600">Gerencie seus clientes e vendas em um só lugar.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CheckCircle2 className="text-green-500 mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold mb-2">Gestão de Pagamentos</h3>
              <p className="text-gray-600">Integração com eupago, stripe e gocardless.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <CheckCircle2 className="text-green-500 mb-4 h-12 w-12" />
              <h3 className="text-xl font-semibold mb-2">Rastreamento de Encomendas</h3>
              <p className="text-gray-600">Acompanhe pedidos da Worten, Fnac, Amazon e mais.</p>
            </CardContent>
          </Card>
        </section>

        <section className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Inscreva-se Agora</h2>
          <SignUpForm />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 LOGY. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;