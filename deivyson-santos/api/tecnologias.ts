import app from "./axios";

export interface Tecnologia {
    id: string;
    name: string;
    level: number;
}

export const getTecnologias = async (): Promise<Tecnologia[]> => {
    const response = await app.get("/tecnologia");
    return response.data as Tecnologia[];
};