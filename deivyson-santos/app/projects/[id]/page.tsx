"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

import {
  getProjetos,
  PROJETOS_SWR_KEY,
  type Projeto,
} from "@/api/projetos";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

function ProjectDetailSkeleton() {
  return (
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <Skeleton className="aspect-4/3 w-full rounded-lg" />
      <div className="flex flex-col gap-5">
        <Skeleton className="h-4 w-36" />
        <Skeleton className="h-16 w-4/5" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-2/3" />
      </div>
    </div>
  );
}

function ProjectDetails({ project }: { project: Projeto }) {
  const technologies = project.tec
    ?.map((item) => item.tecnologia?.name)
    .filter((name): name is string => Boolean(name));

  return (
    <article className="flex flex-col gap-12 md:gap-16">
      <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
        <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-black">
          <Image
            src={project.imgUrl}
            alt={project.title}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-6">
          <p className="title text-sm tracking-[0.2em] text-orange-400">
            {project.concluido ? "PROJETO CONCLUÍDO" : "PROJETO EM ANDAMENTO"}
          </p>
          <h1 className="title text-6xl leading-[0.9] md:text-7xl">
            {project.title}
          </h1>
          <Separator />
          {technologies && technologies.length > 0 && (
            <div className="flex flex-col gap-3">
              <h2 className="title text-xl">Tecnologias</h2>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-foreground/60">
                {technologies.map((technology, index) => (
                  <li key={`${technology}-${index}`}>{technology}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-3">
            {project.linkProjeto && (
              <a
                href={project.linkProjeto}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-orange-400"
              >
                Ver projeto ↗
              </a>
            )}
            {project.linkRepo && project.linkRepo !== project.linkProjeto && (
              <a
                href={project.linkRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/25 px-5 py-2.5 text-sm transition-colors hover:border-orange-400 hover:text-orange-400"
              >
                Repositório ↗
              </a>
            )}
          </div>
        </div>
      </div>

      <section aria-labelledby="project-description-title" className="max-w-4xl border-t border-white/15 pt-8 md:pt-10">
        <p className="title mb-3 text-sm tracking-[0.2em] text-orange-400">
          DETALHES DO PROJETO
        </p>
        <h2 id="project-description-title" className="title mb-6 text-3xl md:text-4xl">
          Sobre o projeto
        </h2>
        <div className="space-y-5 wrap-anywhere text-base leading-relaxed text-foreground/70 [&_a]:text-orange-300 [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:border-l-2 [&_blockquote]:border-orange-400 [&_blockquote]:pl-5 [&_blockquote]:text-foreground/55 [&_code]:rounded [&_code]:bg-white/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:title [&_h1]:mt-10 [&_h1]:text-4xl [&_h1]:text-foreground [&_h2]:title [&_h2]:mt-8 [&_h2]:text-3xl [&_h2]:text-foreground [&_h3]:title [&_h3]:mt-6 [&_h3]:text-2xl [&_h3]:text-foreground [&_hr]:border-white/15 [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded [&_li]:ml-5 [&_ol]:list-decimal [&_p]:min-h-5 [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-white/5 [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:font-semibold [&_strong]:text-foreground [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-white/15 [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:border-white/15 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-foreground [&_ul]:list-disc">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeSanitize]}
          >
            {project.about}
          </ReactMarkdown>
        </div>
      </section>
    </article>
  );
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { data: projects, error, isLoading, mutate } = useSWR(
    PROJETOS_SWR_KEY,
    getProjetos
  );
  const project = projects?.find((item) => item.id === id);

  return (
    <main className="mx-auto min-h-screen w-full max-w-360 px-6 pb-24 pt-32 md:px-12 md:pt-40">
      <Link
        href="/projects"
        className="mb-10 inline-flex text-sm text-foreground/55 transition-colors hover:text-orange-400"
      >
        ← Todos os projetos
      </Link>
      {isLoading && <ProjectDetailSkeleton />}
      {error && (
        <div className="flex flex-col items-start gap-3 py-12">
          <p className="text-foreground/70">Não foi possível carregar este projeto.</p>
          <button
            type="button"
            onClick={() => mutate()}
            className="text-sm text-orange-400 underline underline-offset-4"
          >
            Tentar novamente
          </button>
        </div>
      )}
      {!isLoading && !error && project && <ProjectDetails project={project} />}
      {!isLoading && !error && !project && (
        <p className="py-12 text-foreground/65">Projeto não encontrado.</p>
      )}
    </main>
  );
}