interface Tecnologia {
    name: string;
    style: string
}

export interface Projeto {
    id: string;
    nome: string;
    desc: string;
    repo: string;
    site: string;
    img: string;
    tec: Tecnologia[]
}

export const projetos = [
    {
        id: "combogo-unicap",
        nome: "Landing page Combogó",
        desc: "Landing page de apresentação da Combogó",
        repo: "https://github.com/Deivyson05/combogo-unicap",
        site: "https://combogo.vercel.app",
        img: "https://drive.google.com/thumbnail?id=1itqzbEp2TV-sovBWOwlyq4I62n1kdohv",
        tec: [{
            //"Node Js", "React Js", "JavaScript", "CSS3", "HTML5", "Figma"
                name: "Node Js",
                style: "border-l-green-200 bg-green-600"
            },
            {
                name: "React Js",
                style: "border-l-gray-200 bg-gray-600"
            },
            {
                name: "JavaScript",
                style: "border-l-yellow-200 bg-yellow-600"
            },
            {
                name: "CSS3",
                style: "border-l-purple-200 bg-purple-600"
            },
            {
                name: "HTML5",
                style: "border-l-orange-200 bg-orange-600"
            },
            {
                name: "Figma",
                style: "border-l-red-200 bg-red-600"
            }
        ]
    },
    {
        id: "guia-de-leitura",
        nome: "Shlomo",
        desc: "Aplicativo de gerenciamento de leitura",
        repo: "https://github.com/Deivyson05/guia-de-leitura",
        site: "",
        img: "https://drive.google.com/thumbnail?id=18NFgLVbCT26on8WJO_YO6cY4nmd4yUiB",
        tec: [
            //"Node Js", "React Native", "JavaScript", "Figma", "TypeScript", "MongoDB"
            {
                name: "Node Js",
                style: "border-l-green-200 bg-green-600"
            },
            {
                name: "React Native",
                style: "border-l-gray-200 bg-gray-600"
            },
            {
                name: "JavaScript",
                style: "border-l-yellow-200 bg-yellow-600"
            },
            {
                name: "Figma",
                style: "border-l-red-200 bg-red-600"
            },
            {
                name: "TypeScript",
                style: "border-l-blue-200 bg-blue-600"
            },
            {
                name: "MongoDB",
                style: "border-l-pink-200 bg-pink-600"
            }
        ]
    },
    {
        id: "yomu",
        nome: "Yomu",
        desc: "Aplicativo de gamificação da leitura",
        repo: "https://github.com/Deivyson05/yomu",
        site: "https://yomu-azure.vercel.app/onboarding",
        img: "https://drive.google.com/thumbnail?id=1S7L3UVsngb1D10fCAmVH1nItdwNB44x6",
        tec: [
            //"Node Js", "React", "Next Js", "Figma", "TypeScript", "PostgreSQL", "Render", "Spring Boot", "Java", "Vercel"
            {
                name: "Node Js",
                style: "border-l-green-200 bg-green-600"
            },
            {
                name: "React",
                style: "border-l-gray-200 bg-gray-600"
            },
            {
                name: "Next Js",
                style: "border-l-gray-200 bg-gray-600"
            },
            {
                name: "Figma",
                style: "border-l-red-200 bg-red-600"
            },
            {
                name: "TypeScript",
                style: "border-l-blue-200 bg-blue-600"
            },
            {
                name: "PostgreSQL",
                style: "border-l-pink-200 bg-pink-600"
            },
            {
                name: "Render",
                style: "border-l-pink-200 bg-pink-600"
            },
            {
                name: "Spring Boot",
                style: "border-l-pink-200 bg-pink-600"
            },
            {
                name: "Java",
                style: "border-l-pink-200 bg-pink-600"
            },
            {
                name: "Vercel",
                style: "border-l-pink-200 bg-pink-600"
            }
        ]
    },
    {
        id: "Adotai",
        nome: "Adotaí",
        desc: "Aplicativo de match de pets",
        repo: "https://github.com/AdotaAi/Adotai",
        site: "",
        img: "https://avatars.githubusercontent.com/u/206623208?s=200&v=4",
        tec: [
            //"Node Js", "React Js", "TypeScript", "CSS3", "HTML5", "Figma", "PostgreSQL"
            {
                name: "Node Js",
                style: "border-l-green-200 bg-green-600"
            },
            {
                name: "React Js",
                style: "border-l-gray-200 bg-gray-600"
            },
            {
                name: "TypeScript",
                style: "border-l-blue-200 bg-blue-600"
            },
            {
                name: "CSS3",
                style: "border-l-purple-200 bg-purple-600"
            },
            {
                name: "HTML5",
                style: "border-l-orange-200 bg-orange-600"
            },
            {
                name: "Figma",
                style: "border-l-red-200 bg-red-600"
            },
            {
                name: "PostgreSQL",
                style: "border-l-pink-200 bg-pink-600"
            }
        ]
    }
]