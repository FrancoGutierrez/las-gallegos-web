// =====================================================================
// CARTA DE LAS GALLEGOS — ARCHIVO EDITABLE
// =====================================================================
// Edita este archivo para actualizar precios, platos o promociones
// para todos tus clientes.
// - Usa price: null cuando el precio se consulte por WhatsApp.
// - Cambia available: true por available: false para ocultar un producto.
// =====================================================================

window.MENU_CONFIG = {
  brandName: "Las Gallegos",
  subtitle: "Picantería Arequipeña",
  tagline: "Sabor tradicional hecho con cariño",
  whatsappNumbers: [
    { label: "WhatsApp 1", display: "944 524 476", phone: "51944524476" },
    { label: "WhatsApp 2", display: "986 389 514", phone: "51986389514" }
  ]
};

window.MENU_PRODUCTS = [
  {
    id: "chicharron",
    name: "Plato de chicharrón",
    category: "Platos",
    price: 28,
    available: true,
    tag: "Favorito de la casa",
    description: "Chicharrón dorado al estilo tradicional arequipeño, servido generoso para disfrutar sin apuro.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "mixto",
    name: "Mixto: sencca + chicharrón",
    category: "Platos",
    price: 35,
    available: true,
    tag: "Especialidad",
    description: "Lo mejor de nuestra cocina: sencca tradicional y chicharrón crocante en un solo plato.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sencca",
    name: "Sencca",
    category: "Platos",
    price: null,
    available: true,
    tag: "Tradición arequipeña",
    description: "Nuestra sencca preparada con receta tradicional de picantería.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "pastel",
    name: "Pastel de papa",
    category: "Platos",
    price: null,
    available: true,
    tag: "Clásico arequipeño",
    description: "Horneado al estilo arequipeño, suave por dentro y doradito por fuera.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "rocoto",
    name: "Rocoto relleno",
    category: "Platos",
    price: null,
    available: true,
    tag: "Clásico arequipeño",
    description: "El ícono de Arequipa, sazonado al punto justo con tradición picantera.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sand-chicha",
    name: "Sándwich de chicharrón",
    category: "Sándwiches",
    price: 15,
    available: true,
    tag: "Para llevar",
    description: "Pan crocante relleno con nuestro chicharrón tradicional, ideal para cualquier momento.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "sand-sencca",
    name: "Sándwich de sencca",
    category: "Sándwiches",
    price: 15,
    available: true,
    tag: "Para llevar",
    description: "Sándwich de sencca con todo el sabor tradicional en cada bocado.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chicha",
    name: "Chicha de wiñapo",
    category: "Bebidas",
    price: null,
    available: true,
    tag: "Bebida tradicional",
    description: "Refrescante chicha de guiñapo hecha en casa. Consulta presentaciones disponibles.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80"
  }
];

window.MENU_PROMOS = [
  {
    id: "promo-duo-chicharron",
    icon: "🥓",
    name: "Dúo chicharronero",
    detail: "2 platos de chicharrón. Precio regular S/ 56.",
    price: 52,
    badge: "Ahorra S/ 4",
    available: true
  },
  {
    id: "promo-duo-sanguches",
    icon: "🥪",
    name: "Dúo de sánguches",
    detail: "2 sándwiches a elección (chicharrón o sencca).",
    price: 28,
    badge: "Ahorra S/ 2",
    available: true
  },
  {
    id: "promo-tradicion",
    icon: "🌶️",
    name: "Tradición arequipeña",
    detail: "Rocoto relleno + pastel de papa.",
    price: null,
    badge: "Combo clásico",
    available: true
  },
  {
    id: "promo-mixto-chicha",
    icon: "🍇",
    name: "Mixto + chicha",
    detail: "Un plato mixto acompañado de chicha de wiñapo.",
    price: null,
    badge: "Para compartir",
    available: true
  }
];
