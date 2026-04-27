# Vortheon Labs Landing Page

Landing page estática para posicionar a Vortheon Labs em infraestrutura digital segura, SaaS Engineering, Data Analytics, E-commerce Infrastructure e Web Services.

## Estrutura

```text
/
|-- index.html
|-- cloud-security-empresas.html
|-- desenvolvimento-saas.html
|-- consultoria-analytics.html
|-- infraestrutura-ecommerce.html
|-- assets/
|   |-- css/
|   |   |-- style.css
|   |   `-- page.css
|   |-- js/
|   |   `-- main.js
|   `-- img/
|       |-- favicon.svg
|       `-- og-vortheon.svg
|-- robots.txt
|-- sitemap.xml
`-- README.md
```

## Tracking

Edite `assets/js/main.js` e preencha os IDs em `VORTHEON_TRACKING_IDS`:

```js
window.VORTHEON_TRACKING_IDS = {
  ga4: "",
  gtm: "",
  clarity: "",
  hotjar: "",
  posthog: "",
  metaPixel: "",
  linkedinPartnerId: ""
};
```

Eventos já preparados:

- `whatsapp_click`
- `phone_click`
- `email_click`
- `schedule_diagnostic_click`
- `architecture_request_click`
- `audit_request_click`
- `offer_cloud_security_assessment_click`
- `offer_analytics_audit_click`
- `offer_saas_architecture_review_click`
- `lead_form_submit`
- `whatsapp_lead_open`

## SEO

O projeto inclui `robots.txt`, `sitemap.xml`, canonical URL, Open Graph, Twitter Card, favicon e Schema.org em JSON-LD na home.

Antes de publicar, confirme se o domínio final é `https://vortheonlabs.com.br/`. Se mudar, atualize `index.html`, `robots.txt` e `sitemap.xml`.

## Deploy

Pode ser publicado como site estático no GitHub Pages, Vercel, Netlify ou qualquer hospedagem que sirva HTML, CSS, JS e SVG.
