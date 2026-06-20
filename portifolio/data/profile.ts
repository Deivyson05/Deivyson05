import app from "./axios";

export async function getProfile() {
  try {
    const response = await app.get("/user");
    if (!response) {
      throw new Error("Failed to fetch profile");
    }
    const user = await response.data;
    return {
      name: user.name,
      role: "Desenvolvedor Fullstack",
      bio: "Sou um desenvolvedor apaixonado por criar interfaces que não são apenas funcionais, mas visualmente deslumbrantes. Combino lógica técnica com sensibilidade estética para construir experiências web modernas, rápidas e memoráveis.",
      quote: user.quote,
      avatar: "https://avatars.githubusercontent.com/u/131066052?v=4",

      socials: {
        github: `https://www.github.com/${user.github}`,
        linkedin: `https://www.linkedin.com/in/${user.linkedin}`,
        email: `mailto:${user.email}`,
        phone: user.phone,
      },
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export const profile = {
  name: "Deivyson Ricardo Silva dos Santos",
  role: "Desenvolvedor Fullstack",
  bio: "Sou um desenvolvedor apaixonado por criar interfaces que não são apenas funcionais, mas visualmente deslumbrantes. Combino lógica técnica com sensibilidade estética para construir experiências web modernas, rápidas e memoráveis.",
  quote: "Codar não é só resolver problemas, é criar possibilidades.",
  avatar: "https://avatars.githubusercontent.com/u/131066052?v=4",

  socials: {
    github: "https://github.com/Deivyson05",
    linkedin: "www.linkedin.com/in/deivyson05",
    email: "mailto:deivysonrssantos@outlook.com",
    phone: "+55 (81) 9 9313-8744",
  },
};