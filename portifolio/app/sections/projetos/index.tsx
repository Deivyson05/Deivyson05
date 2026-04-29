'use client'
import { projetos } from "./projetos";
import { ProjectCarousel } from "./ProjectCarousel";
import { motion } from "framer-motion";

export function Projetos() {
  const concluidos = projetos.filter((p) => p.status === "concluido");
  const emAndamento = projetos.filter((p) => p.status === "em-andamento");

  return (
    <section id="projetos" className="py-24 mx-auto px-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-24"
      >
        {concluidos.length > 0 && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-white">Projetos Concluídos</h2>
              <p className="text-muted-foreground text-lg">Soluções completas entregues com excelência.</p>
            </div>
            <ProjectCarousel projects={concluidos} />
          </div>
        )}

        {emAndamento.length > 0 && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-display font-bold text-white">Em Andamento</h2>
              <p className="text-muted-foreground text-lg">O que estou construindo no momento.</p>
            </div>
            <ProjectCarousel projects={emAndamento} />
          </div>
        )}
      </motion.div>
    </section>
  );
}
