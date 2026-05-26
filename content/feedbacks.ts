export interface Feedback {
  name: string;
  role: string;
  content: string;
}

export const feedbacks: Feedback[] = [
  {
    name: "Ricardo Mendes",
    role: "Diretor Industrial | EMaster",
    content: "A Cromo transformou a nossa linha de montagem. O rigor técnico da UTFPR aplicado à nossa realidade trouxe uma eficiência que não esperávamos.",
  },
  {
    name: "Ana Silva",
    role: "Proprietária | Ekorama",
    content: "Profissionais excepcionais. O projeto da nossa máquina de jogos sustentável foi entregue com perfeição, superando todas as expectativas de inovação.",
  },
  {
    name: "Carlos Eduardo",
    role: "Engenheiro de Processos",
    content: "A agilidade da Cromo é o seu maior diferencial. Conseguimos validar nossa patente com um suporte técnico que raramente encontramos no mercado.",
  }
];