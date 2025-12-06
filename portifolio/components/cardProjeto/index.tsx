import { useRouter } from "next/navigation";

import {
    Card,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

interface Props {
    img: string;
    title: string;
    description: string;
    id: string;
}

export function CardProjeto({ img, title, description, id } : Props) {
    const router = useRouter();


    return (
        <Card className="flex flex-col w-74 h-fill p-4 gap-4 hover:scale-104 transition ease-in rounded-lg bg-gray-900 cursor-pointer"
            onClick={() => {
                router.push(`/${id}`);
            }}
        >
            <img src={img} alt="banner" className="w-full h-40 rounded-md object-cover" />
            <CardTitle className="w-full h-8 font-bold text-xl flex items-center">{title}</CardTitle>
            <CardDescription className="w-full h-6s text-md font-semibold flex items-center">{description}</CardDescription>
        </Card>
    )
}