import Link from "next/link";
import { profile } from "@/data/profile";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md pt-16 pb-8 mt-24">
      <div className="mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-4">DevPortfolio</h3>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Construindo experiências digitais modernas, rápidas e memoráveis com as melhores tecnologias do mercado.
            </p>
            <div className="flex items-center gap-4">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={profile.socials.email} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Mim</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Telefone: {profile.socials.phone}</li>
              <li>Email: {profile.socials.email.replace("mailto:", "")}</li>
              <li className="pt-2">
                <a href="/currículo.pdf" download className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium">
                  Baixar Currículo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>&copy; {currentYear} {profile.name}. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Feito com código e cuidado.
          </p>
        </div>
      </div>
    </footer>
  );
}
