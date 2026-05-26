export const SITE = {
  name: "Vexxa Desenvolvimento",
  founder: "Vitor Hugo Thomaz Leal",
  // TODO: substituir pelo número real (formato internacional, sem +)
  whatsapp: "5511999999999",
  whatsappMessage:
    "Olá Vitor, vi seu portfólio e gostaria de conversar sobre um projeto.",
};

export const waLink = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
