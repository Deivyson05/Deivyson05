import app from "./axios";

export async function getProjetos() {
    const response = await app.get("/projeto");
    return response.data;
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
