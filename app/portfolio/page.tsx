// src/app/portfolio/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Cromo Consultoria",
  description: "Conheça os projetos reais desenvolvidos pela Cromo Consultoria em Engenharia.",
};

const portfolioProjects = [
  {
    title: "Torrador de Café",
    category: "Desenho Industrial & Patente",
    problema: "A cliente encontrou uma oportunidade de se destacar no mercado, porém existia um receio em ter seu produto copiado pela concorrência.",
    acao: "Elaboração do desenho industrial a fim de proteger o produto e um relatório descritivo com desenhos no SolidWorks.",
    resultado: "O desenho e o relatório foram fundamentais para o desenvolvimento e registro da patente do produto.",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800" 
  },
  {
    title: "Ekorama",
    category: "Desenvolvimento de Produto",
    problema: "Necessidade de criar uma máquina de jogos sustentável, unindo entretenimento e conscientização ambiental.",
    acao: "Desenvolvimento de uma máquina de fliperama onde a 'ficha' de jogo é um material reciclável (lata, tampas, lacres).",
    resultado: "Criação de um produto de reciclagem e recriação que incentiva e motiva a reciclagem de forma lúdica.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
  },
  {
    title: "Maca Hospitalar",
    category: "Prototipagem & Validação",
    problema: "Aferir o peso de pacientes acamados é um grande desafio. O cliente queria implementar um sistema de medição integrado à maca.",
    acao: "Desenvolvimento de um protótipo em escala reduzida, modelos 3D, esquemáticos eletrônicos, código e manuais de instalação.",
    resultado: "Protótipo repassado para validação apresentando apenas 2% de erro médio e eficiência na transmissão de dados.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800"
  },
  {
    title: "Empilhadeira Motorizada",
    category: "Engenharia Mecânica",
    problema: "A EMaster queria crescer a produção inserindo uma empilhadeira de elevação motorizada e movimentação manual, mas não existia projeto.",
    acao: "Dimensionamento do modelo baseado no protótipo, apresentação de alternativas de mobilidade e projeto de gabaritos de solda.",
    resultado: "Entregas de desenhos de fabricação, gabaritos de solda e memorial de cálculo para empilhadeira de 1000Kg.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800"
  },
  {
    title: "Elevador Automotivo Hidráulico",
    category: "Modelagem 3D & Fabricação",
    problema: "A EMaster utilizava apenas elevadores eletromecânicos e precisava entrar no mercado de elevação hidráulica.",
    acao: "Desenvolvimento de um elevador automotivo hidráulico do tipo pórtico, baseando-se no modelo eletromecânico.",
    resultado: "Desenhos 3D, fabricação e dimensionamento entregues, permitindo à Emaster construir e acrescentar o produto ao catálogo.",
    image: "https://images.unsplash.com/photo-1504917595217-d4f3e533c560?q=80&w=800"
  },
  {
    title: "Case 3D para Sensor Crossfit",
    category: "Impressão 3D & Design",
    problema: "Um praticante de Crossfit precisava de uma estrutura física para alojar a parte eletrônica de um sensor de medição de desempenho.",
    acao: "Com um plano simples e assertivo, nossa equipe desenvolveu e prototipou em impressão 3D a parte externa do sensor.",
    resultado: "Suporte entregue com tamanho proporcional e compatível ao impacto do esporte praticado.",
    image: "https://images.unsplash.com/photo-1581090464707-89dfaafe7ac9?q=80&w=800"
  },
  {
    title: "Máquina de Pastel Automatizada",
    category: "Conceituação de Máquinas",
    problema: "O cliente já possuía a patente do pastel em formato de letras e queria patentear uma máquina para automatizar essa fabricação.",
    acao: "Desenvolvimento de um conceito de máquina para automatizar a produção de massas recheadas em diversos formatos (letras, sinais gráficos).",
    resultado: "Entrega da documentação técnica necessária para o cliente realizar o pedido de patente da máquina.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800"
  },
  {
    title: "Brinquedos Conesul",
    category: "Modelagem 3D & Educação",
    problema: "O cliente queria implementar brinquedos que ensinassem programação para crianças nas escolas brasileiras (Ensino Fundamental).",
    acao: "Desenvolvimento de desenhos 2D e 3D dos brinquedos, esquematização, programação e funcionalidades.",
    resultado: "Produto entregue com modelos 3D, documentação completa e lista de possíveis fornecedores para fabricação.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800"
  },
  {
    title: "Bomba D'água",
    category: "Automação Rural",
    problema: "O proprietário precisava desativar manualmente uma bomba localizada a 800m de sua residência.",
    acao: "Desenvolvimento de sistema de controle do volume da caixa d'água, manual de montagem e indicações de instalação.",
    resultado: "Automatização concluída, eliminando a necessidade de deslocamento constante entre a residência e a bomba.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800"
  },
  {
    title: "Kits de Robótica",
    category: "Nacionalização de Produto",
    problema: "Custos elevados de importação dificultavam o acesso a kits de robótica no Brasil. A Conesul decidiu produzir localmente.",
    acao: "Desenvolvimento de desenhos de fabricação, lista de materiais, manual do usuário e validação/testes do produto.",
    resultado: "Produto entregue funcional, com modelos 3D e lista de fornecedores para fabricação nacional em grande escala.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=800"
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20">
      
      <section className="container mx-auto px-4 sm:px-6 mb-16">
        <Link href="/" className="text-zinc-500 hover:text-cromo text-xs font-bold uppercase tracking-widest mb-12 inline-block transition-colors">
          ← Voltar ao Início
        </Link>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Nosso <span className="text-cromo">Portfólio</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Confira como aplicamos a engenharia para resolver problemas reais, proteger inovações e viabilizar novos produtos para a indústria.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-cromo transition-colors flex flex-col group">
              
              <div className="relative w-full h-56 md:h-64 bg-zinc-800 overflow-hidden border-b border-zinc-800">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-3 py-1.5 rounded-full z-10">
                  <span className="text-[10px] font-bold tracking-widest text-cromo uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                <h3 className="absolute bottom-4 left-6 right-6 text-xl md:text-2xl font-bold text-white group-hover:text-cromo transition-colors z-10">
                  {project.title}
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow space-y-6">
                
                {project.problema && (
                  <div>
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest block mb-1">
                      Problema
                    </span>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {project.problema}
                    </p>
                  </div>
                )}

                {project.acao && (
                  <div>
                    <span className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest block mb-1">
                      Ação Cromo
                    </span>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {project.acao}
                    </p>
                  </div>
                )}

                {project.resultado && (
                  <div className="mt-auto pt-4 border-t border-zinc-800/50">
                    <span className="text-cromo font-bold text-[10px] uppercase tracking-widest block mb-1">
                      Resultado
                    </span>
                    <p className="text-white text-sm font-medium leading-relaxed">
                      {project.resultado}
                    </p>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 mt-32 text-center">
        <h2 className="text-3xl font-black text-white mb-6">Seu projeto pode ser o próximo.</h2>
        <Link 
          href="/#contato" 
          className="inline-block bg-cromo text-black font-black text-xs tracking-widest uppercase px-10 py-5 rounded-xl hover:bg-yellow-400 transition-all shadow-xl shadow-cromo/20"
        >
          Iniciar um Projeto
        </Link>
      </section>

    </main>
  );
}