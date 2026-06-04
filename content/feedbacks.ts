export interface Feedback {
  name: string;
  role: string;
  content: string;
}

export const feedbacks: Feedback[] = [
  {
    name: "Flávio Fornasier",
    role: "CEO e Sócio Fundador - Emaster",
    content: "Bacana não é apenas o resultado do projeto, mas também a forma de como ele foi conduzido. Impressão de estarmos trabalhando com profissionais com anos de experiência.",
  },
  {
    name: "José Henrique Silva",
    role: "Diretor Alimentar Terapia Nutricional",
    content: "Equipe profissional e ágil. Também destacando o excelente custo benefício em comparação às outras empresas, tornando muito bom para start-ups como a nossa.",
  }
  // {
  //   name: "Carlos Eduardo",
  //   role: "Engenheiro de Processos",
  //   content: "A agilidade da Cromo é o seu maior diferencial. Conseguimos validar nossa patente com um suporte técnico que raramente encontramos no mercado.",
  // }
];