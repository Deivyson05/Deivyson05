import app from "./axios";

export const PROJETOS_SWR_KEY = "/projeto";

export interface Projeto {
    id: string;
    title: string;
    desc: string;
    imgUrl: string;
    about?: string;
    concluido?: boolean;
    linkProjeto?: string | null;
    linkRepo?: string | null;
    tec?: Array<{
        id: string | number;
        tecnologia?: { name: string };
    }>;
}

export async function getProjetos(): Promise<Projeto[]> {
    const response = await app.get("/projeto");
    return response.data as Projeto[];
}

export async function updateImpressoes(id: string) {
    const response = await app.patch(`/projeto/impressoes/${id}`);
    return response.data;
}

export async function updateImpressoesProjeto(id: string) {
    const response = await app.patch(`/projeto/impressoesProjeto/${id}`);
    return response.data;
}

export async function updateImpressoesCodigo(id: string) {
    const response = await app.patch(`/projeto/impressoesCodigo/${id}`);
    return response.data;
}