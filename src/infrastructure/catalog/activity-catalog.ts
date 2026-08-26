import raftingImage from "@/assets/activity-rafting.jpg";
import escaladaImage from "@/assets/activity-escalada.jpg";
import trilhasImage from "@/assets/activity-trilhas.jpg";
import montanhismoImage from "@/assets/activity-montanhismo.jpg";
import cachoeiraImage from "@/assets/trail-cachoeira.jpg";
import valesImage from "@/assets/trail-vales.jpg";
import type { ActivityProps } from "@/domain/entities/activity";

/**
 * Catálogo de referência (mesmo conteúdo do protótipo).
 * Usado pelo repositório local quando a API NestJS não está configurada,
 * e como seed do backend (backend/prisma/seed.ts espelha estes dados).
 */
export const ACTIVITY_CATALOG: ActivityProps[] = [
  {
    id: "act-rafting",
    slug: "rafting",
    name: "Rafting",
    emoji: "🛶",
    category: "rafting",
    difficulty: "hard",
    shortDescription:
      "Desça as corredeiras mais desafiadoras da região com nossa equipe de especialistas. Uma experiência em equipe cheia de adrenalina pura.",
    longDescription:
      "Prepare-se para uma jornada de pura adrenalina. Nosso percurso principal de rafting oferece 15km ininterruptos de corredeiras desafiadoras, esculpidas por cânions profundos e ladeadas por mata atlântica intocada. Esta atividade foi desenhada para quem busca emoção autêntica aliada a protocolos de segurança de padrão internacional. Cada bote é comandado por guias locais experientes que conhecem a leitura das águas como a palma da mão.",
    priceInCents: 28000,
    imageUrl: raftingImage,
    durationLabel: "4.5 Horas",
    groupLabel: "Máx 6/Bote",
    levelLabel: "Classe IV",
    minAge: 16,
    maxParticipants: 6,
    guided: true,
    featured: true,
    distanceKm: 15,
    includedEquipment: [
      "Capacete de alto impacto",
      "Colete salva-vidas classe V (profissional)",
      "Remos de carbono",
      "Neoprene em dias frios",
    ],
    whatToBring: [
      "Roupa de banho",
      "Calçado fechado (tênis velho ou papete)",
      "Protetor solar ecológico",
      "Toalha para o retorno",
    ],
    safety: [
      {
        icon: "medical_services",
        title: "Guias Certificados",
        description:
          "Todos os líderes de bote possuem certificação IRF (International Rafting Federation) e socorrismo avançado.",
      },
      {
        icon: "assignment_late",
        title: "Protocolo Rígido",
        description:
          "Briefing tático obrigatório em terra firme e simulação de resgate antes da entrada na água.",
      },
    ],
  },
  {
    id: "act-escalada",
    slug: "escalada",
    name: "Escalada",
    emoji: "🧗",
    category: "escalada",
    difficulty: "hard",
    shortDescription:
      "Supere seus limites em paredões de rocha natural. Rotas para iniciantes e avançados, sempre com o melhor equipamento e instrutores focados em segurança.",
    longDescription:
      "Nossos paredões de rocha natural oferecem vias esportivas e tradicionais para diferentes níveis. A progressão é conduzida por instrutores que avaliam seu condicionamento antes de definir a via, garantindo desafio sem improviso. Toda a montagem de ancoragem é dupla e revisada por um segundo instrutor.",
    priceInCents: 32000,
    imageUrl: escaladaImage,
    durationLabel: "6 Horas",
    groupLabel: "Máx 4/Instrutor",
    levelLabel: "5.10 a 5.12",
    minAge: 14,
    maxParticipants: 4,
    guided: true,
    featured: true,
    includedEquipment: [
      "Cadeirinha e capacete",
      "Sapatilha de escalada",
      "Cordas dinâmicas certificadas",
      "Kit de ancoragem redundante",
    ],
    whatToBring: [
      "Roupa flexível",
      "Água (mín. 2L)",
      "Protetor solar",
      "Lanche leve",
    ],
    safety: [
      {
        icon: "verified_user",
        title: "Dupla Checagem",
        description:
          "Cada ancoragem é montada e revisada por dois instrutores antes da primeira subida.",
      },
      {
        icon: "school",
        title: "Instrução Progressiva",
        description:
          "Treino de nós, comandos e queda controlada em solo antes de qualquer via em altura.",
      },
    ],
  },
  {
    id: "act-trilhas",
    slug: "trilhas",
    name: "Trilhas",
    emoji: "🥾",
    category: "trilha",
    difficulty: "moderate",
    shortDescription:
      "Explore a flora e fauna local em caminhadas imersivas. Roteiros guiados que levam a cachoeiras escondidas e mirantes com vistas espetaculares.",
    longDescription:
      "Roteiros guiados de imersão na mata atlântica, com paradas interpretativas sobre flora, fauna e história local. Ritmo ajustado ao grupo, com apoio de guia condutor certificado e kit de primeiros socorros portátil em todas as saídas.",
    priceInCents: 18000,
    imageUrl: trilhasImage,
    durationLabel: "4 Horas",
    groupLabel: "Máx 10/Guia",
    levelLabel: "Moderado",
    minAge: 12,
    maxParticipants: 10,
    guided: true,
    featured: true,
    distanceKm: 8,
    includedEquipment: [
      "Bastões de caminhada",
      "Kit de primeiros socorros portátil",
      "Capacete quando exigido pelo trecho",
    ],
    whatToBring: ["Tênis de trilha", "Mochila de ataque", "Água (mín. 1,5L)", "Repelente"],
    safety: [
      {
        icon: "record_voice_over",
        title: "Orientação Prévia",
        description:
          "Briefing completo antes da saída, alinhando expectativas, ritmo e procedimentos operacionais.",
      },
      {
        icon: "nature_people",
        title: "Mínimo Impacto",
        description:
          "Práticas de baixo impacto ambiental para preservar os biomas que exploramos.",
      },
    ],
  },
  {
    id: "act-montanhismo",
    slug: "montanhismo",
    name: "Montanhismo",
    emoji: "⛰️",
    category: "montanhismo",
    difficulty: "hard",
    shortDescription:
      "Conquiste cumes com expedições de vários dias. Logística completa, acampamento selvagem e guias especialistas em alta montanha.",
    longDescription:
      "Expedições de alta montanha com logística completa: transporte, alimentação de campo, barracas e rádio comunicação. Avaliamos previsão meteorológica em janelas de 12 horas e mantemos plano de contingência de descida para cada acampamento.",
    priceInCents: 149000,
    imageUrl: montanhismoImage,
    durationLabel: "3 Dias",
    groupLabel: "Máx 8/Expedição",
    levelLabel: "Avançado",
    minAge: 18,
    maxParticipants: 8,
    guided: true,
    featured: true,
    distanceKm: 24,
    elevationGainM: 2100,
    includedEquipment: [
      "Barracas de alta montanha",
      "Rádio comunicação",
      "Kit de resgate em área remota",
      "Alimentação de campo",
    ],
    whatToBring: ["Saco de dormir -5°C", "Botas de cano alto", "Casaco impermeável", "Lanterna de cabeça"],
    safety: [
      {
        icon: "gpp_good",
        title: "Janela Meteorológica",
        description:
          "Avaliação de previsão a cada 12 horas com plano de descida definido para cada acampamento.",
      },
      {
        icon: "medical_services",
        title: "Resgate Remoto",
        description:
          "Guias com formação em atendimento pré-hospitalar em área remota e comunicação satelital.",
      },
    ],
  },
  {
    id: "trail-pico-da-neblina",
    slug: "pico-da-neblina",
    name: "Pico da Neblina - Expedição Completa",
    emoji: "🏔️",
    category: "montanhismo",
    difficulty: "hard",
    shortDescription:
      "A travessia definitiva para montanhistas experientes. Enfrente terrenos acidentados, clima imprevisível e acampamentos selvagens nesta jornada de superação rumo ao topo do RioMonte.",
    longDescription:
      "Três dias de travessia com dois acampamentos selvagens, trechos de escalaminhada e exposição a clima instável. Indicada apenas para montanhistas com experiência prévia em pernoite em altitude.",
    priceInCents: 189000,
    imageUrl: montanhismoImage,
    durationLabel: "3 Dias",
    groupLabel: "Máx 8/Expedição",
    levelLabel: "Avançado",
    minAge: 18,
    maxParticipants: 8,
    guided: true,
    featured: false,
    distanceKm: 24,
    elevationGainM: 2100,
    includedEquipment: ["Capacete", "Bastões de caminhada", "Kit de primeiros socorros portátil"],
    whatToBring: ["Saco de dormir -5°C", "Botas de cano alto", "Casaco impermeável"],
    safety: [
      {
        icon: "health_and_safety",
        title: "Equipamento de Segurança Incluso",
        description:
          "Aluguel gratuito de capacetes, bastões de caminhada e kits de primeiros socorros portáteis.",
      },
    ],
  },
  {
    id: "trail-cachoeira-escondida",
    slug: "cachoeira-escondida",
    name: "Trilha da Cachoeira Escondida",
    emoji: "💦",
    category: "trilha",
    difficulty: "moderate",
    shortDescription:
      "Um percurso úmido e verdejante que culmina em uma piscina natural intocada.",
    longDescription:
      "Percurso de 8km em mata fechada com travessias de riacho e um trecho final de descida técnica até a piscina natural. Inclui tempo de banho e parada para lanche à beira d'água.",
    priceInCents: 16000,
    imageUrl: cachoeiraImage,
    durationLabel: "4 Horas",
    groupLabel: "Máx 10/Guia",
    levelLabel: "Moderado",
    minAge: 12,
    maxParticipants: 10,
    guided: true,
    featured: false,
    distanceKm: 8,
    includedEquipment: ["Bastões de caminhada", "Kit de primeiros socorros portátil"],
    whatToBring: ["Roupa de banho", "Toalha", "Tênis de trilha", "Repelente"],
    safety: [
      {
        icon: "health_and_safety",
        title: "Equipamento de Segurança Incluso",
        description:
          "Trilhas moderadas e difíceis incluem capacete, bastões e kit de primeiros socorros.",
      },
    ],
  },
  {
    id: "trail-vales-dourados",
    slug: "vales-dourados",
    name: "Caminho dos Vales Dourados",
    emoji: "🌄",
    category: "trilha",
    difficulty: "easy",
    shortDescription:
      "Ideal para iniciantes. Uma caminhada contemplativa com vistas panorâmicas e pouco desnível.",
    longDescription:
      "Cinco quilômetros de caminhada leve por campos de altitude, com mirantes panorâmicos e desnível suave. Excelente primeira experiência para famílias e iniciantes.",
    priceInCents: 9000,
    imageUrl: valesImage,
    durationLabel: "2 Horas",
    groupLabel: "Máx 12/Guia",
    levelLabel: "Fácil",
    minAge: 8,
    maxParticipants: 12,
    guided: false,
    featured: false,
    distanceKm: 5,
    includedEquipment: ["Kit de primeiros socorros portátil"],
    whatToBring: ["Tênis confortável", "Água (1L)", "Boné", "Protetor solar"],
    safety: [
      {
        icon: "record_voice_over",
        title: "Orientação Prévia",
        description: "Briefing curto de conduta consciente e uso do mirante antes da partida.",
      },
    ],
  },
];
