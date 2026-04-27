# Vortheon Labs Landing Page

Landing page estática para posicionar a Vortheon Labs como empresa premium de Cloud Security, AI/Data Infrastructure e Infrastructure Automation.

## Estrutura

```text
/
|-- index.html
|-- assets/
|   |-- css/
|   |   |-- style.css
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
- `primary_cta_click`
- `cloud_security_assessment_click`
- `data_infrastructure_audit_click`
- `infrastructure_automation_review_click`
- `map_operation_risks_click`
- `lead_form_submit`
- `whatsapp_lead_open`

## SEO

O projeto é uma landing page única em `index.html` e inclui `robots.txt`, `sitemap.xml`, canonical URL, Open Graph, Twitter Card, favicon e Schema.org em JSON-LD.

Antes de publicar, confirme se o domínio final é `https://vortheonlabs.com.br/`. Se mudar, atualize `index.html`, `robots.txt` e `sitemap.xml`.

## Deploy

Pode ser publicado como site estático no GitHub Pages, Vercel, Netlify ou qualquer hospedagem que sirva HTML, CSS, JS e SVG.
