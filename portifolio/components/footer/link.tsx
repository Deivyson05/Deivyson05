import Link from "next/link";

interface LinkProps {
    href: string,
    target?: string,
    name: string
}

export function FooterLink({href, target, name} : LinkProps) {
    return (
        <Link className="font-bold" href={href} target={target}>{name}</Link>
    );
}