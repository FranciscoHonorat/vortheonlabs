# AGENTS.md

Leia este arquivo antes de qualquer trabalho neste repositório.

## Contexto

Este projeto é a landing page estática da Vortheon Labs, publicada via GitHub Pages.

A página principal é `index.html`. O projeto não deve virar uma aplicação complexa.

Estrutura esperada:

```text
/
|-- index.html
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- main.js
|   `-- img/
|       |-- favicon.svg
|       `-- og-vortheon.svg
|-- robots.txt
|-- sitemap.xml
|-- README.md
`-- AGENTS.md
```

## Posicionamento

A Vortheon Labs deve parecer uma empresa premium B2B de:

- Cloud Security
- AI/Data Infrastructure
- Infrastructure Automation

A mensagem central é:

> Infraestrutura digital segura, inteligente e automatizada para empresas que precisam escalar.

Comunique claramente que a Vortheon Labs ajuda empresas a proteger, automatizar e escalar sua operação digital.

## Evitar

Não posicionar a empresa como software house genérica.

Evite frases como:

- fazemos sites
- desenvolvemos sistemas
- soluções completas
- tecnologia que resolve
- do software ao hardware
- fazemos de tudo

Não invente:

- clientes
- cases
- depoimentos
- estatísticas
- certificações
- números de resultado

## Áreas Principais

### Cloud Security

Deve parecer a oferta principal.

Pode incluir:

- auditoria de segurança
- hardening de servidores/cloud
- proteção de APIs
- backup e recuperação
- monitoramento de riscos
- preparação para LGPD/compliance

### AI/Data Infrastructure

Pode incluir:

- pipelines de dados
- dashboards executivos
- automações com IA
- copilots internos
- inteligência operacional
- integração entre sistemas

### Infrastructure Automation

Pode incluir:

- deploy automation
- observabilidade
- monitoramento
- backup automation
- integrações
- redução de processos manuais

Serviços como SaaS Engineering, Web Services e E-commerce Infrastructure só devem aparecer como aplicações ou capacidades derivadas, não como pilares principais.

## CTAs

Use CTAs B2B claros e rastreáveis:

- Agendar diagnóstico
- Solicitar assessment
- Analisar minha infraestrutura
- Mapear riscos da operação

Links de WhatsApp devem ter mensagens personalizadas.

Exemplos:

- `Olá, quero solicitar um Cloud Security Assessment para minha empresa.`
- `Olá, quero avaliar minha infraestrutura de dados e IA.`
- `Olá, quero mapear oportunidades de automação na minha infraestrutura.`

## Tracking

Os eventos ficam em `assets/js/main.js`.

Eventos importantes:

- `primary_cta_click`
- `cloud_security_assessment_click`
- `data_infrastructure_audit_click`
- `infrastructure_automation_review_click`
- `whatsapp_click`
- `phone_click`
- `email_click`

Não remova tracking existente sem motivo.

## SEO

Manter atualizados:

- title
- meta description
- keywords
- canonical
- Open Graph
- Twitter Card
- Schema.org JSON-LD
- `robots.txt`
- `sitemap.xml`
- `README.md`

O site é uma landing page única. O `sitemap.xml` deve apontar apenas para a home, a menos que a estratégia mude explicitamente.

## Restrições Técnicas

- Não adicionar frameworks.
- Não adicionar bibliotecas.
- Não migrar para React, Next.js ou qualquer stack nova.
- Manter o projeto 100% estático.
- Preservar responsividade, acessibilidade básica e performance.
- Não alterar telefone, WhatsApp, e-mail ou domínio sem necessidade.
- Não remover a identidade visual atual; apenas refiná-la quando necessário.

## Antes de Finalizar

Sempre verifique:

- A página comunica em até 5 segundos que a Vortheon protege, automatiza e escala infraestrutura digital.
- Cloud Security está forte e visível.
- AI/Data Infrastructure e Infrastructure Automation complementam a proposta.
- Os CTAs estão claros, comerciais e rastreáveis.
- Não há linguagem de software house genérica.
- Não há números, clientes ou claims inventados.
