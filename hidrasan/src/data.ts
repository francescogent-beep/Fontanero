/**
 * data.ts - Single source of truth for the business
 */

export const BUSINESS_DETAILS = {
  name: "Hidrasan",
  legalName: "Hidrasan S.L.",
  logo: "/hidrasan-logo.png",
  description: "Servicio Técnico de Reparaciones del Hogar y Fontanería en Murcia. Especialistas en Lavadoras, Termos, Calentadores y Aire Acondicionado.",
  address: {
    street: "Carril Viñas, 36, Bajo",
    city: "Alquerías",
    region: "Murcia",
    postalCode: "30580",
    country: "España",
  },
  contact: {
    phone: "+34658768665",
    phoneDisplay: "658 76 86 65",
    whatsapp: "https://wa.me/34658768665",
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
    lat: 37.9922,
    lng: -1.0205,
  },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.423989105!2d-1.0205!3d37.9922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63821000000000%3A0x0!2zQWxxdWVyw61hcw!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses",
};

export const SERVICES = [
  {
    slug: "deteccion-fugas-agua",
    title: "Detección de Fugas de Agua",
    summary: "Localizamos y reparamos fugas de agua invisibles con tecnología avanzada en Murcia.",
    benefits: ["Ahorro en factura de agua", "Prevención de daños estructurales", "Reparación rápida"],
    whatToExpect: "Realizamos una inspección técnica, localizamos el punto exacto de la fuga sin romper innecesariamente y procedemos a la reparación inmediata.",
    faqs: [
      { q: "¿Cómo sé si tengo una fuga?", a: "Si notas humedad, manchas en paredes o un aumento injustificado en tu factura." },
      { q: "¿Es necesario picar toda la pared?", a: "No, usamos detectores acústicos y térmicos para localizar el punto exacto." }
    ],
    keywords: ["fontanero murcia", "fugas de agua", "reparación tuberías"],
    category: "Fontanería",
    icon: "Droplets"
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
    keywords: ["calentadores murcia", "termos eléctricos", "instalación gas"],
    category: "Calentadores",
    icon: "Flame"
  },
  {
    slug: "reparacion-electrodomesticos",
    title: "Reparación de Electrodomésticos",
    summary: "Servicio técnico para lavadoras, lavavajillas y secadoras en toda la zona de Murcia.",
    benefits: ["Recambios originales", "Garantía en reparación", "Atención rápida"],
    whatToExpect: "Diagnóstico de la avería, presupuesto sin compromiso y reparación en el mismo día si hay stock de piezas.",
    faqs: [
      { q: "¿Reparáis todas las marcas?", a: "Sí, trabajamos con las principales marcas del mercado." }
    ],
    keywords: ["reparación lavadoras murcia", "servicio técnico electrodomésticos"],
    category: "Electrodomésticos",
    icon: "WashingMachine"
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
    keywords: ["aire acondicionado murcia", "climatización"],
    category: "Climatización",
    icon: "Snowflake"
  },
  {
    slug: "reparacion-grifos-cisternas",
    title: "Reparación de Grifos y Cisternas",
    summary: "Solucionamos goteos, cambios de mecanismos de cisterna y grifería nueva.",
    benefits: ["Eliminación de ruidos", "Ahorro de agua", "Estética renovada"],
    whatToExpect: "Cambio de juntas, cartuchos o sustitución completa del elemento si es necesario.",
    faqs: [],
    keywords: ["cambiar grifo murcia", "reparar cisterna"],
    category: "Fontanería",
    icon: "Wrench"
  },
  {
    slug: "desatascos-urgentes",
    title: "Desatascos Urgentes",
    summary: "Servicio de desatascos en fregaderos, baños y tuberías generales las 24 horas.",
    benefits: ["Disponibilidad 24h", "Sin daños en tuberías", "Limpieza total"],
    whatToExpect: "Uso de maquinaria de presión o espirales mecánicas para eliminar el tapón de forma segura.",
    faqs: [],
    keywords: ["desatascos murcia", "fontanero 24h"],
    category: "Urgencias",
    icon: "Zap"
  },
  {
    slug: "osmosis-inversa",
    title: "Sistemas de Osmosis Inversa",
    summary: "Instalación de equipos de filtrado de agua para consumo humano directo del grifo.",
    benefits: ["Agua pura", "Ahorro en botellas", "Mejor sabor"],
    whatToExpect: "Instalación del equipo bajo el fregadero y grifo auxiliar, con prueba de dureza del agua.",
    faqs: [],
    keywords: ["osmosis murcia", "purificación agua"],
    category: "Tratamiento de Agua",
    icon: "Filter"
  },
  {
    slug: "reformas-baños",
    title: "Reformas de Baños",
    summary: "Cambio de bañera por plato de ducha y reformas integrales de fontanería en baños.",
    benefits: ["Accesibilidad", "Modernización", "Valorización de vivienda"],
    whatToExpect: "Retirada de sanitarios antiguos, nueva instalación de tuberías y colocación de nuevos elementos.",
    faqs: [],
    keywords: ["reforma baño murcia", "cambio bañera ducha"],
    category: "Reformas",
    icon: "Hammer"
  },
  {
    slug: "mantenimiento-comunidades",
    title: "Mantenimiento para Comunidades",
    summary: "Servicio preventivo y correctivo para comunidades de vecinos y edificios de oficinas.",
    benefits: ["Atención prioritaria", "Informes técnicos", "Precios especiales"],
    whatToExpect: "Revisión periódica de grupos de presión, bajantes y zonas comunes.",
    faqs: [],
    keywords: ["mantenimiento comunidades murcia"],
    category: "Empresas",
    icon: "Building2"
  },
  {
    slug: "instalacion-sanitarios",
    title: "Instalación de Sanitarios",
    summary: "Montaje de inodoros, bidés, lavabos y muebles de baño de diseño.",
    benefits: ["Acabados perfectos", "Sellado estanco", "Funcionalidad"],
    whatToExpect: "Anclaje seguro a suelo o pared y conexión estanca a la red de desagüe.",
    faqs: [],
    keywords: ["instalar inodoro murcia", "muebles baño"],
    category: "Fontanería",
    icon: "Bath"
  }
];

export const REVIEWS = [
  {
    author: "Daniel",
    rating: 5,
    date: "Hace 7 meses",
    text: "Los mejores fontaneros de Murcia sin duda, 100% recomendables",
  },
  {
    author: "fidel muñoz",
    rating: 5,
    date: "Hace 3 años",
    text: "Muy buenos fontaneros el mejor el rey de la bata … More",
  },
  {
    author: "Rocio Sanchez",
    rating: 5,
    date: "Hace 2 años",
    text: "Muy buena empresa muy recomendable",
  },
  {
    author: "Alvaro Ramos",
    rating: 5,
    date: "Hace 7 años",
    text: "Muy buenos fontaneros",
  },
  {
    author: "Elena Sanchez Juan",
    rating: 5,
    date: "Hace 3 años",
    text: "Positive: … More",
  },
  {
    author: "Carlos Tortosa Nicolas",
    rating: 5,
    date: "Hace 6 años",
    text: "Excelente servicio profesional.",
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
    a: "Sí, disponemos de un servicio de atención rápida para urgencias de fontanería y climatización en toda la zona de Murcia."
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
    q: "¿En qué zonas de Murcia trabajáis?",
    a: "Trabajamos en Alquerías, Murcia capital y poblaciones cercanas."
  }
];

export const SEO_DEFAULTS = {
  titleTemplate: "%s | Tu Negocio Murcia",
  defaultTitle: "Tu Negocio | Fontanero y Reformas en Murcia",
  defaultDescription: "Fontanero urgente en Murcia. Reparación de calentadores, fugas de agua, aire acondicionado y electrodomésticos. ¡Llámanos ahora!",
  baseUrl: "https://ais-pre-k6biwttfqfs6jvi5ucv5nn-129623626105.europe-west2.run.app",
  ogImage: "https://picsum.photos/seed/plumber/1200/630",
};

export const ABOUT_ME = {
  title: "Sobre Mí",
  subtitle: "Más de 15 años de experiencia en fontanería y reparaciones en Murcia",
  description: "Mi nombre es Javi y soy el fundador de Hidrasan. Empecé en este oficio con una maleta de herramientas y una misión clara: ofrecer un servicio de fontanería honesto, rápido y de calidad en mi comunidad. Hoy, Hidrasan es sinónimo de confianza para cientos de vecinos en Murcia.",
  image: "https://picsum.photos/seed/plumber-working/800/1000",
  stats: [
    { label: "Años de Experiencia", value: "15+" },
    { label: "Clientes Satisfechos", value: "2k+" },
    { label: "Servicios Realizados", value: "5k+" },
  ]
};
