const BUSINESS_PHONE = "+14695678930";

// Optional: paste your Formspree/Airtable/CRM webhook URL here later.
// Example Formspree endpoint: https://formspree.io/f/xxxxxxx
// Recommended self-host path: point this to an n8n webhook, Cloudflare Worker, or other small proxy.
// Do NOT put a private NocoDB API token directly in browser JavaScript.
const BOOKING_ENDPOINT = "";

const SITE_CONFIG = {
  nocodbTableName: "EH Bin Leads",
  recommendedBackend: "n8n webhook or small API proxy that writes to NocoDB"
};

const translations = {
  en: {
    nav: { home: "Home", pricing: "Pricing", about: "About", reviews: "Reviews", contact: "Contact" },
    common: { call: "Call", viewPlans: "View plans", language: "Language", darkMode: "Dark", lightMode: "Light", close: "Close" },
    footer: {
      tagline: "Teen-owned trash can cleaning by Elian & Hernan. Power-washed, sanitized, lavender-fresh.",
      hours: "Hours", hoursValue: "Monday – Friday\n7:00 AM – 7:00 PM", quickLinks: "Quick links", pricing: "Pricing", about: "About us", reviews: "Reviews", book: "Book a cleaning", rights: "All rights reserved."
    },
    chooser: { title: "Choose your language", subtitle: "Elige tu idioma" },
    home: {
      badge: "Teen-owned • Eco-friendly", h1a: "Trash cans that", h1b: "smell like nothing", h1c: ".",
      sub: "Power washer, soap, sanitizing rinse, and a lavender-scented disinfectant finish. Your bin will smell better than your kitchen. Starting at just",
      seePricing: "See pricing", hoursShort: "Mon–Fri, 7am–7pm", guarantee: "Satisfaction guaranteed", whyTitle: "Why neighbors love E&H Bin Co.",
      why: [
        { icon: "✨", title: "Deep clean every time", text: "High-pressure rinse, eco-safe soap, deodorizing finish — your bin looks and smells brand new." },
        { icon: "📅", title: "Reliable schedule", text: "Pick a day that works and we handle the rest. Great for monthly route cleaning." },
        { icon: "🐛", title: "Even the gross ones", text: "Maggots? Mystery sludge? We can handle it and confirm the extra-dirty add-on first." }
      ],
      processTitle: "How we make your bin shine", processSub: "Four simple steps. Same routine, every single time.",
      process: [
        { icon: "💦", title: "Power wash", text: "We blast loose grime and food bits out with a high-pressure washer." },
        { icon: "🧼", title: "Soap scrub", text: "Eco-safe soap breaks down grease and stuck-on residue." },
        { icon: "🛡️", title: "Sanitize", text: "A disinfecting rinse helps reduce odor-causing bacteria." },
        { icon: "🌿", title: "Lavender finish", text: "We finish with a lavender scent so your bin smells fresh." }
      ],
      ctaTitle: "Save $5 every month", ctaText: "Sign up for our monthly plan and pay just $20 per cleaning instead of $25. Cancel anytime."
    },
    pricing: {
      title: "Simple, honest pricing", sub: "No hidden fees. Just sparkling bins.", save: "SAVE $5", perCleaning: "/ cleaning",
      plans: [
        { name: "One-Time Clean", desc: "Perfect for a one-off scrub.", price: 25, features: ["High-pressure deep rinse", "Eco-safe sanitizing soap", "Deodorizer finish", "Pay only when you book"], cta: "Book one-time" },
        { name: "Monthly Plan", desc: "Fresh bins every month, $5 cheaper.", price: 20, highlight: true, features: ["Everything in One-Time", "Save $5 per cleaning", "Priority scheduling", "Cancel anytime"], cta: "Start monthly" }
      ],
      addonTitle: "Extra-dirty bin add-on:", addonText: "If your bin is way too dirty or has maggots, we charge $5 extra to handle the mess properly. We'll always confirm before adding it."
    },
    about: {
      title: "Two teens. Cleaner streets.", intro: "E&H Bin Co. started with a simple realization: trash cans are gross, but nobody wants to clean them. So we did something about it. We're Elian and Hernan — two teens with a power washer and a real work ethic.",
      role: "Co-founder", bios: { Elian: "Handles scheduling and makes sure every cleaning is done right.", Hernan: "Runs the equipment and tackles the toughest jobs head-on." },
      promiseTitle: "Our promise", promiseText: "We show up on time, do the job right, and leave your bin smelling fresh. If you're not happy, we'll make it right.", bookCta: "Book your first cleaning"
    },
    contact: {
      title: "Book a cleaning", sub: "Call or text us directly, or fill out the form below. We answer fast during business hours.", hours: "Hours", hoursValue: "Monday – Friday, 7:00 AM – 7:00 PM", phone: "Phone", area: "Service area", areaValue: "Local neighborhoods only — ask if we cover yours.",
      formTitle: "Request a cleaning", name: "Your name", contact: "Phone or email", address: "Address", plan: "Plan", bins: "Number of bins", day: "Preferred day", time: "Preferred time", notes: "Notes", send: "Send request by text", sentText: "Request saved. Send the text message to finish booking.", formHelp: "This opens a prefilled text message. To collect requests automatically, add a Formspree, Airtable, Supabase, or CRM endpoint in js/app.js.",
      planOptions: ["One-time clean — $25", "Monthly plan — $20 / cleaning", "Not sure yet"]
    },
    reviews: { title: "What our customers say", note: "Real customer reviews can be linked from Google Business. Until then, collect feedback here and approve it manually.", leave: "Leave a review", yourName: "Your name", rating: "Rating", comment: "Comment", post: "Save review locally", localNote: "Note: this static version saves reviews in this browser only. Use Google Business, Airtable, Supabase, or a CRM if you want public reviews." }
  },
  es: {
    nav: { home: "Inicio", pricing: "Precios", about: "Nosotros", reviews: "Reseñas", contact: "Contacto" },
    common: { call: "Llamar", viewPlans: "Ver planes", language: "Idioma", darkMode: "Oscuro", lightMode: "Claro", close: "Cerrar" },
    footer: { tagline: "Limpieza de botes de basura por adolescentes Elian y Hernan. Lavado a presión, desinfectado y fresco a lavanda.", hours: "Horario", hoursValue: "Lunes – Viernes\n7:00 AM – 7:00 PM", quickLinks: "Enlaces rápidos", pricing: "Precios", about: "Sobre nosotros", reviews: "Reseñas", book: "Reservar limpieza", rights: "Todos los derechos reservados." },
    chooser: { title: "Elige tu idioma", subtitle: "Choose your language" },
    home: {
      badge: "Negocio juvenil • Ecológico", h1a: "Botes de basura que", h1b: "no huelen a nada", h1c: ".", sub: "Lavadora a presión, jabón, enjuague desinfectante y acabado con aroma a lavanda. Tu bote olerá mejor que tu cocina. Desde solo", seePricing: "Ver precios", hoursShort: "Lun–Vie, 7am–7pm", guarantee: "Satisfacción garantizada", whyTitle: "Por qué nos eligen los vecinos",
      why: [
        { icon: "✨", title: "Limpieza profunda", text: "Enjuague a alta presión, jabón ecológico y acabado desodorante — tu bote se ve y huele como nuevo." },
        { icon: "📅", title: "Horario confiable", text: "Elige un día que funcione y nosotros nos encargamos. Ideal para limpieza mensual." },
        { icon: "🐛", title: "Hasta los más sucios", text: "¿Gusanos? ¿Suciedad misteriosa? Lo podemos manejar y confirmamos el extra primero." }
      ],
      processTitle: "Cómo dejamos tu bote brillante", processSub: "Cuatro pasos simples. La misma rutina, cada vez.",
      process: [
        { icon: "💦", title: "Lavado a presión", text: "Quitamos la suciedad y restos de comida con alta presión." },
        { icon: "🧼", title: "Jabón", text: "El jabón ecológico ayuda a quitar grasa y residuos pegados." },
        { icon: "🛡️", title: "Desinfectar", text: "Un enjuague desinfectante ayuda a reducir malos olores." },
        { icon: "🌿", title: "Lavanda", text: "Terminamos con aroma a lavanda para que huela fresco." }
      ],
      ctaTitle: "Ahorra $5 cada mes", ctaText: "Inscríbete al plan mensual y paga $20 por limpieza en vez de $25. Cancela cuando quieras."
    },
    pricing: { title: "Precios simples y honestos", sub: "Sin tarifas ocultas. Solo botes limpios.", save: "AHORRA $5", perCleaning: "/ limpieza", plans: [ { name: "Limpieza única", desc: "Perfecto para una limpieza puntual.", price: 25, features: ["Enjuague profundo", "Jabón ecológico", "Acabado desodorante", "Paga solo cuando reservas"], cta: "Reservar única" }, { name: "Plan mensual", desc: "Botes frescos cada mes, $5 más barato.", price: 20, highlight: true, features: ["Todo lo de limpieza única", "Ahorra $5 por limpieza", "Horario prioritario", "Cancela cuando quieras"], cta: "Empezar mensual" } ], addonTitle: "Extra por bote muy sucio:", addonText: "Si tu bote está demasiado sucio o tiene gusanos, cobramos $5 extra. Siempre confirmamos antes de agregarlo." },
    about: { title: "Dos adolescentes. Calles más limpias.", intro: "E&H Bin Co. nació de algo simple: los botes de basura son asquerosos, pero nadie quiere limpiarlos. Somos Elian y Hernan — dos adolescentes con lavadora a presión y ética de trabajo.", role: "Co-fundador", bios: { Elian: "Maneja el horario y se asegura de que cada limpieza quede bien hecha.", Hernan: "Opera el equipo y enfrenta los trabajos más difíciles." }, promiseTitle: "Nuestra promesa", promiseText: "Llegamos a tiempo, hacemos el trabajo bien y dejamos tu bote oliendo fresco. Si no estás contento, lo arreglamos.", bookCta: "Reserva tu primera limpieza" },
    contact: { title: "Reservar limpieza", sub: "Llámanos o envíanos mensaje, o llena el formulario. Respondemos rápido en horario de atención.", hours: "Horario", hoursValue: "Lunes – Viernes, 7:00 AM – 7:00 PM", phone: "Teléfono", area: "Zona de servicio", areaValue: "Solo vecindarios locales — pregunta si cubrimos el tuyo.", formTitle: "Solicitar limpieza", name: "Tu nombre", contact: "Teléfono o correo", address: "Dirección", plan: "Plan", bins: "Número de botes", day: "Día preferido", time: "Hora preferida", notes: "Notas", send: "Enviar por texto", sentText: "Solicitud guardada. Envía el mensaje de texto para terminar.", formHelp: "Esto abre un mensaje de texto preparado. Para guardar solicitudes automáticamente, agrega un endpoint de Formspree, Airtable, Supabase o CRM en js/app.js.", planOptions: ["Limpieza única — $25", "Plan mensual — $20 / limpieza", "Aún no sé"] },
    reviews: { title: "Lo que dicen nuestros clientes", note: "Las reseñas reales pueden venir de Google Business. Por ahora, puedes recopilar comentarios aquí y aprobarlos manualmente.", leave: "Deja una reseña", yourName: "Tu nombre", rating: "Calificación", comment: "Comentario", post: "Guardar reseña local", localNote: "Nota: esta versión estática guarda reseñas solo en este navegador. Usa Google Business, Airtable, Supabase o un CRM si quieres reseñas públicas." }
  }
};

const seedReviews = [
  { name: "First customer", rating: 5, comment: "New local business — real reviews can go here once customers submit them.", date: "2026-04-29" }
];

let lang = localStorage.getItem("eh_lang") || "en";
const t = () => translations[lang];

function getPath(obj, path) {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

function translatePage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = getPath(t(), el.dataset.i18n);
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-set-lang]").forEach((btn) => btn.classList.toggle("active", btn.dataset.setLang === lang));
  renderDynamicSections();
  applyTheme(currentTheme());
}

function renderDynamicSections() {
  const dict = t();
  const why = document.getElementById("whyCards");
  why.innerHTML = dict.home.why.map(item => `<article class="card"><div class="icon-box">${item.icon}</div><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");

  const process = document.getElementById("processCards");
  process.innerHTML = dict.home.process.map((item, i) => `<article class="card step-card"><span class="step-num">${i + 1}</span><div class="icon-box">${item.icon}</div><h3>${item.title}</h3><p>${item.text}</p></article>`).join("");

  const pricing = document.getElementById("pricingCards");
  pricing.innerHTML = dict.pricing.plans.map((plan) => `<article class="price-card ${plan.highlight ? "highlight" : ""}">${plan.highlight ? `<span class="save-pill">${dict.pricing.save}</span>` : ""}<h3>${plan.name}</h3><p>${plan.desc}</p><div class="price"><span class="price-amount">$${plan.price}</span><span class="price-period">${dict.pricing.perCleaning}</span></div><ul class="clean-list">${plan.features.map(f => `<li>${f}</li>`).join("")}</ul><a href="#contact" class="button ${plan.highlight ? "light" : "primary"}">${plan.cta}</a></article>`).join("");

  const people = document.getElementById("peopleCards");
  people.innerHTML = ["Elian", "Hernan"].map(name => `<article class="card"><div class="avatar">${name[0]}</div><h3>${name}</h3><strong class="primary-text">${dict.about.role}</strong><p>${dict.about.bios[name]}</p></article>`).join("");

  const planSelect = document.getElementById("planSelect");
  planSelect.innerHTML = dict.contact.planOptions.map(o => `<option>${o}</option>`).join("");

  renderReviews();
}

function renderReviews() {
  const reviews = JSON.parse(localStorage.getItem("eh_reviews") || "null") || seedReviews;
  document.getElementById("reviewList").innerHTML = reviews.map(r => `<article class="review-card"><div class="review-top"><div class="review-author"><div class="review-avatar">${(r.name || "?")[0].toUpperCase()}</div><div><strong>${escapeHTML(r.name)}</strong><br><small>${r.date}</small></div></div><div class="stars">${"★".repeat(Number(r.rating))}${"☆".repeat(5 - Number(r.rating))}</div></div><p>${escapeHTML(r.comment)}</p></article>`).join("");
}

function escapeHTML(str) {
  return String(str).replace(/[&<>'"]/g, tag => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[tag]));
}

function applyTheme(theme) {
  const dark = theme === "dark";
  document.body.classList.toggle("dark", dark);
  const btn = document.getElementById("themeButton");
  if (btn) {
    btn.setAttribute("aria-pressed", String(dark));
    const label = btn.querySelector("span");
    if (label) label.textContent = dark ? t().common.lightMode : t().common.darkMode;
    btn.firstChild.textContent = dark ? "☀️ " : "🌙 ";
  }
}

function currentTheme() {
  return localStorage.getItem("eh_theme") || "light";
}

async function submitToEndpoint(data) {
  if (!BOOKING_ENDPOINT) return false;
  const response = await fetch(BOOKING_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(data)
  });
  return response.ok;
}

function buildBookingMessage(data) {
  return `New E&H Bin Co. cleaning request:%0A%0AName: ${encodeURIComponent(data.name)}%0AContact: ${encodeURIComponent(data.contact)}%0AAddress: ${encodeURIComponent(data.address)}%0APlan: ${encodeURIComponent(data.plan)}%0ABins: ${encodeURIComponent(data.bins)}%0ADay: ${encodeURIComponent(data.day || "Any")}%0ATime: ${encodeURIComponent(data.time || "Any")}%0ANotes: ${encodeURIComponent(data.notes || "None")}`;
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const modal = document.getElementById("languageModal");
  const openLanguageModal = () => { modal.hidden = false; };
  const closeLanguageModal = () => { modal.hidden = true; };
  if (!localStorage.getItem("eh_lang")) openLanguageModal();

  document.getElementById("languageButton").addEventListener("click", openLanguageModal);
  document.getElementById("closeLanguageModal").addEventListener("click", closeLanguageModal);
  modal.addEventListener("click", (event) => { if (event.target === modal) closeLanguageModal(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeLanguageModal(); });

  document.querySelectorAll("[data-choose-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.chooseLang;
      localStorage.setItem("eh_lang", lang);
      closeLanguageModal();
      translatePage();
    });
  });

  document.getElementById("themeButton").addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    localStorage.setItem("eh_theme", next);
    applyTheme(next);
  });
  applyTheme(currentTheme());

  const menuButton = document.getElementById("menuButton");
  const nav = document.getElementById("mainNav");
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", nav.classList.contains("open"));
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav a").forEach(a => a.classList.remove("active"));
      link.classList.add("active");
    });
  });

  document.getElementById("reviewForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const reviews = JSON.parse(localStorage.getItem("eh_reviews") || "null") || seedReviews;
    reviews.unshift({ name: data.reviewName.slice(0, 60), rating: data.reviewRating, comment: data.reviewComment.slice(0, 500), date: new Date().toISOString().slice(0, 10) });
    localStorage.setItem("eh_reviews", JSON.stringify(reviews));
    event.currentTarget.reset();
    renderReviews();
  });

  document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = { ...Object.fromEntries(new FormData(event.currentTarget).entries()), source: "website", language: lang, theme: currentTheme(), createdAt: new Date().toISOString() };
    const saved = JSON.parse(localStorage.getItem("eh_leads") || "[]");
    saved.unshift(data);
    localStorage.setItem("eh_leads", JSON.stringify(saved));

    try { await submitToEndpoint(data); } catch (err) { console.warn("Endpoint submit failed", err); }

    document.getElementById("bookingSuccess").classList.remove("hidden");
    window.location.href = `sms:${BUSINESS_PHONE}?&body=${buildBookingMessage(data)}`;
  });

  translatePage();
});
