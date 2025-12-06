'use-client'

import { Undo2, FolderClosed, GitPullRequestArrow, LayoutPanelTop } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import { Projeto } from "@/app/sections/projetos/projetos";


interface Props {
    projeto: Projeto | undefined;
    onBack: () => void;
}

export function AboutControls({ projeto, onBack }: Props) {
    const buttonStyle = "p-5 cursor-pointer"

    return (
        <div className="flex fixed left-0 bottom-0 w-screen justify-between p-4 bg-linear-to-b from-black/10 to-black">
            <div className="flex bg-background/50 backdrop-blur-sm rounded-full shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3),inset_-1px_-1px_0px_rgba(255,255,255,0.3)]">
                <button className={buttonStyle}
                    onClick={onBack}
                >
                    <Undo2 />
                </button>
            </div>
            <div className="flex bg-background/50 backdrop-blur-sm rounded-full shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3),inset_-1px_-1px_0px_rgba(255,255,255,0.3)]">
                <button className={buttonStyle}
                    onClick={() => {
                        window.open(projeto?.site || "#");
                    }}
                >
                    <LayoutPanelTop />
                </button>
                <button className={buttonStyle}
                    onClick={() => {
                        window.open(projeto?.repo || "#");
                    }}
                >
                    <FolderClosed />
                </button>
                
                <Dialog>
                    <DialogTrigger className={buttonStyle}>
                        <GitPullRequestArrow/>
                    </DialogTrigger>
                    <DialogContent className="bg-background/50 rounded-2xl border-none backdrop-blur-sm shadow-[inset_1px_1px_0px_rgba(255,255,255,0.3),inset_-1px_-1px_0px_rgba(255,255,255,0.3)]">
                        <DialogHeader className="flex flex-col gap-4">
                            <DialogTitle>Tecnologias usadas:</DialogTitle>
                            <DialogDescription className="flex flex-wrap gap-2">
                                {
                                    projeto?.tec.map((t, index) => (
                                        <Badge variant="default" key={index}
                                            className={`text-white border-l-4 rounded-none ${t.style}`}
                                        >{t.name}</Badge>
                                    ))
                                }
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}