export interface PortfolioProject {
  client: string;
  title: string;
  category: string;
  shortDescription: string;
  problema: string;
  acao: string;
  resultado: string;
  image: string; // Imagem de capa
  imageAlt?: string;
  gallery?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    client: "EMaster",
    title: "Empilhadeira 1000Kg - Emaster",
    category: "Engenharia Mecânica",
    shortDescription:
      "Dimensionamento e desenvolvimento do projeto, incluindo gabaritos de solda e memorial de cálculo para 1000Kg.",
    problema:
      "A Emaster, empresa com know-how em elevação de cargas automotivas, desejava diversificar sua linha de produtos passando a produzir empilhadeiras. A empresa já possuía um protótipo de 1000kg, mas necessitava implementar melhorias nos quesitos de “manobrabilidade” e “alimentação elétrica”, além de realizar o dimensionamento estrutural correto para garantir estabilidade operacional com o mínimo de peso possível.",
    acao: 
      "A UTJr. Consultoria Mecânica estruturou o projeto utilizando a metodologia de Design Thinking e benchmarking com soluções do mercado. O escopo abrangeu o desenvolvimento de alternativas de melhorias funcionais, a elaboração de um memorial de cálculo completo (baseado nas NBRs pertinentes) para justificar as dimensões adotadas, e a confecção de todos os desenhos de fabricação dos componentes e dos gabaritos de solda.",
    resultado:
      "O projeto estruturou as bases de engenharia para o novo equipamento. As entregas definidas garantiram à Emaster as soluções de manobrabilidade e elétrica, um memorial de cálculo validando o dimensionamento (incluindo o motor e a estrutura) e o detalhamento técnico completo (desenhos das peças e de gabaritos de solda), deixando o projeto 100% preparado para a fase de fabricação e testes.",
    image: "/assets/images/portfolio/empilhadeira-motorizada/empilhadeira1.jpg",
    imageAlt: "Modelo 3D da empilhadeira motorizada EMaster desenvolvida pela Cromo",
    gallery: [
      "/assets/images/portfolio/empilhadeira-motorizada/empilhadeira1.jpg",
      "/assets/images/portfolio/empilhadeira-motorizada/empilhadeira2.jpg",
      "/assets/images/portfolio/empilhadeira-motorizada/empilhadeira3.jpg",
      "/assets/images/portfolio/empilhadeira-motorizada/empilhadeira4.jpg",
    ]
  },
  {
    client: "EMaster",
    title: "Elevador Automotivo Hidráulico",
    category: "Modelagem 3D & Fabricação",
    shortDescription:
      "Modelagem 3D, desenhos de fabricação e dimensionamento de componentes para um elevador automotivo tipo pórtico.",
    problema:
      "A EMaster utilizava apenas elevadores eletromecânicos. Com o surgimento de um novo mercado de elevação hidráulica, surgiu a necessidade de produzir esses equipamentos também.",
    acao: "Desenvolvimento de um elevador automotivo hidráulico do tipo pórtico, baseando-se no modelo eletromecânico já existente.",
    resultado:
      "Desenhos 3D e de fabricação entregues, com dimensionamento dos componentes comerciais, permitindo à EMaster construir e acrescentar o produto ao catálogo.",
    image: "/assets/images/portfolio/elevador-automotivo/elevador1.png",
    imageAlt: "Modelo 3D do elevador automotivo hidráulico tipo pórtico desenvolvido para EMaster",
  },
  {
    client: "IBTM",
    title: "Gabarito de Inspeção IBTM",
    category: "Desenho Técnico & Metrologia",
    shortDescription:
      "Desenvolvimento dos desenhos do gabarito de inspeção com dimensionamento baseado nas tolerâncias dimensionais da peça.",
    problema:
      "A IBTM viu uma oportunidade de terceirizar o desenvolvimento de um de seus gabaritos de inspeção.",
    acao: "Desenvolvimento dos desenhos do gabarito de inspeção com dimensionamento baseado nas tolerâncias dimensionais da peça previamente apresentada pela contratante.",
    resultado:
      "Toda a documentação do projeto no modelo fornecido pelo contratante foi entregue, possibilitando a construção do gabarito de inspeção.",
    image: "/assets/images/portfolio/ibtm/gabarito-ibtm1.png",
    imageAlt: "Modelo 3D do gabarito de inspeção desenvolvido para IBTM",
  },
  {
    client: "BROSE",
    title: "Bancada de Laboratório BROSE",
    category: "Modelagem 3D",
    shortDescription:
      "Desenho 3D em SolidWorks de bancada de laboratório industrial com entrega em cores.",
    problema:
      "O cliente necessitava de um desenho de uma bancada de um laboratório da empresa.",
    acao: "Realização do desenho 3D no SolidWorks da bancada conforme especificações técnicas do cliente.",
    resultado:
      "Desenho em cores e 3D entregue ao cliente, pronto para referência de fabricação.",
    image: "/assets/images/portfolio/brose/cavaleira.jpg",
    imageAlt: "Modelo 3D da bancada de laboratório industrial desenvolvida para BROSE",
  },
  {
    client: "Setor Esportivo",
    title: "Case 3D para Sensor Crossfit",
    category: "Impressão 3D & Design",
    shortDescription:
      "Prototipagem em impressão 3D da estrutura externa de um sensor de medição de desempenho compatível com o esporte.",
    problema:
      "Um praticante de Crossfit teve a ideia de criar um sensor para medição de desempenho em função do tempo praticado. A Cromo ficou responsável por desenvolver a estrutura que alojaria a parte eletrônica.",
    acao: "Desenvolvimento e prototipagem em impressão 3D da parte externa do sensor com tamanho proporcional e compatível ao esporte praticado.",
    resultado:
      "Suporte em impressão 3D entregue com tamanho proporcional e compatível ao impacto do esporte praticado.",
    image: "/assets/images/portfolio/case-crossfit/case-crossfit-aberto.png",
    imageAlt: "Protótipo 3D do case para sensor de performance no Crossfit",
  },
  {
    client: "Setor Alimentício",
    title: "Máquina de Pastel Automatizada",
    category: "Conceituação de Máquinas",
    shortDescription:
      "Conceituação e projeto de máquina para automatizar a produção de massas recheadas em diversos formatos.",
    problema:
      "O cliente já possuía a patente do pastel em formato de letras, mas queria patentear uma máquina automatizada que fabricaria tais pastéis.",
    acao: "Desenvolvimento de um conceito de máquina para automatizar a produção de massas alimentícias recheadas nos mais diversos formatos, a começar por letras e outros sinais gráficos.",
    resultado:
      "Documentação técnica necessária para o cliente realizar o pedido de patente da máquina entregue com sucesso.",
    image: "/assets/images/portfolio/maquina-pastel/maquina-pastel-ampla.png",
    imageAlt: "Projeto conceitual da máquina de pastel automatizada com sistema de moldagem em letras",
  },
  {
    client: "Setor Alimentício",
    title: "Máquina de Abate de Tilápias",
    category: "Conceituação de Máquinas",
    shortDescription:
      "Desenvolvimento de toda a parte mecânica e eletrônica de uma máquina automatizada para abate de tilápias.",
    problema:
      "O projeto consistia em desenvolver toda a parte mecânica e eletrônica de uma máquina para o abate de tilápias. O grande desafio estava na complexidade de adaptar os mecanismos às diferentes variações de tamanho e peso dos peixes, sendo necessário calibrar a força exata de abate (forte o suficiente para ser eficiente, mas sem excessos para não prejudicar o processo). Adicionalmente, enfrentou-se obstáculos de cronograma, expandindo o projeto de 28 para 55 semanas de execução.",
    acao: "A equipe atuou em diversas frentes da engenharia para finalizar o equipamento. O escopo compreendeu toda a modelagem 3D, elaboração dos desenhos de fabricação, desenvolvimento da programação e criação de esquemáticos eletrônicos. Também efetuaram a confecção de extensos documentos de apoio e pesquisa de orçamentos.",
    resultado:
      "O projeto atingiu sua entrega final integrando as lógicas e mecânicas estipuladas. Foram repassados aos responsáveis o Memorial de Cálculos, Manual do Usuário, Manuais de Montagem e Manual de automação, deixando a tecnologia estruturada e pronta para as próximas fases de produção.",    
    image: "/assets/images/portfolio/abate-tilapia/abate-tilapia-desenho.png",
    imageAlt: "Máquina de abate de tilápias",
  },
  {
    client: "Inovatech",
    title: "Robô Lava e Seca",
    category: "Desenho Mecânico & Fabricação",
    shortDescription:
      "Desenvolvimento do projeto estrutural e mecânico de um robô para lavagem e secagem de cadeiras de praia.",
    problema:
      "Havia a necessidade de desenvolver a parte mecânica de um robô focado na limpeza de cadeiras de praia feitas de plástico. O desafio envolvia criar um mecanismo com dois braços: um capaz de suportar a cadeira suspensa na altura ideal e outro responsável por aplicar jatos de água para lavar e jatos de ar para secar o material.",
    acao: 
    "O Departamento de Projetos conduziu pesquisas preliminares, estudo de normas e alinhamento de funcionamento com a Inovatech. O desenvolvimento do descritivo técnico abrangeu a modelagem 3D do robô, criação dos desenhos 2D, desenvolvimento de produto e o dimensionamento mecânico completo da estrutura estrutural.",
    resultado:
    "A entrega final do projeto descritivo foi concluída com sucesso, englobando todos os manuais, relatórios e detalhamentos de desenhos técnicos necessários. O projeto entregue fornece a base estrutural mecânica pronta para futuras fases de fabricação, prototipagem e testes (etapas estas que não faziam parte do escopo atual).",
    image: "/assets/images/portfolio/robo-lava-seca/robo1.png",
    imageAlt: "Desenho de fabricação do robô Lava e Seca",
  },
  {
    client: "Cliente Confidencial",
    title: "Suporte para Fita Adesiva Larga",
    category: "Patente & Documentação Técnica",
    shortDescription:
      "Preparação de toda a documentação técnica, descritiva e desenhos 2D necessários para o patenteamento no INPI.",
    problema:
      "O projeto consistia em preparar toda a documentação necessária para o patenteamento de um modelo de suporte de fita adesiva larga.",
    acao: 
      "A execução das atividades ocorreu em etapas, totalizando um período de semanas. Inicialmente, foi feita uma busca por patentes semelhantes e uma definição dos parâmetros do patenteamento. Em seguida, a equipe consultou manuais e diretrizes do Instituto Nacional da Propriedade Industrial (INPI) e redigiu os documentos exigidos: resumo, relatório descritivo, quadro reivindicatório e desenhos 2D.",
    resultado:
      "O projeto finalizou com sucesso a confecção de todos os arquivos de patenteamento. O quadro reivindicatório foi construído para garantir proteção para a forma, método de fabricação, uso, material e faixa de peso do suporte.",
    image: "/assets/images/portfolio/suporte-fita/suporte-fita.png",
    imageAlt: "Desenho técnico do suporte para fita adesiva larga",
  },
  {
    client: "Metalfranca",
    title: "Cadeira COLORE — Metalfranca",
    category: "Desenhos de Fabricação",
    shortDescription:
      "Modelagem e desenhos de fabricação completos da cadeira COLORE para industrialização simplificada.",
    problema:
      "A Metalfranca quis investir na produção de um novo modelo de cadeira COLORE através de uma produção simplificada, moderna e eficiente, mas não tinha os desenhos de fabricação.",
    acao: "Desenvolvimento do modelo da cadeira COLORE com os desenhos de fabricação dos componentes e desenhos das montagens.",
    resultado:
      "A fabricação do produto deixou de depender apenas do conhecimento tácito de funcionários específicos — a empresa agora possui documentação histórica completa para produção.",
    image: "/assets/images/portfolio/metalfranca/cadeira-metalfranca1.png",
    imageAlt: "Desenho de fabricação da cadeira COLORE desenvolvido para Metalfranca",
  },
  {
    client: "Conesul",
    title: "Kits de Robótica Conesul",
    category: "Nacionalização de Produto",
    shortDescription:
      "Desenhos de fabricação, lista de materiais, manual do usuário e validação de kit de robótica para produção nacional.",
    problema:
      "Os kits de robótica ainda são pouco acessíveis no Brasil devido aos altos custos de importação. A Conesul decidiu produzir e fabricar esses produtos localmente.",
    acao: "Desenvolvimento dos desenhos de fabricação, lista dos materiais necessários, manual do usuário e teste do produto desenvolvido.",
    resultado:
      "Produto entregue completamente funcional com modelos 3D e lista de fornecedores para fabricação em grande escala.",
    image: "/assets/images/portfolio/conesul/robotica/conesul-kit-amarelo.png",
    imageAlt: "Kit de robótica educacional desenvolvido para produção nacional pela Conesul",
  },
  {
    client: "Cliente Industrial",
    title: "Torrador de Café",
    category: "Desenho Industrial & Patente",
    shortDescription:
      "Desenho industrial e relatório descritivo no SolidWorks para garantir a patente e evitar cópias.",
    problema:
      "A cliente encontrou uma oportunidade de se destacar no mercado de torradores de café, mas temia ter seu produto copiado pela concorrência.",
    acao: "Elaboração do desenho industrial para proteção do produto e relatório descritivo com desenhos no SolidWorks.",
    resultado:
      "O desenho e o relatório foram fundamentais para o desenvolvimento e registro da patente do produto.",
    image: "/assets/images/portfolio/torrador-cafe/torrador-cafe-desenho.png",
    imageAlt: "Modelo 3D do torrador de café com desenho industrial para registro de patente",
  },
  {
    client: "Automação Rural",
    title: "Controle de Bomba d'Água",
    category: "Automação",
    shortDescription:
      "Sistema de controle remoto do volume da caixa d'água eliminando deslocamentos de 800m para desativação manual.",
    problema:
      "O proprietário de uma chácara possuía uma bomba d'água localizada a 800m de sua residência e a desativação era realizada manualmente.",
    acao: "Desenvolvimento de um sistema de controle do volume de água da caixa d'água, manual de montagem e indicações de instalação dos equipamentos.",
    resultado:
      "O deslocamento frequente entre residência e bomba foi eliminado com a automatização do controle.",
    image: "/assets/images/portfolio/bomba-dagua/bomba-dagua1.png",
    imageAlt: "Esquemático eletrônico do sistema de controle de bomba d'água automatizado",
  },
  {
    client: "Hospitalar",
    title: "Maca Hospitalar",
    category: "Prototipagem & Design",
    shortDescription:
      "Maca hospitalar com monitoramento de massa total e por segmentos corporais dos pacientes.",
    problema:
      "O cliente encontrou a oportunidade de implementar um sistema de monitoramento à maca hospitalar, tendo em vista que o peso de um paciente é essencial para seu acompanhamento e diagnóstico. Todavia, a aferição dessa grandeza em pacientes acamados é um grande desafio.",
    acao: "Foi proposto o desenvolvimento de um protótipo em escala reduzida para validação da ideia, tal qual como o fornecimento de modelos 3D, esquemáticos eletrônicos, código de programação e manuais de instalação e manuseio.",
    resultado:
      "Foi repassado o protótipo em escala reduzida, responsável pela validação da ideia apresentando apenas 2% de erro médio, eficiência na transmissão dos dados e uma correspondência consistente para com cada segmento analisado.",
    image: "/assets/images/portfolio/maca-hospitalar/maca-hospitalar.png",
    imageAlt: "Modelo 3D da maca hospitalar desenvolvida para o cliente",
  },
  {
    client: "Ekorama",
    title: "Ekorama Arcade Sustentável",
    category: "Desenvolvimento de Produto",
    shortDescription:
      "Desenvolvimento conceitual de máquina interativa voltada à reciclagem gamificada, incentivando o descarte consciente com uma experiência recreativa.",
    problema:
      "O cliente buscava uma solução inovadora capaz de estimular práticas sustentáveis de forma atrativa e acessível, incentivando o descarte correto de materiais recicláveis através da interação lúdica.",
    acao: "Foi desenvolvido o conceito de uma máquina estilo fliperama que utiliza resíduos recicláveis como forma de interação, unindo entretenimento, educação ambiental e incentivo à reciclagem.",
    resultado:
      "Entrega do conceito técnico e visual do produto, possibilitando validação da proposta e avanço no desenvolvimento da solução sustentável.",
    image: "/assets/images/portfolio/ekorama/ekorama.png",
    imageAlt: "Projeto conceitual da máquina interativa sustentável Ekorama",
  },
];