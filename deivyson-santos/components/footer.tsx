"use client";
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { Separator } from "./ui/separator";

export function Footer() {
    return (
        <footer className="flex flex-col w-full items-center justify-center border-t bg-background p-6 gap-4">
            
            <div className="flex flex-col justify-between w-full md:flex-row gap-4">
                <article className="flex flex-col gap-2 flex-2 lg:flex-1">
                    <h3 className="title text-2xl">Deivyson Santos</h3>
                    <p>
                        Sou desenvolvedor FullStack sempre procurando novos desafios e formas de facilitar a interação das pessoas no que se trata de internet.
                    </p>
                    <div className="flex gap-2">
                        <a href="https://github.com/deivyson05" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-110">
                            <GithubLogoIcon size={24}/>
                        </a>
                        <a href="https://linkedin.com/in/deivyson05" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-110">
                            <LinkedinLogoIcon size={24}/>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=5581986460562" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-110">
                            <WhatsappLogoIcon size={24}/>
                        </a>
                        <a href="https://instagram.com/deivs_05" target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-110">
                            <InstagramLogoIcon size={24}/>
                        </a>
                    </div>
                </article>
                <article className="flex flex-col gap-2 flex-1">
                    <strong className="title text-2xl font-medium">
                        Navegacao
                    </strong>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </article>
                <article className="flex flex-col gap-2 flex-1">
                    <strong className="title text-2xl font-medium">Contato</strong>
                    <ul>
                        <li><a href="mailto:deivyson.santos@example.com">Email: deivyson.santos@example.com</a></li>
                        <li><a href="https://linkedin.com/in/deivyson0" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="">Baixar Currículo</a></li>
                    </ul>
                </article>
            </div>
            <Separator/>
            <p className="text-sm text-muted-foreground mt-4">
                &copy; {new Date().getFullYear()} Deivyson Santos. Todos os direitos reservados.
            </p>
        </footer>
    )
}