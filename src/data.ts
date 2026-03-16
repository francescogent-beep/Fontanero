/**
 * data.ts - Single source of truth for the business
 */

export const BUSINESS_DETAILS = {
  name: "Tu Negocio",
  legalName: "Tu Negocio S.L.",
  logo: "https://picsum.photos/seed/logo/200/100?text=Tu+Logo",
  description: "Servicio Técnico de Reparaciones del Hogar y Fontanería en Tu Ciudad. Especialistas en Lavadoras, Termos, Calentadores y Aire Acondicionado.",
  address: {
    street: "Calle Ejemplo, 123",
    city: "Tu Ciudad",
    region: "Tu Región",
    postalCode: "00000",
    country: "España",
  },
  contact: {
    phone: "+34000000000",
    phoneDisplay: "000 00 00 00",
    whatsapp: "https://wa.me/34000000000",
    email: "info@tunegocio.com",
  },
  openingHours: [
    { day: "Lunes - Viernes", hours: "09:00 - 18:00" },
    { day: "Sábado", hours: "09:00 - 14:00" },
    { day: "Domingo", hours: "Cerrado" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
  coordinates: {
    lat: 40.4168,
    lng: -3.7038,
  },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.273989105!2d-3.7038!3d40.4168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zTWFkcmlk!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses",
};

export const SERVICES = [
  {
    slug: "deteccion-fugas-agua",
    title: "Detección de Fugas de Agua",
    summary: "Localizamos y reparamos fugas de agua invisibles con tecnología avanzada en Tu Ciudad.",
    benefits: ["Ahorro en factura de agua", "Prevención de daños estructurales", "Reparación rápida"],
    whatToExpect: "Realizamos una inspección técnica, localizamos el punto exacto de la fuga sin romper innecesariamente y procedemos a la reparación inmediata.",
    faqs: [
      { q: "¿Cómo sé si tengo una fuga?", a: "Si notas humedad, manchas en paredes o un aumento injustificado en tu factura." },
      { q: "¿Es necesario picar toda la pared?", a: "No, usamos detectores acústicos y térmicos para localizar el punto exacto." }
    ],
    keywords: ["fontanero tu ciudad", "fugas de agua", "reparación tuberías"],
    category: "Fontanería"
  },
  {
    slug: "instalacion-calentadores",
    title: "Instalación de Calentadores y Termos",
    summary: "Instalación y mantenimiento de calentadores de gas y termos eléctricos de todas las marcas.",
    benefits: ["Agua caliente garantizada", "Eficiencia energética", "Instalación certificada"],
    whatToExpect: "Asesoramiento sobre el mejor equipo para tu hogar, instalación profesional cumpliendo normativa y prueba de funcionamiento.",
    faqs: [
      { q: "¿Qué es mejor, gas o eléctrico?", a: "Depende de tu consumo y disponibilidad de gas natural. Te asesoramos en la visita." }
    ],
    keywords: ["calentadores tu ciudad", "termos eléctricos", "instalación gas"],
    category: "Calentadores"
  },
  {
    slug: "reparacion-electrodomesticos",
    title: "Reparación de Electrodomésticos",
    summary: "Servicio técnico para lavadoras, lavavajillas y secadoras en toda la zona de Tu Ciudad.",
    benefits: ["Recambios originales", "Garantía en reparación", "Atención rápida"],
    whatToExpect: "Diagnóstico de la avería, presupuesto sin compromiso y reparación en el mismo día si hay stock de piezas.",
    faqs: [
      { q: "¿Reparáis todas las marcas?", a: "Sí, trabajamos con las principales marcas del mercado." }
    ],
    keywords: ["reparación lavadoras tu ciudad", "servicio técnico electrodomésticos"],
    category: "Electrodomésticos"
  },
  {
    slug: "aire-acondicionado",
    title: "Instalación de Aire Acondicionado",
    summary: "Montaje y carga de gas para sistemas de aire acondicionado split y conductos.",
    benefits: ["Confort térmico", "Bajo consumo", "Silencioso"],
    whatToExpect: "Estudio de frigorías necesarias, instalación de unidades y explicación del manejo del mando.",
    faqs: [
      { q: "¿Cuándo debo cargar el gas?", a: "Solo si hay una fuga. El gas no se gasta, se pierde si hay un poro en el circuito." }
    ],
    keywords: ["aire acondicionado tu ciudad", "climatización"],
    category: "Climatización"
  },
  {
    slug: "reparacion-grifos-cisternas",
    title: "Reparación de Grifos y Cisternas",
    summary: "Solucionamos goteos, cambios de mecanismos de cisterna y grifería nueva.",
    benefits: ["Eliminación de ruidos", "Ahorro de agua", "Estética renovada"],
    whatToExpect: "Cambio de juntas, cartuchos o sustitución completa del elemento si es necesario.",
    faqs: [],
    keywords: ["cambiar grifo tu ciudad", "reparar cisterna"],
    category: "Fontanería"
  },
  {
    slug: "desatascos-urgentes",
    title: "Desatascos Urgentes",
    summary: "Servicio de desatascos en fregaderos, baños y tuberías generales las 24 horas.",
    benefits: ["Disponibilidad 24h", "Sin daños en tuberías", "Limpieza total"],
    whatToExpect: "Uso de maquinaria de presión o espirales mecánicas para eliminar el tapón de forma segura.",
    faqs: [],
    keywords: ["desatascos tu ciudad", "fontanero 24h"],
    category: "Urgencias"
  },
  {
    slug: "osmosis-inversa",
    title: "Sistemas de Osmosis Inversa",
    summary: "Instalación de equipos de filtrado de agua para consumo humano directo del grifo.",
    benefits: ["Agua pura", "Ahorro en botellas", "Mejor sabor"],
    whatToExpect: "Instalación del equipo bajo el fregadero y grifo auxiliar, con prueba de dureza del agua.",
    faqs: [],
    keywords: ["osmosis tu ciudad", "purificación agua"],
    category: "Tratamiento de Agua"
  },
  {
    slug: "reformas-baños",
    title: "Reformas de Baños",
    summary: "Cambio de bañera por plato de ducha y reformas integrales de fontanería en baños.",
    benefits: ["Accesibilidad", "Modernización", "Valorización de vivienda"],
    whatToExpect: "Retirada de sanitarios antiguos, nueva instalación de tuberías y colocación de nuevos elementos.",
    faqs: [],
    keywords: ["reforma baño tu ciudad", "cambio bañera ducha"],
    category: "Reformas"
  },
  {
    slug: "mantenimiento-comunidades",
    title: "Mantenimiento para Comunidades",
    summary: "Servicio preventivo y correctivo para comunidades de vecinos y edificios de oficinas.",
    benefits: ["Atención prioritaria", "Informes técnicos", "Precios especiales"],
    whatToExpect: "Revisión periódica de grupos de presión, bajantes y zonas comunes.",
    faqs: [],
    keywords: ["mantenimiento comunidades tu ciudad"],
    category: "Empresas"
  },
  {
    slug: "instalacion-sanitarios",
    title: "Instalación de Sanitarios",
    summary: "Montaje de inodoros, bidés, lavabos y muebles de baño de diseño.",
    benefits: ["Acabados perfectos", "Sellado estanco", "Funcionalidad"],
    whatToExpect: "Anclaje seguro a suelo o pared y conexión estanca a la red de desagüe.",
    faqs: [],
    keywords: ["instalar inodoro tu ciudad", "muebles baño"],
    category: "Fontanería"
  }
];

export const REVIEWS = [
  {
    author: "Roberto Bustillos",
    rating: 5,
    date: "Hace 2 semanas",
    text: "I’m very impressed with Tu Negocio. They’re very professional and reliable. They installed a reverse osmosis water filter in my apartment on the date and time agreed.",
  },
  {
    author: "Helena BC",
    rating: 5,
    date: "Hace 3 semanas",
    text: "Hace años que conocemos a Miguel, es un gran profesional. Puedes contar con él en cualquier momento, siempre que te surja un problema está dispuesto a acudir.",
  },
  {
    author: "Lorena J",
    rating: 5,
    date: "Hace 2 meses",
    text: "Fontanero en Tu Ciudad eficiente y rápido. Tuve un problema con el calentador y en poco tiempo lo tenía solucionado.",
  },
  {
    author: "Carlos Méndez",
    rating: 5,
    date: "Hace 4 meses",
    text: "Excelente servicio. Vinieron a reparar una fuga de agua en la cocina y fueron muy limpios y profesionales. Recomendados 100%.",
  },
  {
    author: "Ana García",
    rating: 5,
    date: "Hace 5 meses",
    text: "Me instalaron el aire acondicionado en pleno agosto y fueron los únicos que me dieron cita rápida. Muy agradecida.",
  },
  {
    author: "Juan Pérez",
    rating: 5,
    date: "Hace 6 meses",
    text: "Muy buen trato y precio justo. Repararon el termo eléctrico en una mañana. Sin duda volveré a llamarles.",
  },
];

export const GALLERY = [
  "https://picsum.photos/seed/job1/800/600",
  "https://picsum.photos/seed/job2/800/600",
  "https://picsum.photos/seed/job3/800/600",
  "https://picsum.photos/seed/job4/800/600",
  "https://picsum.photos/seed/job5/800/600",
  "https://picsum.photos/seed/job6/800/600",
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Cómo evitar atascos en el fregadero",
    excerpt: "Consejos prácticos para mantener tus tuberías limpias y evitar llamadas de emergencia.",
    date: "2024-02-15",
    slug: "evitar-atascos-fregadero"
  },
  {
    id: 2,
    title: "Mantenimiento de tu termo eléctrico",
    excerpt: "Aprende cuándo es necesario cambiar el ánodo de magnesio para alargar la vida de tu termo.",
    date: "2024-01-20",
    slug: "mantenimiento-termo-electrico"
  }
];

export const GENERAL_FAQS = [
  {
    q: "¿Ofrecéis servicio de urgencias 24 horas?",
    a: "Sí, disponemos de un servicio de atención rápida para urgencias de fontanería y climatización en toda la zona de Tu Ciudad."
  },
  {
    q: "¿Dáis presupuesto previo sin compromiso?",
    a: "Por supuesto. Antes de realizar cualquier trabajo, evaluamos la situación y te proporcionamos un presupuesto cerrado para que no haya sorpresas."
  },
  {
    q: "¿Tienen garantía vuestras reparaciones?",
    a: "Todas nuestras reparaciones cuentan con una garantía profesional de 6 meses, asegurando la máxima tranquilidad para nuestros clientes."
  },
  {
    q: "¿En qué zonas de Tu Ciudad trabajáis?",
    a: "Trabajamos en Tu Ciudad capital y poblaciones cercanas."
  }
];

export const SEO_DEFAULTS = {
  titleTemplate: "%s | Tu Negocio Tu Ciudad",
  defaultTitle: "Tu Negocio | Fontanero y Reformas en Tu Ciudad",
  defaultDescription: "Fontanero urgente en Tu Ciudad. Reparación de calentadores, fugas de agua, aire acondicionado y electrodomésticos. ¡Llámanos ahora!",
  baseUrl: "https://ais-pre-k6biwttfqfs6jvi5ucv5nn-129623626105.europe-west2.run.app",
  ogImage: "https://picsum.photos/seed/plumber/1200/630",
};
