import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SkillBar({ name, value, index }: { name: string; value: number; index: number }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(value);
    }, 500 + index * 100);
    return () => clearTimeout(timer);
  }, [value, index]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm font-medium">
        <span className="text-white">{name}</span>
        <span className="text-primary">{value}%</span>
      </div>
      <div className="h-2 w-full bg-secondary/30 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
        >
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/30" />
        </motion.div>
      </div>
    </div>
  );
}
