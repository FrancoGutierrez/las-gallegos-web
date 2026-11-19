// =====================================================================
// CARTA DE LAS GALLEGOS — ARCHIVO EDITABLE
// =====================================================================
// Edita este archivo para actualizar precios, platos o promociones
// para todos tus clientes.
// - Usa price: null cuando el precio se consulte por WhatsApp.
// - Cambia available: true por available: false para ocultar un producto.
// - Los platos principales incluyen "portions" (Plato entero y Medio plato).
// =====================================================================

window.MENU_CONFIG = {
  brandName: "Las Gallegos",
  subtitle: "Picantería Arequipeña",
  tagline: "Sabor tradicional hecho con cariño",
  whatsappNumbers: [
    { label: "WhatsApp 1", display: "944 524 476", phone: "51944524476" },
    { label: "WhatsApp 2", display: "986 389 514", phone: "51986389514" }
  ],
  socials: {
    instagram: "https://www.instagram.com/lasgallegospicanteria/",
    tiktok: "https://www.tiktok.com/@lasgallegospicanteria",
    facebook: "https://facebook.com/lasgallegospicanteria"
  }
};

window.MENU_PRODUCTS = [
  {
    id: "chicharron",
    name: "Chicharrón solo",
    category: "Platos",
    price: 33,
    portions: [
      { id: "entero", label: "Plato entero", price: 33 },
      { id: "medio", label: "Medio plato", price: 19 }
    ],
    available: true,
    tag: "Favorito de la casa",
    description: "Chicharrón dorado al estilo tradicional arequipeño, crocante y servido generoso.",
    image: "assets/chicharron.jpg"
  },
  {
    id: "mixto",
    name: "Mixto: sencca + chicharrón",
    category: "Platos",
    price: 31,
    portions: [
      { id: "entero", label: "Plato entero", price: 31 },
      { id: "medio", label: "Medio plato", price: 18 }
    ],
    available: true,
    tag: "Especialidad",
    description: "Lo mejor de nuestra cocina: sencca tradicional y chicharrón crocante en un solo plato.",
    image: "assets/mixto.jpg"
  },
  {
    id: "sencca",
    name: "Sencca sola",
    category: "Platos",
    price: 27,
    portions: [
      { id: "entero", label: "Plato entero", price: 27 },
      { id: "medio", label: "Medio plato", price: 16 }
    ],
    available: true,
    tag: "Tradición arequipeña",
    description: "Nuestra sencca preparada con receta tradicional de picantería arequipeña.",
    image: "assets/sencca.jpg"
  },
  {
    id: "pastel",
    name: "Pastel de papa",
    category: "Platos",
    price: null,
    available: true,
    tag: "Clásico arequipeño",
    description: "Horneado al estilo arequipeño, suave por dentro y doradito por fuera.",
    image: "assets/pastel-de-papa.jpg"
  },
  {
    id: "rocoto",
    name: "Rocoto relleno",
    category: "Platos",
    price: null,
    available: true,
    tag: "Clásico arequipeño",
    description: "El ícono de Arequipa, sazonado al punto justo con tradición picantera.",
    image: "assets/rocoto-relleno.jpg"
  },
  {
    id: "sand-chicha",
    name: "Sándwich de chicharrón",
    category: "Sándwiches",
    price: 16,
    available: true,
    tag: "Para llevar",
    description: "Pan crocante relleno con nuestro chicharrón tradicional, ideal para cualquier momento.",
    image: "assets/sandwich-chicharron.jpg"
  },
  {
    id: "sand-sencca",
    name: "Sándwich de sencca",
    category: "Sándwiches",
    price: 13,
    available: true,
    tag: "Para llevar",
    description: "Sándwich de sencca con todo el sabor tradicional de picantería en cada bocado.",
    image: "assets/sandwich-sencca.jpg"
  },
  {
    id: "chicha",
    name: "Chicha de wiñapo",
    category: "Bebidas",
    price: null,
    available: true,
    tag: "Bebida tradicional",
    description: "Refrescante chicha de guiñapo hecha en casa. Consulta presentaciones disponibles.",
    image: "assets/chicha-winapo.jpg"
  }
];

window.MENU_PROMOS = [
  {
    id: "promo-duo-chicharron",
    icon: "🥓",
    name: "Dúo chicharronero",
    detail: "2 platos enteros de chicharrón solo. Precio regular S/ 66.",
    price: 61,
    badge: "Ahorra S/ 5",
    available: true
  },
  {
    id: "promo-duo-mixto",
    icon: "🍲",
    name: "Dúo mixto picantero",
    detail: "2 platos enteros mixtos (sencca + chicharrón). Precio regular S/ 62.",
    price: 57,
    badge: "Ahorra S/ 5",
    available: true
  },
  {
    id: "promo-pareja",
    icon: "❤️",
    name: "Combo pareja arequipeña",
    detail: "1 chicharrón entero + 1 sencca entera. Precio regular S/ 60.",
    price: 55,
    badge: "Ahorra S/ 5",
    available: true
  },
  {
    id: "promo-duo-sand-chicha",
    icon: "🥪",
    name: "Dúo sánguches de chicharrón",
    detail: "2 sándwiches de chicharrón para compartir. Precio regular S/ 32.",
    price: 29,
    badge: "Ahorra S/ 3",
    available: true
  },
  {
    id: "promo-sand-mixto",
    icon: "🥖",
    name: "Combo sánguches clásico",
    detail: "1 sándwich de chicharrón + 1 sándwich de sencca. Precio regular S/ 29.",
    price: 26,
    badge: "Ahorra S/ 3",
    available: true
  },
  {
    id: "promo-familiar",
    icon: "👨‍👩‍👧",
    name: "Mesa familiar (3 platos)",
    detail: "1 chicharrón + 1 mixto + 1 sencca (enteros). Precio regular S/ 91.",
    price: 83,
    badge: "Ahorra S/ 8",
    available: true
  }
];
