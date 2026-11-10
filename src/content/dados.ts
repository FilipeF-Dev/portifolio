// Todo o texto da página mora aqui. Os componentes só desenham.

export const perfil = {
  nome: "Filipe Ferreira",
  cargo: "Analista de TI · software e automações com IA",
  local: "Juiz de Fora, MG",
  // Coloque a foto em public/ e aponte aqui (ex.: "/foto.jpg"). Sem foto, aparecem as iniciais.
  foto: null as string | null,
  resumo:
    "Construo software e automações com IA para problemas reais de uma empresa. Começo pela especificação, conduzo a IA na implementação e testo antes de colocar no ar.",
  links: {
    github: "https://github.com/FilipeF-Dev",
    linkedin: "https://www.linkedin.com/in/filipe-ferreira-72b24624b/",
  },
};

export const secoes = [
  { id: "destaque", rotulo: "Destaque" },
  { id: "projetos", rotulo: "Projetos" },
  { id: "metodo", rotulo: "Como trabalho" },
  { id: "competencias", rotulo: "Competências" },
  { id: "trajetoria", rotulo: "Trajetória" },
  { id: "contato", rotulo: "Contato" },
] as const;

export const destaque = {
  titulo: "Triagem de alertas do Zabbix com IA",
  problema:
    "Um alerta às 3 da manhã diz o que aconteceu, mas não por quê nem por onde começar. Numa TI enxuta, sem plantão, quem lê precisa juntar sozinho o histórico, os outros alertas do mesmo horário e o que se sabe do ambiente.",
  solucao:
    "Para cada problema de gravidade Média ou maior, um serviço monta o contexto pela API do Zabbix e pede ao Claude as causas prováveis e o que conferir primeiro. Chega como um segundo e-mail, junto do alerta normal. Só sugere: o modelo não recebe ferramenta nenhuma.",
  fluxo: [
    { passo: "Alerta", detalhe: "Zabbix grava o ID numa fila" },
    { passo: "Regras", detalhe: "Ignora o que voltou sozinho e eventos de massa" },
    { passo: "Contexto", detalhe: "Histórico e eventos vizinhos pela API" },
    { passo: "Modelo", detalhe: "Base de conhecimento em cache" },
    { passo: "E-mail", detalhe: "Causas prováveis e o que conferir" },
  ],
  numeros: [
    { valor: "76 → ~10", rotulo: "alertas por mês viram análises, depois das regras" },
    { valor: "26/30", rotulo: "na avaliação às cegas, sem nenhuma resposta errada" },
    { valor: "< US$ 0,25", rotulo: "de custo por mês" },
  ],
  licao:
    "Os erros que apareceram não vinham do modelo, vinham do contexto que o programa montava. Antes de culpar o modelo, olhe o que você mandou para ele.",
  repositorio: "https://github.com/FilipeF-Dev/zabbix-ai-alert-triage",
  stack: ["Python", "Claude API", "Zabbix API", "systemd"],
};

export type Tema = "IA" | "Web" | "Mobile" | "Arquitetura";

export type Projeto = {
  id: string;
  nome: string;
  resumo: string;
  mostra: string;
  temas: Tema[];
  stack: string[];
  decisoes: string[];
  links: { rotulo: string; url: string }[];
};

export const projetos: Projeto[] = [
  {
    id: "orbita",
    nome: "Órbita",
    resumo:
      "Sistema de gestão modular para empresas. Nasceu como a intranet da empresa onde trabalho, está em uso todos os dias e virou produto.",
    mostra: "Especificação antes do código e um assistente de IA desenhado pelo que ele pode enxergar",
    temas: ["IA", "Web", "Arquitetura"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    decisoes: [
      "22 módulos sobre um núcleo de usuários, permissões e auditoria, com 275 testes automatizados",
      "19 documentos de especificação escritos antes do código",
      "Assistente de IA que não lê os dados do sistema: o gestor vê quanto cada conta usou, nunca o quê",
      "Provedor de IA atrás de uma interface: trocar de modelo é decisão de custo, não de arquitetura",
    ],
    links: [
      { rotulo: "Estudo de caso", url: "https://github.com/FilipeF-Dev/orbita-case-study" },
    ],
  },
  {
    id: "lar",
    nome: "Lar",
    resumo:
      "App para a família dividir compras, tarefas, agenda e recados, tudo atualizando em tempo real.",
    mostra: "Mobile de ponta a ponta, tempo real e CI",
    temas: ["Mobile", "Arquitetura"],
    stack: ["Flutter", "NestJS", "PostgreSQL", "Redis"],
    decisoes: [
      "Tempo real com Socket.IO, uma sala por grupo",
      "Isolamento entre grupos testado por uma suíte de segurança",
      "Refresh token rotativo com renovação idempotente",
      "CI com testes, APK assinado, distribuição automática e build de iPhone",
    ],
    links: [{ rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/lar" }],
  },
  {
    id: "petire",
    nome: "Petire",
    resumo:
      "Cardápio online para lanchonetes do bairro. O cliente monta o pedido no site e fecha no WhatsApp da loja.",
    mostra: "Segurança no banco com RLS e IA com uma pessoa conferindo",
    temas: ["IA", "Web"],
    stack: ["Next.js", "Supabase", "Playwright", "Vercel"],
    decisoes: [
      "Cada loja só vê o próprio cardápio, garantido por RLS e testado por um script que tenta os acessos proibidos",
      "Importação de cardápio com IA: o JSON passa por um schema e por uma tela de conferência antes de gravar",
      "Dinheiro sempre em centavos, inteiro, do banco até a tela",
      "8 jornadas de ponta a ponta com Playwright",
    ],
    links: [
      { rotulo: "No ar", url: "https://petire.vercel.app" },
      { rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/petire" },
    ],
  },
  {
    id: "ajude-me",
    nome: "ajude.me",
    resumo:
      "Plataforma de troca de favores: a habilidade vira moeda, sem dinheiro no meio.",
    mostra: "Produto especificado e domínio modelado com cuidado",
    temas: ["Web", "Arquitetura"],
    stack: ["Laravel", "PostgreSQL", "PostGIS", "Filament"],
    decisoes: [
      "Visão, regras de negócio, requisitos numerados e roadmap antes do código",
      "Não existe saldo: nenhum campo guarda crédito acumulável",
      "Mudança de estado só por método próprio, que valida e deixa rastro",
      "Métricas do piloto lidas por coorte mensal",
    ],
    links: [{ rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/ajude.me" }],
  },
  {
    id: "nvoip",
    nome: "API REST em Java",
    resumo:
      "Teste técnico: cadastro e login com JWT, CRUD de clientes e envio de SMS e chamadas por API externa.",
    mostra: "Backend clássico em Java",
    temas: ["Web"],
    stack: ["Java", "Spring Boot", "Spring Security", "OpenFeign"],
    decisoes: [
      "Filtro JWT próprio no Spring Security e senha com BCrypt",
      "Camadas controller, service e repository, com DTOs validados",
      "Tratamento global de erros com respostas padronizadas",
    ],
    links: [
      { rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/nvoip-java-backend-challenge" },
    ],
  },
];

export const temas: Tema[] = ["IA", "Web", "Mobile", "Arquitetura"];

export const metodo = [
  {
    passo: "Especificar",
    texto:
      "O problema, as regras de negócio, a arquitetura e o que significa estar pronto, escritos antes do código.",
  },
  {
    passo: "Decidir",
    texto:
      "As perguntas que mudam o desenho vêm primeiro: quem pode ver o quê, quanto pode custar, o que fica gravado.",
  },
  {
    passo: "Implementar com IA",
    texto:
      "A IA implementa a partir da especificação e de um arquivo de contexto por projeto. Eu reviso contra o documento.",
  },
  {
    passo: "Testar e operar",
    texto:
      "Testes nas regras que custam caro quando quebram, CI, e acompanhar em produção. O que muda vira documento.",
  },
];

export type GrupoCompetencias = {
  grupo: string;
  itens: { nome: string; onde?: string }[];
};

export const competencias: GrupoCompetencias[] = [
  {
    grupo: "IA aplicada",
    itens: [
      { nome: "Integração com LLMs (Claude API)", onde: "destaque" },
      { nome: "Engenharia de prompt e de contexto", onde: "destaque" },
      { nome: "Avaliação de modelos", onde: "destaque" },
      { nome: "Prompt caching e controle de custo", onde: "destaque" },
      { nome: "IA com humano no ciclo", onde: "petire" },
    ],
  },
  {
    grupo: "Desenvolvimento",
    itens: [
      { nome: "TypeScript e Next.js", onde: "orbita" },
      { nome: "Python", onde: "destaque" },
      { nome: "PostgreSQL", onde: "orbita" },
      { nome: "Flutter e NestJS", onde: "lar" },
      { nome: "Laravel", onde: "ajude-me" },
      { nome: "Java e Spring Boot", onde: "nvoip" },
    ],
  },
  {
    grupo: "Prática",
    itens: [
      { nome: "Especificação antes do código", onde: "orbita" },
      { nome: "Testes automatizados e CI", onde: "lar" },
      { nome: "Segurança de dados e LGPD", onde: "petire" },
      { nome: "Docker" },
    ],
  },
  {
    grupo: "Infraestrutura",
    itens: [
      { nome: "Zabbix e monitoramento", onde: "destaque" },
      { nome: "Windows Server e Active Directory" },
      { nome: "Redes: Mikrotik, Ubiquiti, Fortinet" },
      { nome: "Linux e systemd", onde: "destaque" },
    ],
  },
];

export const trajetoria = [
  {
    periodo: "2026 – hoje",
    titulo: "Analista de suporte de TI",
    lugar: "Brasil Gourmet",
    texto:
      "Infraestrutura e suporte da unidade, e as ferramentas internas: a intranet que virou o Órbita e a triagem de alertas com IA.",
  },
  {
    periodo: "2025 – 2026",
    titulo: "Suporte técnico (estágio)",
    lugar: "Nvoip",
    texto: "Suporte em VoIP, PABX IP e integrações com CRM; padronização de processos e documentação.",
  },
  {
    periodo: "2019 – 2025",
    titulo: "Técnico de redes e infraestrutura",
    lugar: "Zamix",
    texto: "Redes FTTH, links dedicados e monitoramento remoto para empresas.",
  },
  {
    periodo: "2024 – em curso",
    titulo: "Desenvolvimento Back-End",
    lugar: "Anhanguera",
    texto: "Graduação tecnológica.",
  },
];
