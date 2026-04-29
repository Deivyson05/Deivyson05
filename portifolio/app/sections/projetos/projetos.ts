interface Tecnologia {
    name: string;
    style: string
}

export type ProjectStatus = "concluido" | "em-andamento";

export interface Projeto {
  slug: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  coverImage: string;
  tecnologias: Tecnologia[];
  linkProjeto?: string;
  linkCodigo?: string;
  status: ProjectStatus;
}

export const projetos: Projeto[] = [
    {
        slug: "combogo-unicap",
        titulo: "Landing page Combogó",
        descricaoCurta: "Landing page de apresentação da Combogó",
        descricaoLonga: `
        <p>Este é um projeto de landing page desenvolvido para a Combogó, agência de jogos da Universidade Católica de Pernambuco (UNICAP), sob solicitação da Reitoria. A página foi criada com foco em design moderno, responsividade e clareza nas informações institucionais.</p>
        <p>Desenvolvedores:</p>
        <ul>
            <a href="https://github.com/Deivyson05">Deivyson Ricardo</a>
            <a href="https://github.com/viniciussmiranda">Vinicius Miranda</a>
        </ul>
        <p>Orientador:</p>
        <a href="https://github.com/rennancr93">Rennan Raffaele</a>
        <p>Objetivo:</p>
        <p>O projeto teve como finalidade apresentar de forma institucional as ações e a comunicação da reitoria da UNICAP, integrando-se visualmente com a identidade da Combogó. Foi desenvolvido como parte de uma iniciativa acadêmica.</p>
        `,
        linkCodigo: "https://github.com/Deivyson05/combogo-unicap",
        linkProjeto: "https://combogo.vercel.app",
        coverImage: "https://drive.google.com/thumbnail?id=1itqzbEp2TV-sovBWOwlyq4I62n1kdohv",
        status: "concluido",
        tecnologias: [{
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
        slug: "guia-de-leitura",
        titulo: "Shlomo",
        descricaoCurta: "Aplicativo de gerenciamento de leitura",
        descricaoLonga: "Aplicativo de gerenciamento de leitura",
        linkCodigo: "https://github.com/Deivyson05/guia-de-leitura",
        linkProjeto: "",
        coverImage: "https://drive.google.com/thumbnail?id=18NFgLVbCT26on8WJO_YO6cY4nmd4yUiB",
        status: "concluido",
        tecnologias: [
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
        slug: "yomu",
        titulo: "Yomu",
        descricaoCurta: "Aplicativo de gamificação da leitura",
        descricaoLonga: "Aplicativo de gamificação da leitura",
        linkProjeto: "https://yomu-azure.vercel.app/onboarding",
        linkCodigo: "https://github.com/Deivyson05/yomu",
        status: "concluido",
        coverImage: "https://drive.google.com/thumbnail?id=1S7L3UVsngb1D10fCAmVH1nItdwNB44x6",
        tecnologias: [
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
        slug: "adotai",
        titulo: "Adotaí",
        descricaoCurta: "Aplicativo de match de pets",
        descricaoLonga: "Aplicativo de match de pets",
        linkProjeto: "",
        linkCodigo: "https://github.com/AdotaAi/Adotai",
        status: "concluido",
        coverImage: "https://avatars.githubusercontent.com/u/206623208?s=200&v=4",
        tecnologias: [
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
    },
    {
        slug: "pibic",
        titulo: "PIBIC",
        descricaoCurta: "Iniciação científica | UNICAP",
        descricaoLonga: "Iniciação científica | UNICAP",
        linkProjeto: "",
        linkCodigo: "",
        status: "em-andamento",
        coverImage: "https://cms.ufmt.br/files/page_images/1646395660.jpg",
        tecnologias: [
            
        ]
    }
]