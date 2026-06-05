# Manual de Operação e Estrutura Técnica
## Guia de Conversões — Cromo Consultoria

> **Propósito:** Este documento serve como referência técnica para configurar conversões em plataformas de rastreamento de campanhas (Google Ads, LinkedIn Ads, etc.). Cada evento listado representa um ponto de conversão mapeado diretamente no código-fonte do site.

---

## Índice

1. [Visão Geral da Estrutura de Tracking](#1-visão-geral-da-estrutura-de-tracking)
2. [Mapa de Páginas e Rotas](#2-mapa-de-páginas-e-rotas)
3. [Eventos de Conversão por Tipo](#3-eventos-de-conversão-por-tipo)
   - [3.1 Formulário de Contato](#31-formulário-de-contato)
   - [3.2 Download de E-books](#32-download-de-e-books)
   - [3.3 Cliques em WhatsApp](#33-cliques-em-whatsapp)
   - [3.4 Botões de CTA Principais](#34-botões-de-cta-principais)
4. [IDs de Elementos HTML para Tracking](#4-ids-de-elementos-html-para-tracking)
5. [Fluxo Técnico das Submissões de Formulário](#5-fluxo-técnico-das-submissões-de-formulário)
6. [O que foi implementado no GTM](#6-o-que-foi-implementado-no-gtm)
7. [Tabela Rápida de Referência](#7-tabela-rápida-de-referência)

---

## 1. Visão Geral da Estrutura de Tracking

### O que foi instalado (responsabilidade de desenvolvimento — concluído)

| Ferramenta | Status | Descrição |
|---|---|---|
| **Google Tag Manager (GTM)** | ✅ Concluído | Central de controle de todas as tags. Variável de ambiente: `NEXT_PUBLIC_GTM_ID` |
| **Banner de Cookies / LGPD** | ✅ Concluído | Nada é rastreado antes do consentimento do visitante |
| **Google Consent Mode v2** | ✅ Concluído | `ad_storage` e `analytics_storage` iniciam como `denied`; ativados após aceite |
| **Google Analytics 4 (GA4)** | ✅ Concluído | Mede visitas, comportamento e origem do tráfego |
| **LinkedIn Insight Tag** | ✅ Concluído | Habilita campanhas e remarketing no LinkedIn |
| **Conversion Linker (Google Ads)** | ✅ Concluído | Liga cliques nos anúncios do Google às visitas no site |
| **Google Sheets (CRM interno)** | ✅ Concluído | Recebe todos os leads dos formulários automaticamente |

### O que está fora do escopo de desenvolvimento

As etapas abaixo são de responsabilidade do **gestor de tráfego ou agência de mídia** e não exigem alterações no site:

| Etapa | Responsável |
|---|---|
| Definir e configurar conversões no Google Ads | Gestão de tráfego |
| Limpar ações de conversão duplicadas/inativas no Google Ads | Gestão de tráfego |
| Criar e otimizar campanhas no LinkedIn | Gestão de tráfego |
| Conectar GA4 ao Google Ads (importar conversões) | Gestão de tráfego |
| Criar audiências de remarketing | Gestão de tráfego |

---

## 2. Mapa de Páginas e Rotas

| Rota | Nome da Página | Contém Formulário de Contato? | Tipos de Conversão Disponíveis |
|---|---|---|---|
| `/` | Home | **Sim** | Formulário, WhatsApp, CTA Orçamento |
| `/sobre` | Sobre Nós | **Sim** | Formulário, WhatsApp |
| `/servicos` | Serviços (Visão Geral) | **Sim** | Formulário, WhatsApp |
| `/servicos/desenvolvimentodeproduto` | Desenvolvimento de Produto | **Sim** | Formulário, WhatsApp |
| `/servicos/estudodeviabilidade` | Estudo de Viabilidade | **Sim** | Formulário, WhatsApp |
| `/servicos/formulacaodepatentes` | Formulação de Patentes | **Sim** | Formulário, WhatsApp |
| `/servicos/otimizacaodeprocesso` | Otimização de Processo | **Sim** | Formulário, WhatsApp |
| `/servicos/prototipagemevalidacao` | Prototipagem e Validação | **Sim** | Formulário, WhatsApp |
| `/portfolio` | Portfólio | **Sim** | Formulário, WhatsApp |
| `/conteudos/blog` | Blog (listagem) | **Sim** | Formulário, WhatsApp |
| `/conteudos/blog/[slug]` | Artigo Individual | **Sim** | Formulário, WhatsApp |
| `/conteudos/ebooks` | E-books Gratuitos | **Sim** + modal de captura | Formulário, Download de E-book, WhatsApp |
| `/faq` | Perguntas Frequentes | **Sim** | Formulário, WhatsApp |

> O formulário de contato (`#contato`) e o botão flutuante de WhatsApp estão presentes em **todas as páginas do site**.

---

## 3. Eventos de Conversão por Tipo

### 3.1 Formulário de Contato

**Localização no código:** `components/sections/shared/ContactForm.tsx`
**Endpoint da API:** `POST /api/contato`

O formulário de contato é o **principal ponto de conversão** do site. Ele está presente em **todas as páginas**.

#### Campos do Formulário

| ID do Campo (HTML) | Nome do Campo | Tipo | Obrigatório |
|---|---|---|---|
| `contact-name` | Nome | `input[type="text"]` | Sim |
| `contact-phone` | Telefone / WhatsApp | `input[type="tel"]` | Sim |
| `contact-email` | E-mail | `input[type="email"]` | Não |
| `contact-message` | Mensagem | `textarea` (máx. 500 caracteres) | Sim |

#### Section ID para Scroll Tracking

```
id="contato"
```
Todas as âncoras `#contato` do site apontam para esta seção. Útil para rastrear cliques que levam ao formulário.

#### Botão de Submissão

| Atributo | Valor |
|---|---|
| **Texto do Botão** | `Enviar Mensagem` |
| **Tipo** | `button[type="submit"]` |

#### Como detectar a conversão no GTM

Para criar uma tag de conversão no Google Ads ou LinkedIn a partir deste formulário, o trigger recomendado é um **Custom Event** com o nome `contact_form_submit`.

O evento é disparado automaticamente após a confirmação de envio bem-sucedido da API, com o seguinte payload:

```js
{ event: 'contact_form_submit', page_path: '/caminho-da-pagina' }
```

#### Títulos do Formulário por Página (contexto de segmentação)

| Página | Título exibido no formulário |
|---|---|
| Home | `VAMOS INOVAR JUNTOS?` |
| Desenvolvimento de Produto | `VAMOS DAR FORMA À SUA IDEIA COM ENGENHARIA?` |
| Estudo de Viabilidade | `TOME DECISÕES SEGURAS FALE CONOSCO!` |
| Formulação de Patentes | `VAMOS PROTEGER SUA INVENÇÃO?` |
| Otimização de Processo | `MELHORE SEUS RESULTADOS COM PROCESSOS OTIMIZADOS!` |
| Prototipagem e Validação | `REDUZA RISCOS, VALIDE SEU PROJETO!` |
| Demais páginas | `VAMOS INOVAR JUNTOS?` |

---

### 3.2 Download de E-books

**Localização no código:** `components/sections/ebooks/DownloadModal.tsx` e `components/sections/ebooks/EbookCard.tsx`
**Página:** `/conteudos/ebooks`
**Endpoint da API:** `POST /api/contato` (com campo `ebook_baixado` preenchido)
**Destino dos leads:** Google Sheets separado (`GOOGLE_SHEETS_EBOOKS_URL`)

O download de e-book é um **lead magnet**. O usuário preenche um formulário de captura antes de acessar o arquivo.

#### Fluxo do Download

```
Clique em "Download Gratuito" (EbookCard)
    → Modal de captura abre (DownloadModal)
        → Usuário preenche: Nome + E-mail Corporativo + WhatsApp
            → Submit → POST /api/contato (campo: ebook_baixado = título do ebook)
                → Link do Google Drive abre em nova aba
```

#### Campos do Modal de Captura

| Nome do Campo (HTML) | Tipo | Obrigatório |
|---|---|---|
| `nome` | `input[type="text"]` | Sim |
| `email` | `input[type="email"]` | Sim |
| `telefone` | `input[type="tel"]` | Sim |
| `ebook_baixado` | `input[type="hidden"]` | Sim (preenchido automaticamente) |

#### Botões

| Texto do Botão | Ação |
|---|---|
| `Download Gratuito` | Abre o modal de captura |
| `Acessar Material Agora` | Envia o formulário e libera o e-book |

#### Catálogo de E-books Disponíveis

| # | Título do E-book | Tamanho |
|---|---|---|
| 1 | Gestão de Projetos | 3,4 MB |
| 2 | 3 Passos para Desenvolver um Produto | 10,2 MB |
| 3 | Exclusividade que gera Retorno | 7,7 MB |
| 4 | O Poder da Gestão | 27,9 MB |
| 5 | Você tem uma Ideia de Produto? | 9,3 MB |
| 6 | Metodologia Six Sigma | 2,0 MB |

> O campo oculto `ebook_baixado` registra qual e-book foi baixado. Use este campo para segmentar leads no Google Sheets ou em automações de e-mail (ex.: fluxo diferente para quem baixou "Patentes" vs. "Six Sigma").

---

### 3.3 Cliques em WhatsApp

O WhatsApp é o canal de conversão direta mais imediato do site.

#### Botão Flutuante (aparece em todas as páginas)

**Localização no código:** `components/sections/shared/WhatsAppButton.tsx`

| Atributo | Valor |
|---|---|
| **Tipo** | Botão fixo (fixed), canto inferior direito |
| **Número** | `+55 41 98728-8213` |
| **Link completo** | `https://wa.me/554187288213?text=Olá, gostaria de saber mais sobre a Cromo Consultoria!` |
| **Abre em** | Nova aba (`target="_blank"`) |

#### Link de WhatsApp no Rodapé (Footer)

**Localização no código:** `components/layout/Footer.tsx`

| Atributo | Valor |
|---|---|
| **Texto/Label** | `WhatsApp` |
| **Link** | `https://wa.me/554187288213` |
| **Posição** | Seção de redes sociais no rodapé |

> **Como rastrear no GTM:** Trigger do tipo **Click — Just Links** com condição `Click URL contains wa.me`. Essa configuração captura cliques nos dois pontos acima com um único trigger.

---

### 3.4 Botões de CTA Principais

Botões que direcionam o usuário em direção a uma conversão.

#### Home (`/`)

| Texto do Botão | Destino |
|---|---|
| `Solicitar Orçamento` | `#contato` (scroll para o formulário) |
| `Saber mais` (×4) | `/servicos` |
| `Conheça Nossa História` | `/sobre` |
| `Acessar Portfólio Completo` | `/portfolio` |
| `Leia Mais` | `/conteudos/blog/[slug]` |
| `Ver todos os artigos` | `/conteudos/blog` |

#### Navbar (aparece em todas as páginas)

**Localização no código:** `components/layout/Navbar.tsx`

| Texto do Botão | Destino | Dispositivo |
|---|---|---|
| `Contato` | `#contato` | Desktop |
| `Fale Conosco` | `#contato` | Mobile |

#### Página de Serviços (`/servicos`)

| Texto do Botão | Destino | Quantidade |
|---|---|---|
| `Ver detalhes` | `/servicos/[slug]` | 5 botões (um por serviço) |

#### Página de Portfólio (`/portfolio`)

| Texto do Botão | Ação |
|---|---|
| `Quero Iniciar um Projeto` | Scroll suave para `#contato` |

---

## 4. IDs de Elementos HTML para Tracking

Referência de todos os `id=` relevantes para configurar triggers no GTM.

### IDs de Seções (Scroll / Visibility Tracking)

| `id` HTML | Seção | Ocorre em |
|---|---|---|
| `contato` | Formulário de Contato | Todas as páginas |
| `sobre` | Seção Sobre Nós | Home |
| `servicos` | Seção de Serviços | Home |
| `cases` | Seção de Portfólio/Cases | Home |

### IDs dos Campos do Formulário de Contato

| `id` HTML | Campo | Tipo |
|---|---|---|
| `contact-name` | Nome completo | `input[type="text"]` |
| `contact-phone` | Telefone / WhatsApp | `input[type="tel"]` |
| `contact-email` | E-mail | `input[type="email"]` |
| `contact-message` | Mensagem | `textarea` |

### Seletores CSS para Triggers no GTM

```css
/* Qualquer link de WhatsApp (botão flutuante + rodapé) */
a[href*="wa.me"]

/* Botão de download de e-book (abre o modal) */
button:contains("Download Gratuito")

/* Botão de envio do modal de e-book */
button:contains("Acessar Material Agora")

/* CTA principal da Hero */
a[href="#contato"]:contains("Solicitar Orçamento")
```

---

## 5. Fluxo Técnico das Submissões de Formulário

### Formulário de Contato

```
Usuário preenche o formulário (#contato)
    → Clica em "Enviar Mensagem"
        → Validação client-side (campos obrigatórios, formato de telefone)
            → POST /api/contato
                → Dados enviados para Google Sheets (GOOGLE_SHEETS_URL)
                → Dados enviados para Formspree (FORMSPREE_URL) [integração legada]
                    → Resposta: { success: true, message: "Enviado com sucesso!" }
                        → Feedback visual para o usuário
```

### Formulário de E-book (Modal)

```
Usuário clica em "Download Gratuito" (EbookCard)
    → Modal abre via React Portal
        → Usuário preenche: Nome + E-mail + WhatsApp
            → Clica em "Acessar Material Agora"
                → POST /api/contato (campo: ebook_baixado = "título do ebook")
                    → API detecta campo "ebook_baixado"
                        → Rota para Google Sheets de E-books (GOOGLE_SHEETS_EBOOKS_URL)
                        → Link do Google Drive abre em nova aba
                    → Modal fecha
```

### Variáveis de Ambiente Relevantes (`.env`)

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_GTM_ID` | ID do container do Google Tag Manager |
| `GOOGLE_SHEETS_URL` | Webhook do Google Sheets — leads do formulário de contato |
| `GOOGLE_SHEETS_EBOOKS_URL` | Webhook do Google Sheets — leads de e-books (planilha separada) |
| `FORMSPREE_URL` | Endpoint Formspree (integração legada) |

---

## 6. O que foi implementado no GTM

### Tags instaladas e publicadas (desenvolvimento concluído)

#### 1. Banner de Cookies / LGPD

Janela de consentimento exibida na primeira visita do usuário, com as opções **Aceitar** e **Recusar**.

- Enquanto o visitante não aceita: nenhuma ferramenta de marketing é ativada
- Após o aceite: GA4, LinkedIn e Conversion Linker são liberados
- Após a recusa: apenas a medição anônima do GA4 permanece ativa (sem cookies)
- A escolha é lembrada nas próximas visitas

#### 2. Google Analytics 4 (GA4)

Mede o comportamento dos visitantes no site: número de visitas, páginas mais acessadas, origem do tráfego, tempo na página.

- Opera em **Modo de Consentimento Avançado**: mesmo sem aceite, envia uma contagem anônima (sem cookies); após o aceite, a medição fica completa

#### 3. LinkedIn Insight Tag

Etiqueta oficial do LinkedIn instalada via GTM.

- Ativada somente após o aceite de cookies
- Permite criar campanhas direcionadas a quem visitou o site e medir os resultados (conversões) no LinkedIn Ads

#### 4. Conversion Linker (Google Ads)

Liga os cliques nos anúncios do Google às visitas e ações no site.

- Ativado somente após o aceite de cookies
- Sem esta tag, o Google Ads não consegue atribuir corretamente os resultados às campanhas

---

### Triggers disponíveis no GTM para configuração das conversões

Os triggers abaixo estão prontos para serem associados às tags de conversão pelo gestor de tráfego:

| # | Nome sugerido | Tipo | Condição |
|---|---|---|---|
| T1 | Envio Formulário de Contato | Custom Event | `event = contact_form_submit` |
| T2 | Download de E-book | Custom Event | `event = ebook_form_submit` |
| T3 | Clique em WhatsApp | Click — Just Links | `Click URL contains wa.me` |
| T4 | Clique em "Solicitar Orçamento" | Click — All Elements | `Click Text = Solicitar Orçamento` |
| T5 | Visualização da Seção Contato | Element Visibility | CSS Selector `#contato`, threshold 50% |

> T1 e T2 já estão implementados no código — os eventos são disparados automaticamente no `dataLayer` após a confirmação de sucesso de cada formulário.

---

### Próxima fase — responsabilidade do gestor de tráfego

| Ação | Plataforma |
|---|---|
| Definir quais ações contam como "conversão" (formulário, WhatsApp, e-book) | Google Ads / LinkedIn |
| Configurar as conversões dentro do Google Ads | Google Ads |
| Limpar ações de conversão duplicadas e inativas | Google Ads |
| Importar eventos do GA4 como conversões no Google Ads | GA4 + Google Ads |
| Criar conversões de campanha no LinkedIn | LinkedIn Ads |
| Criar audiências de remarketing (visitantes do site) | Google Ads / LinkedIn |

---

## 7. Tabela Rápida de Referência

Resumo executivo para consulta durante a configuração de campanhas.

| # | Nome da Conversão | Tipo | Como detectar (GTM) | Página(s) |
|---|---|---|---|---|
| C1 | Envio Formulário de Contato | Lead principal | Custom Event `contact_form_submit` | Todas as páginas |
| C2 | Download de E-book | Lead (topo de funil) | Custom Event `ebook_form_submit` | `/conteudos/ebooks` |
| C3 | Clique em WhatsApp (Botão Flutuante) | Lead direto | Click URL contém `wa.me` | Todas as páginas |
| C4 | Clique em WhatsApp (Rodapé) | Lead direto | Click URL contém `wa.me` | Todas as páginas |
| C5 | Clique em "Solicitar Orçamento" | Micro-conversão | Click Text = "Solicitar Orçamento" | Home |
| C6 | Clique em "Fale Conosco" (Navbar Mobile) | Micro-conversão | Click Text = "Fale Conosco" | Todas as páginas |
| C7 | Clique em "Quero Iniciar um Projeto" | Micro-conversão | Click Text = "Quero Iniciar um Projeto" | `/portfolio` |
| C8 | Visualização da Seção de Contato | Micro-conversão | Element Visibility `#contato` | Todas as páginas |
| C9 | Clique em "Download Gratuito" (abre modal) | Micro-conversão | Click Text = "Download Gratuito" | `/conteudos/ebooks` |

---

## Status das pendências técnicas

Todas as pendências de desenvolvimento foram resolvidas. O site está pronto para a configuração das campanhas.

| # | Item | Status |
|---|---|---|
| P1 | `dataLayer.push` no formulário de contato (`contact_form_submit`) | ✅ Implementado |
| P2 | `dataLayer.push` no modal de e-book (`ebook_form_submit`) | ✅ Implementado |
| P3 | Bug no link da Navbar Desktop (`#contact` → `#contato`) | ✅ Corrigido |

---

*Documento gerado em: 2026-06-05*
*Projeto: site-CromoConsultoria*
*Base técnica: Next.js 14 (App Router) + TypeScript*
