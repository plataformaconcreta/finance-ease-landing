import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 12) {
      let formattedValue = '+351 ';
      if (value.length > 3) {
        formattedValue += value.slice(3, 6);
        if (value.length > 6) {
          formattedValue += ' ' + value.slice(6, 9);
          if (value.length > 9) {
            formattedValue += ' ' + value.slice(9);
          }
        }
      }
      setPhone(formattedValue);
    }
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^\+351 9\d{2} \d{3} \d{3}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isValidPhone(phone)) {
      toast.error("Por favor, insira um número de telemóvel português válido.");
      return;
    }

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulating a successful submission
      toast.success("Inscrição realizada com sucesso! Entraremos em contato em breve.");
      
      // Redirect to the signup page
      window.location.href = 'https://logy.shippix.pt/signup.php';
    } catch (error) {
      toast.error("Ocorreu um erro. Por favor, tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <Label htmlFor="name" className="text-[#f3c52a]">Nome</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-[#333] text-white border-[#f3c52a] focus:border-[#f3c52a]"
          placeholder="Seu nome completo"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" className="text-[#f3c52a]">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[#333] text-white border-[#f3c52a] focus:border-[#f3c52a]"
          placeholder="seu@email.com"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="phone" className="text-[#f3c52a]">Telemóvel</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          required
          className="bg-[#333] text-white border-[#f3c52a] focus:border-[#f3c52a]"
          placeholder="+351 9xx xxx xxx"
        />
      </div>
      <Button type="submit" className="w-full bg-[#f3c52a] text-[#333] hover:bg-[#d3a820]">Começar Gratuitamente</Button>
      <p className="mt-2 text-sm text-center text-gray-300">Ao se inscrever, você concorda com nossos Termos de Serviço e Política de Privacidade.</p>
    </form>
  );
};

export default SignUpForm;