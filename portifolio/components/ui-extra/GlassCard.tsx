import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

export function GlassCard({ className, glow = false, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6",
        glow && "glow-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
