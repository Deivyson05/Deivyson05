import { FooterLink } from "./link"
import {
    Mail,
    Phone,
    Send
} from "lucide-react";

export function Footer() {
    return (
        <footer className="p-10 flex flex-col gap-6 bg-gray-950">
            <header className="flex flex-col gap-6 justify-between md:flex-row md:gap-0">
                <div>
                    <h3 className="text-2xl font-semibold">Deivyson</h3>
                    <span>FullStack Developer</span>
                </div>

                <div className="flex flex-col">
                    <strong className="font-light">
                        NAVEGAÇÃO
                    </strong>
                    <FooterLink 
                        href="/"
                        name="Home"
                    />
                    <a 
                        className="font-bold"
                        href="#projetos"
                    >
                        Projetos
                    </a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        Sobre
                    </a>
                </div>

                <div className="flex flex-col">
                    <strong className="font-light">
                        SERVIÇOS
                    </strong>
                    <a 
                        className="font-bold" 
                        href="#home"
                    >Aplicações Web</a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        APIs
                    </a>
                    <a 
                        className="font-bold"
                        href="#sobre"
                    >
                        Banco de dados
                    </a>

                </div>


                <div className="flex flex-col">
                    <strong className="font-medium text-gray-400">
                        CURRÍCULO
                    </strong>
                    <FooterLink
                        href="#"
                        name="Lattes"
                        target="_blank"
                    />
                    <FooterLink
                        href="https://www.linkedin.com/in/deivyson-ricardo-33354425b/"
                        name="LinkedIn"
                        target="_blank"
                    />
                    <FooterLink
                        href="https://github.com/Deivyson05"
                        name="GitHub"
                        target="_blank"
                    />
                    
                </div>
                
            </header>
            <footer className="flex justify-between items-center">
                <span className="text-gray-500">© Deivyson Ricardo Silva dos Santos 2025</span>

                <div className="flex gap-6">
                    <a href="mailto:deivysonrssantos@outlook.com">
                        <Mail/>
                    </a>
                    <a href="#">
                        <Send/>
                    </a>
                </div>
            </footer>
        </footer>
    )
}