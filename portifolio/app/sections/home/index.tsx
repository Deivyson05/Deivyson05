'use client'

import { motion } from "framer-motion";
import { TypingText } from "@/components/ui-extra/TypingText";
import { Button } from "@/components/ui/button"
import { ArrowRight, User } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import Link from "next/link";

export function HomeSection() {
    const phrases = [
    "Transformando ideias em código.",
    "Criando experiências digitais.",
    "Construindo o futuro web.",
  ];

  const scrollToProjects = () => {
    const el = document.getElementById("projetos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[100vh] flex flex-col justify-center items-center text-center px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background/0 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8 relative z-10"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
          Disponível para novos projetos
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-6xl font-display font-bold text-white tracking-tight min-h-[3em] md:min-h-[2.5em] lg:min-h-[2em] glow-text leading-tight">
          <TypingText phrases={phrases} />
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Sou desenvolvedor FullStack sempre procurando novos desafios e formas de facilitar a interação das pessoas no que se trata de internet.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
        >
          <Button 
            size="lg" 
            onClick={scrollToProjects}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
          >
            Ver Projetos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="w-full sm:w-auto rounded-full px-8 border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white"
          >
            <Link href="/sobre">
              Sobre Mim
              <User className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}