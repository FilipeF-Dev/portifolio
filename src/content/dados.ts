// Todo o texto da página mora aqui. Os componentes só desenham.

export const perfil = {
  nome: "Filipe Ferreira",
  cargo: "Analista de TI · Desenvolvimento e IA",
  local: "Juiz de Fora, MG",
  // Coloque a foto em public/ e aponte aqui (ex.: "/foto.jpg"). Sem foto, aparecem as iniciais.
  foto: "/foto.jpg" as string | null,
  resumo:
    "Desenvolvedor de software e soluções de IA, com foco em automação e resolução de problemas reais de empresas. Estruturo soluções, defino arquiteturas e regras de negócio, orquestro ferramentas e agentes de IA durante o desenvolvimento e conduzo todo o processo, da concepção aos testes e implantação.",
  links: {
    github: "https://github.com/FilipeF-Dev",
    linkedin: "https://www.linkedin.com/in/filipe-ferreira-72b24624b/",
  },
  contato: {
    email: "fontes705@hotmail.com",
    whatsapp: { exibido: "(32) 99966-9909", numero: "5532999669909" },
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
  subtitulo: "Projeto em destaque, em produção e com código aberto",
  problema:
    "O Zabbix avisa bem quando algo cai, mas o alerta só diz o que aconteceu. Para entender a causa e saber por onde começar, era preciso juntar o histórico, os outros alertas do mesmo horário e o que se sabe do ambiente, muitas vezes de madrugada e sem ninguém de plantão.",
  solucao:
    "Desenvolvi um serviço que, para cada problema de gravidade média ou maior, reúne o contexto pela API do Zabbix e envia ao Claude. A análise chega em um segundo e-mail, junto do alerta original, com as causas mais prováveis e o que verificar primeiro. O modelo apenas sugere e não tem acesso para executar nenhuma ação no ambiente.",
  fluxo: [
    { passo: "Alerta", detalhe: "O Zabbix registra o evento em uma fila" },
    { passo: "Regras", detalhe: "Descarta o que se resolveu sozinho e eventos em massa" },
    { passo: "Contexto", detalhe: "Busca o histórico e os eventos próximos pela API" },
    { passo: "Modelo", detalhe: "Analisa com a base de conhecimento do ambiente" },
    { passo: "E-mail", detalhe: "Envia as causas prováveis e os próximos passos" },
  ],
  numeros: [
    { valor: "76 → ~10", rotulo: "alertas por mês chegam ao modelo depois das regras de filtragem" },
    { valor: "26/30", rotulo: "pontos na avaliação às cegas entre três modelos, sem respostas erradas" },
    { valor: "< US$ 0,25", rotulo: "de custo mensal com a API" },
  ],
  licao:
    "Os erros que apareceram nos testes não eram do modelo, e sim do contexto que o programa montava para ele. Ao corrigir os dados enviados, as análises passaram a acertar. Foi a principal lição do projeto: antes de trocar de modelo, vale revisar o que está sendo enviado a ele.",
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
      "Sistema de gestão modular para empresas. Começou como a intranet da empresa em que trabalho, é usado diariamente pelas equipes e evoluiu para um produto.",
    mostra: "Arquitetura modular, especificação antes do código e um assistente de IA com regras claras de privacidade",
    temas: ["IA", "Web", "Arquitetura"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    decisoes: [
      "22 módulos construídos sobre um núcleo comum de usuários, permissões e auditoria, com 275 testes automatizados",
      "Cada módulo foi especificado antes da implementação, em 19 documentos de requisitos e decisões",
      "Assistente de IA que não acessa os dados do sistema; o gestor acompanha o consumo de cada conta, mas não o conteúdo das conversas",
      "Integração com o provedor de IA isolada em um único ponto, o que permite trocar de modelo sem alterar o restante do sistema",
    ],
    links: [
      { rotulo: "Estudo de caso", url: "https://github.com/FilipeF-Dev/orbita-case-study" },
    ],
  },
  {
    id: "mcp-builder",
    nome: "MCP-Builder",
    resumo:
      "Ferramenta que mapeia uma empresa, do negócio à infraestrutura, e gera a base de um servidor MCP para conectar agentes de IA aos sistemas internos. Feita para pequenas e médias empresas, sem exigir conhecimento técnico de quem responde.",
    mostra: "Agentes de IA conectados aos sistemas da empresa com segurança, skills e aprovação humana",
    temas: ["IA", "Arquitetura"],
    stack: ["TypeScript", "MCP SDK", "PostgreSQL", "SQL Server"],
    decisoes: [
      "Entrevista em seis níveis, do ramo de atuação ao que o agente pode fazer, e análise técnica somente leitura dos computadores, da rede e dos bancos",
      "O que a ferramenta não consegue entender vira uma pergunta para uma pessoa, em vez de uma suposição",
      "Consultas aos sistemas fixas e somente leitura, com usuário de banco sem permissão de escrita",
      "Skills e servidor MCP montados apenas com o que o TI aprovou, item a item, com 56 testes automatizados e CI",
    ],
    links: [{ rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/mcp-builder" }],
  },
  {
    id: "lar",
    nome: "Lar",
    resumo:
      "Aplicativo para famílias organizarem compras, tarefas, agenda e recados em um só lugar, com atualização em tempo real.",
    mostra: "Desenvolvimento mobile completo, comunicação em tempo real e integração contínua",
    temas: ["Mobile", "Arquitetura"],
    stack: ["Flutter", "NestJS", "PostgreSQL", "Redis"],
    decisoes: [
      "Atualização em tempo real com Socket.IO, separada por grupo",
      "Isolamento entre grupos garantido no backend e validado por testes de segurança",
      "Autenticação com renovação de sessão segura e tolerante a requisições simultâneas",
      "Pipeline de CI com testes, geração do APK assinado, distribuição automática e build para iPhone",
    ],
    links: [{ rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/lar" }],
  },
  {
    id: "petire",
    nome: "Petire",
    resumo:
      "Cardápio online para lanchonetes de bairro. O cliente monta o pedido no site e finaliza diretamente pelo WhatsApp da loja.",
    mostra: "Segurança de dados no banco e uso de IA com revisão humana",
    temas: ["IA", "Web"],
    stack: ["Next.js", "Supabase", "Playwright", "Vercel"],
    decisoes: [
      "Cada loja acessa apenas os próprios dados, com regras de segurança no banco (RLS) verificadas por testes automatizados",
      "Importação de cardápio com IA, validada por um esquema de dados e revisada em uma tela de conferência antes de ser publicada",
      "Valores monetários armazenados em centavos para evitar erros de arredondamento",
      "Testes de ponta a ponta com Playwright cobrindo as jornadas do cliente, do lojista e do suporte",
    ],
    links: [
      { rotulo: "Ver o site", url: "https://petire.vercel.app" },
      { rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/petire" },
    ],
  },
  {
    id: "ajude-me",
    nome: "ajude.me",
    resumo:
      "Plataforma de troca de favores em que as habilidades de cada pessoa funcionam como moeda, sem envolver dinheiro.",
    mostra: "Especificação de produto e modelagem de domínio",
    temas: ["Web", "Arquitetura"],
    stack: ["Laravel", "PostgreSQL", "PostGIS", "Filament"],
    decisoes: [
      "Visão de produto, regras de negócio, requisitos e roadmap documentados antes do desenvolvimento",
      "Modelo sem saldo acumulável, para que a plataforma não se transforme em uma moeda paralela",
      "Mudanças de estado controladas e registradas, garantindo rastreabilidade das negociações",
      "Indicadores do piloto acompanhados por grupos de usuários ao longo dos meses",
    ],
    links: [{ rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/ajude.me" }],
  },
  {
    id: "nvoip",
    nome: "API REST em Java",
    resumo:
      "Desafio técnico com cadastro e login de usuários, gestão de clientes e envio de SMS e chamadas por uma API externa.",
    mostra: "Desenvolvimento backend em Java com Spring",
    temas: ["Web"],
    stack: ["Java", "Spring Boot", "Spring Security", "OpenFeign"],
    decisoes: [
      "Autenticação com JWT e senhas protegidas com BCrypt",
      "Arquitetura em camadas, com validação dos dados de entrada",
      "Tratamento centralizado de erros, com respostas padronizadas",
    ],
    links: [
      { rotulo: "Repositório", url: "https://github.com/FilipeF-Dev/nvoip-java-backend-challenge" },
    ],
  },
];

export const temas: Tema[] = ["IA", "Web", "Mobile", "Arquitetura"];

export const metodo = [
  {
    passo: "Entender e especificar",
    texto:
      "Levanto o problema com quem vai usar a solução e documento as regras de negócio, a arquitetura e os critérios de entrega antes de começar o código.",
  },
  {
    passo: "Decidir",
    texto:
      "Defino primeiro as questões que mudam o projeto, como quem pode acessar cada informação, quanto a solução pode custar e o que precisa ser registrado.",
  },
  {
    passo: "Desenvolver com IA",
    texto:
      "Conduzo ferramentas e agentes de IA a partir da especificação e reviso o resultado com base nela, garantindo que o código siga o que foi definido.",
  },
  {
    passo: "Testar e acompanhar",
    texto:
      "Escrevo testes para as regras mais críticas, uso integração contínua e acompanho o funcionamento em produção. O que muda no caminho volta para a documentação.",
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
      { nome: "MCP (Model Context Protocol)", onde: "mcp-builder" },
      { nome: "Skills e agentes de IA", onde: "mcp-builder" },
      { nome: "Engenharia de prompt e de contexto", onde: "destaque" },
      { nome: "Avaliação de modelos", onde: "destaque" },
      { nome: "Controle de custo e prompt caching", onde: "destaque" },
      { nome: "IA com revisão humana", onde: "petire" },
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
    grupo: "Boas práticas",
    itens: [
      { nome: "Especificação e documentação de requisitos", onde: "orbita" },
      { nome: "Testes automatizados e integração contínua", onde: "lar" },
      { nome: "Segurança de dados e LGPD", onde: "petire" },
      { nome: "Docker" },
    ],
  },
  {
    grupo: "Infraestrutura",
    itens: [
      { nome: "Zabbix e monitoramento", onde: "destaque" },
      { nome: "Windows Server e Active Directory" },
      { nome: "Redes: Mikrotik, Ubiquiti e Fortinet" },
      { nome: "Linux e systemd", onde: "destaque" },
    ],
  },
];

export const trajetoria = [
  {
    periodo: "2026 – atual",
    titulo: "Analista de suporte de TI",
    lugar: "Brasil Gourmet",
    texto:
      "Responsável pela infraestrutura e pelo suporte da unidade, além do desenvolvimento das ferramentas internas, como a intranet que deu origem ao Órbita e a triagem de alertas com IA.",
  },
  {
    periodo: "2025 – 2026",
    titulo: "Suporte técnico (estágio)",
    lugar: "Nvoip",
    texto:
      "Atendimento em soluções de VoIP, PABX IP e integrações com CRM, além da padronização de processos e da documentação do suporte.",
  },
  {
    periodo: "2019 – 2025",
    titulo: "Técnico de redes e infraestrutura",
    lugar: "Zamix",
    texto: "Implantação e manutenção de redes FTTH, links dedicados e sistemas de monitoramento remoto para empresas.",
  },
  {
    periodo: "2024 – em andamento",
    titulo: "Desenvolvimento Back-End",
    lugar: "Anhanguera",
    texto: "Graduação tecnológica.",
  },
];

export const textos = {
  projetos:
    "Projetos que desenvolvi do início ao fim. Abra um card para ver as principais decisões de cada um.",
  metodo:
    "Começo pela especificação e uso a IA como ferramenta de desenvolvimento, mantendo as decisões de projeto sob minha responsabilidade.",
  competencias: "Cada competência leva ao projeto em que foi aplicada.",
  contato: "Fique à vontade para entrar em contato pelo canal que preferir.",
};
