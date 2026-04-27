window.VORTHEON_TRACKING_IDS = {
  ga4: "",
  gtm: "",
  clarity: "",
  hotjar: "",
  posthog: "",
  metaPixel: "",
  linkedinPartnerId: ""
};

window.dataLayer = window.dataLayer || [];

function loadScript(src) {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
  return script;
}

function bootTracking() {
  const ids = window.VORTHEON_TRACKING_IDS;

  if (ids.gtm) {
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${ids.gtm}`);
  }

  if (ids.ga4) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${ids.ga4}`);
    window.gtag = function gtag(){ window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", ids.ga4);
  }

  if (ids.clarity) {
    window.clarity = window.clarity || function clarity(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
    loadScript(`https://www.clarity.ms/tag/${ids.clarity}`);
  }

  if (ids.hotjar) {
    window.hj = window.hj || function hj(){ (window.hj.q = window.hj.q || []).push(arguments); };
    window._hjSettings = { hjid: ids.hotjar, hjsv: 6 };
    loadScript(`https://static.hotjar.com/c/hotjar-${ids.hotjar}.js?sv=6`);
  }

  if (ids.posthog) {
    loadScript("https://app.posthog.com/static/array.js");
    window.posthog = window.posthog || [];
    window.posthog.init = window.posthog.init || function init(){ window.posthog.push(["init"].concat(Array.from(arguments))); };
    window.posthog.init(ids.posthog, { api_host: "https://app.posthog.com" });
  }

  if (ids.metaPixel) {
    window.fbq = window.fbq || function fbq(){ (window.fbq.q = window.fbq.q || []).push(arguments); };
    window.fbq("init", ids.metaPixel);
    window.fbq("track", "PageView");
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
  }

  if (ids.linkedinPartnerId) {
    window._linkedin_partner_id = ids.linkedinPartnerId;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(ids.linkedinPartnerId);
    loadScript("https://snap.licdn.com/li.lms-analytics/insight.min.js");
  }
}

function trackEvent(name, properties = {}) {
  const payload = { event: name, ...properties };
  window.dataLayer.push(payload);

  if (window.gtag) window.gtag("event", name, properties);
  if (window.posthog && window.posthog.capture) window.posthog.capture(name, properties);
  if (window.fbq) window.fbq("trackCustom", name, properties);
  if (window.lintrk) window.lintrk("track", properties);
  if (window.clarity) window.clarity("event", name);
}

function normalizeText(value) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getLinkEvent(link) {
  const href = link.href || "";
  const label = normalizeText(link.textContent || "");

  if (link.dataset.event) return link.dataset.event;
  if (href.startsWith("tel:")) return "phone_click";
  if (href.startsWith("mailto:")) return "email_click";
  if (href.includes("wa.me")) return "whatsapp_click";
  if (label.includes("agendar") || label.includes("analisar minha infraestrutura")) return "primary_cta_click";
  if (label.includes("assessment")) return "cloud_security_assessment_click";
  if (label.includes("avaliar dados")) return "data_infrastructure_audit_click";
  if (label.includes("automacao")) return "infrastructure_automation_review_click";
  if (label.includes("mapear riscos")) return "map_operation_risks_click";
  return "cta_click";
}

function initMenu() {
  const menuButton = document.getElementById("menu-button");
  const navLinks = document.getElementById("nav-links");

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

function initLinkTracking() {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      const eventName = getLinkEvent(link);
      const section = link.closest("section")?.id || "navigation";
      const properties = {
        label: link.textContent.trim(),
        href: link.href,
        section
      };

      trackEvent("cta_click", { ...properties, event_name: eventName });
      if (eventName !== "cta_click") trackEvent(eventName, properties);
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3600);
}

function initLeadForm() {
  const leadForm = document.getElementById("lead-form");
  if (!leadForm) return;

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(leadForm);
    const nome = data.get("nome");
    const empresa = data.get("empresa");
    const problema = data.get("problema");
    const contexto = data.get("contexto") || "Ainda vou detalhar na conversa.";
    const message = [
      "Olá, quero agendar um diagnóstico de infraestrutura com a Vortheon Labs.",
      `Nome: ${nome}`,
      `Empresa: ${empresa}`,
      `Prioridade principal: ${problema}`,
      `Contexto: ${contexto}`
    ].join("\n");

    showToast("Perfeito. Abrindo a conversa no WhatsApp com os dados preenchidos.");
    trackEvent("primary_cta_click", {
      label: "Analisar minha infraestrutura",
      section: "diagnostico"
    });
    trackEvent("lead_form_submit", {
      problem: problema,
      company: empresa,
      source: "site"
    });
    trackEvent("whatsapp_lead_open", {
      problem: problema,
      source: "lead_form"
    });

    window.open(`https://wa.me/5583991964996?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    leadForm.reset();
  });
}

bootTracking();
initMenu();
initLinkTracking();
initLeadForm();
