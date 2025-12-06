

import Link from "next/link";


interface AncoraProps {
    href: string,
    target?: string,
    content: string,
    active: boolean
}

export function Ancora({href, target, content, active} : AncoraProps) {
    
    return (
        <Link href={href} target={target}
            className={`font-semibold text-foreground px-3 py-1 rounded-xl ${active == true? "bg-primary/40 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3),inset_-1px_-1px_0px_rgba(255,255,255,0.3)]": ""}`}
        >
            {content}
        </Link>
    );
}