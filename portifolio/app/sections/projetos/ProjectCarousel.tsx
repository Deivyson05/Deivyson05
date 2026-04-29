import { Projeto } from "./projetos";
import { GlassCard } from "@/components/ui-extra/GlassCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export function ProjectCarousel({ projects }: { projects: Projeto[] }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });

  return (
    <div className="overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0" ref={emblaRef}>
      <div className="flex gap-6">
        {projects.map((project) => (
          <div key={project.slug} className="flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0">
            <GlassCard className="h-[400px] flex flex-col p-0 overflow-hidden group cursor-pointer border-white/10 hover:border-primary/50 transition-colors duration-500">
              <div className="relative w-full h-full">
                <img 
                  src={project.coverImage} 
                  alt={project.titulo}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-display font-bold text-white">{project.titulo}</h3>
                  <p className="text-muted-foreground line-clamp-2">{project.descricaoCurta}</p>
                  
                  <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full">
                      <Link href={`/${project.slug}`}>
                        Ver detalhes
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    {project.linkProjeto && (
                      <Button asChild variant="outline" className="rounded-full border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white/10">
                        <a href={project.linkProjeto} target="_blank" rel="noopener noreferrer">
                          Acessar
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
