import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const jsonData = Object.fromEntries(formData);
    
    // Identifica se é um lead de e-book (se tiver o campo 'ebook_baixado')
    const isEbookLead = !!jsonData.ebook_baixado;
    
    // Seleciona a URL correta baseada no tipo de lead
    const sheetsUrl = isEbookLead 
      ? process.env.GOOGLE_SHEETS_EBOOKS_URL 
      : process.env.GOOGLE_SHEETS_URL;

    // Trava de segurança apenas para formulário de contato (que tem campo 'message')
    const message = jsonData.message as string;
    if (message && message.length > 500) {
      return NextResponse.json(
        { error: "A mensagem excedeu o limite de caracteres permitido." }, 
        { status: 400 }
      );
    }

    // Se for contato comum, ainda podemos manter o Formspree se você quiser
    // Caso queira remover o Formspree de vez, é só deletar esse bloco
    const formspreeUrl = process.env.FORMSPREE_URL;
    const requests = [];

    if (!isEbookLead && formspreeUrl) {
      requests.push(
        fetch(formspreeUrl, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        })
      );
    }

    // Envio para a planilha correspondente
    if (sheetsUrl) {
      requests.push(
        fetch(sheetsUrl, {
          method: 'POST',
          body: JSON.stringify({
            ...jsonData,
            data_hora: new Date().toLocaleString("pt-BR")
          }),
          headers: { 'Content-Type': 'application/json' }
        })
      );
    }

    if (requests.length === 0) {
      return NextResponse.json({ error: "Configuração de envio não encontrada." }, { status: 500 });
    }

    await Promise.all(requests);

    return NextResponse.json({ success: true, message: "Enviado com sucesso!" });

  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json({ error: "Falha ao processar." }, { status: 500 });
  }
}