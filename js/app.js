const BUSINESS_PHONE = "+14695678930";

// n8n booking webhook. Replace this with your real n8n domain.
// Example: https://n8n.yourdomain.com/webhook/eh-bin-booking
// IMPORTANT: Use /webhook/ only after the n8n workflow is active. Use /webhook-test/ only while testing.
// Do NOT put a private NocoDB API token directly in browser JavaScript.
const BOOKING_ENDPOINT = "https://n8n.labscamover9.com/webhook/eh-bin-booking";
const REVIEW_SUBMIT_ENDPOINT = "https://n8n.labscamover9.com/webhook/eh-bin-review";
const REVIEW_FEED_ENDPOINT = "https://n8n.labscamover9.com/webhook/eh-bin-reviews";

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
      ctaTitle: "Save $5 every month", ctaText: "Monthly cleanings are $20 for the first bin, plus $5 for each additional bin. One-time cleanings are $25 for the first bin, plus $5 for each additional bin."
    },
    pricing: {
      title: "Simple, honest pricing", sub: "No hidden fees. First bin price plus $5 for each additional bin.", save: "SAVE $5", perCleaning: "/ first bin", additionalBin: "+$5 each additional bin",
      plans: [
        { name: "One-Time Clean", desc: "Perfect for a one-off scrub.", price: 25, features: ["$25 for the first bin", "+$5 for each additional bin", "High-pressure deep rinse", "Eco-safe sanitizing soap", "Deodorizer finish", "Pay only when you book"], cta: "Book one-time" },
        { name: "Monthly Plan", desc: "Fresh bins every month, $5 cheaper.", price: 20, highlight: true, features: ["$20 for the first bin", "+$5 for each additional bin", "Priority scheduling", "Cancel anytime"], cta: "Start monthly" }
      ],
      addonTitle: "Extra-dirty cleanup:", addonText: "If a bin is extremely dirty or has maggots, we may add $5 after confirming with you first."
    },
    about: {
      title: "Two teens. Cleaner streets.", intro: "E&H Bin Co. started with a simple realization: trash cans are gross, but nobody wants to clean them. So we did something about it. We're Elian and Hernan — two teens with a power washer and a real work ethic.",
      role: "Co-founder", bios: { Elian: "Handles scheduling and makes sure every cleaning is done right.", Hernan: "Runs the equipment and tackles the toughest jobs head-on." },
      promiseTitle: "Our promise", promiseText: "We show up on time, do the job right, and leave your bin smelling fresh. If you're not happy, we'll make it right.", bookCta: "Book your first cleaning"
    },
    contact: {
      title: "Book a cleaning", sub: "Call or text us directly, or fill out the form below. We answer fast during business hours.", hours: "Hours", hoursValue: "Monday – Friday, 7:00 AM – 7:00 PM", phone: "Phone", area: "Service area", areaValue: "Ferris, Wilmer, Hutchins, Lancaster, South Dallas, and nearby areas.",
      formTitle: "Request a cleaning", name: "Your name", contact: "Phone or email", address: "Address", city: "City", otherCity: "Other city / nearby area", serviceType: "Service type", bins: "Number of bins", day: "Preferred day", schedulePattern: "Schedule pattern", time: "Preferred time", estimate: "Estimated price", notes: "Notes", send: "Send booking request", sentText: "Request sent! We'll contact you shortly to confirm.", errorText: "Sorry, the request did not send. Please call or text us instead.", formHelp: "This form sends your booking request securely through our n8n workflow into our booking system.",
      serviceTypeOptions: ["One-Time Cleaning", "Monthly Plan", "Extra Dirty Add-On", "Not Sure Yet"],
      preferredDayOptions: ["Any Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      schedulePatternOptions: ["One-time only", "Every 1st week of the month", "Every 2nd week of the month", "Every 3rd week of the month", "Every 4th week of the month", "Flexible monthly"],
      timeOptions: ["Morning", "Afternoon", "Evening", "Anytime"],
      cityOptions: ["Select your city", "Ferris", "Wilmer", "Hutchins", "Lancaster", "Dallas (South)", "Other / Nearby Area"]
    },
    serviceArea: { badge: "Local service area", title: "Cities we serve", sub: "We currently serve Ferris, Wilmer, Hutchins, Lancaster, South Dallas, and nearby areas.", note: "Not sure if we cover your area? Choose “Other / Nearby Area” in the form and we’ll confirm before scheduling.", cities: ["Ferris", "Wilmer", "Hutchins", "Lancaster", "Dallas (South)", "Nearby Areas"] },
    reviews: { title: "What our customers say", note: "Approved reviews load from our booking system automatically.", leave: "Leave a review", yourName: "Your name", rating: "Rating", comment: "Comment", post: "Submit review", localNote: "Reviews are submitted for approval before appearing publicly." }
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
      ctaTitle: "Ahorra $5 cada mes", ctaText: "El plan mensual cuesta $20 por el primer bote, más $5 por cada bote adicional. La limpieza única cuesta $25 por el primer bote, más $5 por cada bote adicional."
    },
    pricing: { title: "Precios simples y honestos", sub: "Sin tarifas ocultas. Precio del primer bote más $5 por cada bote adicional.", save: "AHORRA $5", perCleaning: "/ primer bote", additionalBin: "+$5 cada bote adicional", plans: [ { name: "Limpieza única", desc: "Perfecto para una limpieza puntual.", price: 25, features: ["$25 por el primer bote", "+$5 por cada bote adicional", "Enjuague profundo", "Jabón ecológico", "Acabado desodorante", "Paga solo cuando reservas"], cta: "Reservar única" }, { name: "Plan mensual", desc: "Botes frescos cada mes, $5 más barato.", price: 20, highlight: true, features: ["$20 por el primer bote", "+$5 por cada bote adicional", "Horario prioritario", "Cancela cuando quieras"], cta: "Empezar mensual" } ], addonTitle: "Extra por limpieza muy sucia:", addonText: "Si un bote está demasiado sucio o tiene gusanos, podemos agregar $5 después de confirmarlo contigo." },
    about: { title: "Dos adolescentes. Calles más limpias.", intro: "E&H Bin Co. nació de algo simple: los botes de basura son asquerosos, pero nadie quiere limpiarlos. Somos Elian y Hernan — dos adolescentes con lavadora a presión y ética de trabajo.", role: "Co-fundador", bios: { Elian: "Maneja el horario y se asegura de que cada limpieza quede bien hecha.", Hernan: "Opera el equipo y enfrenta los trabajos más difíciles." }, promiseTitle: "Nuestra promesa", promiseText: "Llegamos a tiempo, hacemos el trabajo bien y dejamos tu bote oliendo fresco. Si no estás contento, lo arreglamos.", bookCta: "Reserva tu primera limpieza" },
    contact: { title: "Reservar limpieza", sub: "Llámanos o envíanos mensaje, o llena el formulario. Respondemos rápido en horario de atención.", hours: "Horario", hoursValue: "Lunes – Viernes, 7:00 AM – 7:00 PM", phone: "Teléfono", area: "Zona de servicio", areaValue: "Ferris, Wilmer, Hutchins, Lancaster, el sur de Dallas y áreas cercanas.", formTitle: "Solicitar limpieza", name: "Tu nombre", contact: "Teléfono o correo", address: "Dirección", city: "Ciudad", otherCity: "Otra ciudad / área cercana", serviceType: "Tipo de servicio", bins: "Número de botes", day: "Día preferido", schedulePattern: "Frecuencia", time: "Hora preferida", estimate: "Precio estimado", notes: "Notas", send: "Enviar solicitud", sentText: "¡Solicitud enviada! Te contactaremos pronto para confirmar.", errorText: "Lo sentimos, la solicitud no se envió. Por favor llama o manda texto.", formHelp: "Este formulario envía tu solicitud por nuestro flujo de n8n al sistema de reservas.", serviceTypeOptions: ["One-Time Cleaning", "Monthly Plan", "Extra Dirty Add-On", "Not Sure Yet"], preferredDayOptions: ["Any Day", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], schedulePatternOptions: ["One-time only", "Every 1st week of the month", "Every 2nd week of the month", "Every 3rd week of the month", "Every 4th week of the month", "Flexible monthly"], timeOptions: ["Morning", "Afternoon", "Evening", "Anytime"], cityOptions: ["Selecciona tu ciudad", "Ferris", "Wilmer", "Hutchins", "Lancaster", "Dallas (South)", "Other / Nearby Area"] },
    serviceArea: { badge: "Área local", title: "Ciudades que servimos", sub: "Actualmente servimos Ferris, Wilmer, Hutchins, Lancaster, el sur de Dallas y áreas cercanas.", note: "¿No sabes si cubrimos tu área? Elige “Other / Nearby Area” en el formulario y confirmaremos antes de agendar.", cities: ["Ferris", "Wilmer", "Hutchins", "Lancaster", "Dallas (South)", "Áreas cercanas"] },
    reviews: { title: "Lo que dicen nuestros clientes", note: "Las reseñas reales pueden venir de Google Business. Por ahora, puedes recopilar comentarios aquí y aprobarlos manualmente.", leave: "Deja una reseña", yourName: "Tu nombre", rating: "Calificación", comment: "Comentario", post: "Guardar reseña local", localNote: "Nota: esta versión estática guarda reseñas solo en este navegador. Usa Google Business, Airtable, Supabase o un CRM si quieres reseñas públicas." }
  }
};

const seedReviews = [];
let approvedReviewsCache = [];

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
  pricing.innerHTML = dict.pricing.plans.map((plan) => `<article class="price-card ${plan.highlight ? "highlight" : ""}">${plan.highlight ? `<span class="save-pill">${dict.pricing.save}</span>` : ""}<h3>${plan.name}</h3><p>${plan.desc}</p><div class="price"><span class="price-amount">$${plan.price}</span><span class="price-period">${dict.pricing.perCleaning}</span></div><p class="price-extra">${dict.pricing.additionalBin}</p><ul class="clean-list">${plan.features.map(f => `<li>${f}</li>`).join("")}</ul><a href="#contact" class="button ${plan.highlight ? "light" : "primary"}">${plan.cta}</a></article>`).join("");

  const people = document.getElementById("peopleCards");
  people.innerHTML = ["Elian", "Hernan"].map(name => `<article class="card"><div class="avatar">${name[0]}</div><h3>${name}</h3><strong class="primary-text">${dict.about.role}</strong><p>${dict.about.bios[name]}</p></article>`).join("");

  const cityChips = document.getElementById("cityChips");
  if (cityChips && dict.serviceArea) cityChips.innerHTML = dict.serviceArea.cities.map(city => `<span class="city-chip">${escapeHTML(city)}</span>`).join("");

  const citySelect = document.getElementById("citySelect");
  if (citySelect) citySelect.innerHTML = dict.contact.cityOptions.map((o, index) => `<option value="${index === 0 ? "" : escapeHTML(o)}">${escapeHTML(o)}</option>`).join("");

  const serviceTypeSelect = document.getElementById("serviceTypeSelect");
  if (serviceTypeSelect) serviceTypeSelect.innerHTML = dict.contact.serviceTypeOptions.map(o => `<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join("");

  const preferredDaySelect = document.getElementById("preferredDaySelect");
  if (preferredDaySelect) preferredDaySelect.innerHTML = dict.contact.preferredDayOptions.map(o => `<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join("");

  const schedulePatternSelect = document.getElementById("schedulePatternSelect");
  if (schedulePatternSelect) schedulePatternSelect.innerHTML = dict.contact.schedulePatternOptions.map(o => `<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join("");

  const timeSelect = document.getElementById("timeSelect");
  if (timeSelect) timeSelect.innerHTML = dict.contact.timeOptions.map(o => `<option value="${escapeHTML(o)}">${escapeHTML(o)}</option>`).join("");

  renderReviews();
  updateBookingEstimate();
}

function renderReviews(reviews = approvedReviewsCache, state = "ready") {
  const list = document.getElementById("reviewList");
  if (!list) return;
  if (state === "loading") {
    list.innerHTML = `<article class="review-card"><p>${escapeHTML(lang === "es" ? "Cargando reseñas aprobadas…" : "Loading approved reviews…")}</p></article>`;
    return;
  }
  if (!reviews || reviews.length === 0) {
    list.innerHTML = `<article class="review-card"><p>${escapeHTML(lang === "es" ? "Todavía no hay reseñas aprobadas — vuelve pronto." : "No approved reviews yet — check back soon.")}</p></article>`;
    return;
  }
  list.innerHTML = reviews.map(r => {
    const name = r.Name || r.name || "Customer";
    const rating = Math.max(1, Math.min(5, Number(r.Rating || r.rating || 5)));
    const comment = r.Comment || r.comment || "";
    const rawDate = r["Submitted At"] || r.date || r.CreatedAt || "";
    const date = rawDate ? String(rawDate).slice(0, 10) : "";
    return `<article class="review-card"><div class="review-top"><div class="review-author"><div class="review-avatar">${escapeHTML((name || "?")[0].toUpperCase())}</div><div><strong>${escapeHTML(name)}</strong><br><small>${escapeHTML(date)}</small></div></div><div class="stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div></div><p>${escapeHTML(comment)}</p></article>`;
  }).join("");
}

async function loadApprovedReviews() {
  renderReviews([], "loading");
  try {
    const response = await fetch(REVIEW_FEED_ENDPOINT, { method: "GET", cache: "no-store" });
    if (!response.ok) throw new Error(`Review feed failed: ${response.status}`);
    const payload = await response.json();
    approvedReviewsCache = Array.isArray(payload.reviews) ? payload.reviews : [];
    renderReviews(approvedReviewsCache);
  } catch (err) {
    console.warn("Approved reviews could not load", err);
    approvedReviewsCache = [];
    renderReviews([]);
  }
}

async function submitReviewToEndpoint(data) {
  const response = await fetch(REVIEW_SUBMIT_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data)
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Review submit failed: ${response.status} ${detail}`);
  }
  return true;
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

function estimatePrice(serviceType, bins) {
  const count = Math.max(1, Number.parseInt(String(bins || "1"), 10) || 1);
  let base = 25;
  if (serviceType === "Monthly Plan") base = 20;
  if (serviceType === "Not Sure Yet" || serviceType === "Extra Dirty Add-On") return null;
  return base + Math.max(0, count - 1) * 5;
}

function updateBookingEstimate() {
  const box = document.getElementById("bookingEstimate");
  if (!box) return;
  const service = document.getElementById("serviceTypeSelect")?.value || "Not Sure Yet";
  const bins = document.querySelector('[name="bins"]')?.value || "1";
  const estimate = estimatePrice(service, bins);
  if (estimate === null) {
    box.textContent = lang === "es" ? "Te confirmaremos el precio antes de programar." : "We’ll confirm pricing before scheduling.";
    return;
  }
  const extra = Math.max(0, (Number.parseInt(bins, 10) || 1) - 1) * 5;
  box.textContent = lang === "es"
    ? `$${estimate} estimado (${bins} bote${bins === "1" ? "" : "s"}; +$${extra} por adicionales)`
    : `$${estimate} estimated (${bins} bin${bins === "1" ? "" : "s"}; +$${extra} for additional bins)`;
}

function normalizeBookingPayload(formData) {
  const rawBins = String(formData.bins || "1");
  const numberOfBins = Number.parseInt(rawBins, 10) || 1;

  return {
    Name: formData.name || "",
    Phone: formData.contact || "",
    Address: formData.address || "",
    City: formData.city === "Other / Nearby Area" ? (formData.otherCity || "Other / Nearby Area") : (formData.city || ""),
    "Service Type": formData.serviceType || "Not Sure Yet",
    "Number of Bins": numberOfBins,
    "Preferred Day": formData.preferredDay || "Any Day",
    "Schedule Pattern": formData.schedulePattern || "One-time only",
    "Preferred Time": formData.time || "Anytime",
    Notes: formData.notes || "",
    Source: "website",
    Language: lang,
    "Submitted At": new Date().toISOString(),
    "Estimated Price": estimatePrice(formData.serviceType || "Not Sure Yet", numberOfBins)
  };
}
async function submitToEndpoint(data) {
  if (!BOOKING_ENDPOINT || BOOKING_ENDPOINT.includes("YOUR-N8N-DOMAIN")) {
    throw new Error("Booking endpoint is not configured in js/app.js");
  }

  const response = await fetch(BOOKING_ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Booking endpoint failed: ${response.status} ${detail}`);
  }

  return true;
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

  const citySelect = document.getElementById("citySelect");
  const otherCityField = document.getElementById("otherCityField");
  const otherCityInput = document.getElementById("otherCityInput");
  const updateOtherCityVisibility = () => {
    const show = citySelect && citySelect.value === "Other / Nearby Area";
    if (otherCityField) otherCityField.classList.toggle("hidden", !show);
    if (otherCityInput) otherCityInput.required = show;
  };
  if (citySelect) {
    citySelect.addEventListener("change", updateOtherCityVisibility);
    updateOtherCityVisibility();
  }

  document.getElementById("serviceTypeSelect")?.addEventListener("change", updateBookingEstimate);
  document.querySelector('[name="bins"]')?.addEventListener("change", updateBookingEstimate);
  updateBookingEstimate();

  document.getElementById("reviewForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]');
    const status = document.getElementById("reviewStatus");
    const data = Object.fromEntries(new FormData(form).entries());
    const payload = {
      Name: String(data.reviewName || "Customer").slice(0, 60),
      Rating: Number(data.reviewRating || 5),
      Comment: String(data.reviewComment || "").slice(0, 500),
      Source: "website",
      Language: lang,
      "Submitted At": new Date().toISOString()
    };
    if (status) { status.classList.add("hidden"); status.classList.remove("error"); }
    submitButton.disabled = true;
    submitButton.textContent = lang === "es" ? "Enviando..." : "Sending...";
    try {
      await submitReviewToEndpoint(payload);
      form.reset();
      if (status) { status.textContent = lang === "es" ? "¡Gracias! Tu reseña fue enviada y aparecerá después de aprobarse." : "Thanks! Your review was submitted and will appear after approval."; status.classList.remove("hidden"); }
    } catch (err) {
      console.error("Review submit failed", err);
      if (status) { status.textContent = lang === "es" ? "No se pudo enviar la reseña ahora. Intenta de nuevo más tarde." : "Review could not be sent right now. Please try again later."; status.classList.add("error"); status.classList.remove("hidden"); }
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = t().reviews.post;
    }
  });

  loadApprovedReviews();
  window.setInterval(loadApprovedReviews, 5 * 60 * 1000);

  document.getElementById("bookingForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector('button[type="submit"]');
    const statusBox = document.getElementById("bookingSuccess");
    const formData = Object.fromEntries(new FormData(form).entries());
    const payload = normalizeBookingPayload(formData);

    statusBox.classList.add("hidden");
    statusBox.classList.remove("error");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
      await submitToEndpoint(payload);

      const saved = JSON.parse(localStorage.getItem("eh_leads") || "[]");
      saved.unshift(payload);
      localStorage.setItem("eh_leads", JSON.stringify(saved));

      statusBox.textContent = t().contact.sentText;
      statusBox.classList.remove("hidden");
      form.reset();
      updateBookingEstimate();
    } catch (err) {
      console.error("Booking submit failed", err);
      statusBox.textContent = t().contact.errorText;
      statusBox.classList.add("error");
      statusBox.classList.remove("hidden");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = t().contact.send;
    }
  });

  translatePage();
});
