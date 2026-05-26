// src/app/api/contato/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    // TRAVA DE SEGURANÇA: Limite de 1000 caracteres
    const message = formData.get('message') as string || '';
    if (message.length > 500) {
      return NextResponse.json(
        { error: "A mensagem excedeu o limite de caracteres permitido." }, 
        { status: 400 }
      );
    }
    
    // Variáveis do seu arquivo .env.local
    const formspreeUrl = process.env.FORMSPREE_URL;
    const sheetsUrl = process.env.GOOGLE_SHEETS_URL;
    
    const requests = [];

    // 1. Envio para o Formspree (Formato FormData)
    if (formspreeUrl) {
      requests.push(
        fetch(formspreeUrl, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        })
      );
    }

    // 2. Envio para o Google Sheets (Formato JSON limpo)
    if (sheetsUrl) {
      const jsonData = Object.fromEntries(formData);
      requests.push(
        fetch(sheetsUrl, {
          method: 'POST',
          body: JSON.stringify(jsonData),
          headers: { 'Content-Type': 'application/json' }
        })
      );
    }

    if (requests.length === 0) {
      return NextResponse.json(
        { error: "Nenhuma rota de envio configurada no servidor." }, 
        { status: 500 }
      );
    }

    // Dispara para os dois ao mesmo tempo
    await Promise.all(requests);

    return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso!" });

  } catch (error) {
    console.error("Erro na API de contato:", error);
    return NextResponse.json(
      { error: "Falha ao processar a requisição." }, 
      { status: 500 }
    );
  }
}