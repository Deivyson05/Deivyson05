import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
    Card,
    CardTitle,
    CardDescription,
    CardContent
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface ProjectCardProps {
    title: string;
    desc: string;
    imgUrl: string;
    href?: string;
    className?: string;
}

export function ProjectCard({ title, desc, imgUrl, href, className }: ProjectCardProps) {
    const card = (
        <Card
            className={cn(
                "group/project relative isolate flex h-130 flex-col overflow-hidden bg-black p-0 transition-transform duration-500 hover:scale-[1.02]",
                className
            )}
        >
            <Image
                src={imgUrl}
                alt={title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover/project:scale-105"
            />
            <CardContent className="relative z-10 flex h-full w-full flex-col justify-end gap-2 bg-linear-to-t from-black/95 via-black/35 to-transparent p-6">
                <CardTitle className="title text-2xl text-white">{title}</CardTitle>
                <CardDescription className="text-sm text-white/75 md:text-base">{desc}</CardDescription>
            </CardContent>
        </Card>
    );

    return href ? (
        <Link href={href} aria-label={`Ver projeto ${title}`} className="block">
            {card}
        </Link>
    ) : card;
}

export function ProjectCardSkeleton() {
    return (
        <article className="flex flex-col gap-4" aria-hidden="true">
            <Skeleton className="aspect-4/3 w-full rounded-lg" />
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-3 w-32" />
            </div>
        </article>
    );
}