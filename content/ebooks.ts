export type Ebook = {
  title: string;
  type: string;
  size: string;
  driveUrl: string;
  coverImage: string;
};

export const ebooksData: Ebook[] = [
  { 
    title: "Gestão de Projetos", 
    type: "PDF", 
    size: "3.4 MB",
    driveUrl: "https://drive.google.com/file/d/1-eEaBn88RCLfZTKjVhrUYR_OnOhCt-31/view",
    coverImage: "/assets/images/ebooks/capas/ebook-gestao-de-projetos.jpg"
  },
  { 
    title: "3 Passos para Desenvolver um Produto", 
    type: "PDF", 
    size: "10.2 MB",
    driveUrl: "https://drive.google.com/file/d/1ry6k2hB1XQ8em7_if3tcATx4t_ZznAKS/view",
    coverImage: "/assets/images/ebooks/capas/ebook-3passos-para-desenvolver-um-produto.jpg"
  },
  { 
    title: "Exclusividade que gera Retorno", 
    type: "PDF", 
    size: "7.7 MB",
    driveUrl: "https://drive.google.com/file/d/1aFVTCbUXD_g05xlvw345-EMZ6bjj7Pw-/view",
    coverImage: "/assets/images/ebooks/capas/ebook-exclusividade-que-gera-retorno.jpg"
  },
  { 
    title: "O Poder da Gestão", 
    type: "PDF", 
    size: "27.9 MB",
    driveUrl: "https://drive.google.com/file/d/15BZu6U1P2K_nMYS1SIE53u4x_5rDtDVY/view",
    coverImage: "/assets/images/ebooks/capas/ebook-o-poder-da-gestao.jpg"
  },
  { 
    title: "Você tem uma Ideia de Produto?", 
    type: "PDF", 
    size: "9.3 MB",
    driveUrl: "https://drive.google.com/file/d/1_5tm360XApdNvt2RL2UqmBcK5sIqIqnj/view",
    coverImage: "/assets/images/ebooks/capas/ebook-voce-tem-uma-ideia-de-produto.png"
  },
  { 
    title: "Metodologia Six Sigma", 
    type: "PDF", 
    size: "2.0 MB",
    driveUrl: "https://drive.google.com/file/d/1Ljz_ga5WxccNi-rvy7XaHI7iPTCRwRKl/view",
    coverImage: "/assets/images/ebooks/capas/ebook-metodologia-six-sigma.jpg"
  }
];