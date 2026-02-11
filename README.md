# 📘 Documentação – Estrutura do Projeto Hub de Eventos de Vaquejada

Este documento descreve **toda a estrutura técnica e arquitetural** utilizada no projeto **Hub de Eventos de Vaquejada**, explicando decisões, padrões e como cada parte se conecta. Ele serve como **documentação oficial do repositório**.

---

## 🎯 Objetivo do Projeto

Criar um **hub de eventos de vaquejada** com foco em:

- Hospedagem gratuita (Vercel)
- Performance (SSG / App Router)
- UX real de vaquejada
- Escalabilidade para múltiplos eventos
- Fluxo real de conversão (WhatsApp)

---

## 🧱 Stack Utilizada

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deploy)

---

## 📁 Estrutura de Pastas

```
app/
└─ eventos/
   └─ [slug]/
      └─ page.tsx        # Página de detalhes do evento (Server Component)

components/
└─ ComprarSenhaCTA.tsx  # CTA reutilizável (Client Component)

data/
└─ eventos.ts           # Base de dados estática dos eventos

public/
└─ eventos/
   └─ tropa-de-elite.jpg
   └─ outro-evento.jpg
```

---

## 🧠 Arquitetura Geral

### Separação de responsabilidades

| Camada | Responsabilidade |
|------|------------------|
| `page.tsx` | Renderização do evento, SEO, layout (Server Component) |
| `ComprarSenhaCTA` | Interação do usuário, estado, WhatsApp (Client Component) |
| `eventos.ts` | Fonte de dados desacoplada da UI |

Essa separação segue **o padrão oficial do Next.js App Router**.

---

## 🧩 Página de Evento – `page.tsx`

### Tipo
- **Server Component** (não usa `use client`)

### Responsabilidades
- Resolver `params.slug` com `await`
- Buscar evento correto
- Renderizar:
  - Hero
  - Premiação
  - CTA
  - Cards
  - Sobre
  - Local
  - Contato

### Por que Server Component?

- Melhor SEO
- Melhor performance
- Compatível com SSG
- Menor JS no cliente

---

## 🔁 Roteamento por Slug

Cada evento é acessado por:

```
/eventos/[slug]
```

Exemplo:
```
/eventos/tropa-de-elite
```

O `slug`:
- É único
- Define a URL
- Define a imagem

---

## 🖼️ Padrão de Imagens

As imagens seguem **convenção por slug**:

```
slug: tropa-de-elite
imagem: /public/eventos/tropa-de-elite.jpg
```

Benefícios:
- Zero lógica condicional
- Fácil manutenção
- Ideal para Vercel

---

## 📦 Dados dos Eventos – `data/eventos.ts`

Os eventos são definidos como objetos TypeScript.

### Exemplo de estrutura:

```ts
{
  slug: "tropa-de-elite",
  title: "Tropa de Elite",
  date: "14 de fevereiro",
  location: "Bonfinópolis - GO",
  parkName: "Parque de Vaquejada XYZ",
  prizeMoney: 3000,
  hasTrophy: true,
  totalTickets: 60,
  ticketPrice: 200,
  ticketLimitPerRider: 2,
  hasBar: true,
  description: "Evento tradicional de vaquejada...",
  organizersContacts: ["62999999999"]
}
```

---

## 🎟️ CTA – Comprar Senha (WhatsApp)

### Arquivo
```
components/ComprarSenhaCTA.tsx
```

### Tipo
- **Client Component** (`"use client"`)

### Responsabilidades

- Controlar estado (`useState`)
- Seleção da quantidade de senhas
- Gerar mensagem automática
- Criar link do WhatsApp
- Controlar CTA fixo no mobile

---

## 📲 Mensagem Automática

Mensagem enviada ao WhatsApp:

```
Olá! Tenho interesse em comprar senha para o evento "Tropa de Elite".

📅 Data: 14 de fevereiro
📍 Local: Bonfinópolis - GO
🎟️ Quantidade de senhas: 2

Pode me passar mais informações, por favor?
```

A mensagem é gerada dinamicamente com `encodeURIComponent`.

---

## 📱 CTA Mobile Inteligente

### Comportamento

- Mobile: CTA fixo no rodapé
- Desktop: CTA apenas no Hero
- CTA mobile **desaparece ao chegar no rodapé**

### Técnica utilizada

- `IntersectionObserver`
- Observação do elemento `<footer>`

Isso evita sobreposição e melhora UX.

---

## 🎨 Identidade Visual

### Conceito

**Couro • Terra • Sertão**

### Paleta base

- Fundo: `amber-950`
- Cards: `amber-900 / amber-950`
- Destaques: `amber-500 / amber-600`
- Texto: `amber-100 / amber-200`

Nada de cores frias.
Nada de preto puro dominante.

---

## 🚀 Escalabilidade

Esse modelo suporta:

- Múltiplos eventos
- Listagem futura (`/eventos`)
- Integração com API
- CMS
- Pagamento online
- App mobile

Sem refatoração estrutural.

---

## ✅ Pronto para Produção

Checklist final:

- [x] App Router
- [x] Server + Client Components
- [x] SEO-friendly
- [x] UX real
- [x] CTA funcional
- [x] WhatsApp integrado
- [x] Deploy Vercel

---

## 🏁 Conclusão

Este projeto não é apenas um site, mas uma **base sólida de produto**, pensada para a realidade da vaquejada, com foco em conversão, organização e crescimento.

---

📌 **Autor:** Projeto Hub de Eventos de Vaquejada
📌 **Status:** Pronto para produção

