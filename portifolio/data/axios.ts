import axios from "axios";

const app = axios.create({
    baseURL: "https://deivyson05.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
});

export default app;