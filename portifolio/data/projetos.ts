import app from "./axios";

export async function getProjetos() {
    const response = await app.get("/projeto");
    return response.data;
}