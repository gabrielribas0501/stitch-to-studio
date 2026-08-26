export interface NavItem {
  label: string;
  to: "/" | "/atividades" | "/sobre" | "/seguranca" | "/contato";
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", to: "/", icon: "home" },
  { label: "Atividades", to: "/atividades", icon: "landscape" },
  { label: "Sobre nós", to: "/sobre", icon: "info" },
  { label: "Segurança", to: "/seguranca", icon: "gpp_good" },
  { label: "Contato", to: "/contato", icon: "mail" },
];

export const COMPANY = {
  name: "RioMonte",
  fullName: "RioMonte Aventura",
  tagline: "Sua jornada para o inexplorado começa aqui, com segurança e paixão.",
  email: "contato@riomonte.com.br",
  phone: "+55 (21) 99999-0000",
  whatsapp: "+55 (21) 99999-0000",
  address: "Estrada do Parque Nacional, 1500",
  city: "Teresópolis - RJ, 25950-000",
  social: [
    { label: "Instagram", icon: "photo_camera", href: "https://instagram.com" },
    { label: "Facebook", icon: "thumb_up", href: "https://facebook.com" },
    { label: "WhatsApp", icon: "chat", href: "https://wa.me/5521999990000" },
    { label: "YouTube", icon: "smart_display", href: "https://youtube.com" },
  ],
};
