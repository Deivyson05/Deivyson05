import app from "./axios";

export const getTecnologias = async () => {
    const response = await app.get("/tecnologia");
    return response.data;
};