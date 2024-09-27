import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulating a successful submission
      toast.success("Inscrição realizada com sucesso!");
      
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
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="phone" className="text-[#f3c52a]">Telefone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="bg-[#333] text-white border-[#f3c52a] focus:border-[#f3c52a]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#f3c52a] text-[#333] hover:bg-[#d3a820]">Inscrever-se</Button>
    </form>
  );
};

export default SignUpForm;