/**
 * data.ts - Single source of truth for the business
 */

export const BUSINESS_DETAILS = {
  name: "Fontanero Romero Bernal",
  legalName: "Fontanero Romero Bernal",
  logo: "/hidrasan-logo.png",
  description: "Especialistas en Instalaciones y Reformas de Fontanería en Los Palacios y Villafranca. Proyectos integrales para viviendas, locales comerciales y sustitución de redes de agua.",
  address: {
    street: "C. Rubén Darío, 2, 1º",
    city: "Los Palacios y Villafranca",
    region: "Sevilla",
    postalCode: "41720",
    country: "España",
  },
  contact: {
    phone: "+34652839612",
    phoneDisplay: "652 83 96 12",
    whatsapp: "https://wa.me/34652839612",
    email: "info@fontaneroromerobernal.com",
  },
  openingHours: [
    { day: "Lunes - Viernes", hours: "09:00 - 20:00" },
    { day: "Sábado", hours: "09:00 - 14:00" },
    { day: "Domingo", hours: "Cerrado" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
  coordinates: {
    lat: 37.16014547203055,
    lng: -5.923651388109378,
  },
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.686827713813!2d-5.923651388109378!3d37.16014547203055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd127766d16f4b51%3A0x4918acdca6f381a4!2sFontanero%20Romero%20Bernal!5e0!3m2!1sit!2ses!4v1775119434181!5m2!1sit!2ses",
};

export const SERVICES = [
  {
    slug: "reformas-integrales-fontaneria",
    title: "Reformas Integrales de Fontanería",
    summary: "Diseño y ejecución de redes completas de agua y desagüe para reformas de viviendas y locales en Los Palacios y Villafranca.",
    benefits: ["Planificación técnica detallada", "Materiales de alta durabilidad", "Cumplimiento estricto de plazos"],
    whatToExpect: "Analizamos tu proyecto de reforma, diseñamos la nueva distribución de tomas y desagües, y ejecutamos la instalación con máxima limpieza y coordinación con otros gremios.",
    faqs: [
      { q: "¿Trabajáis con arquitectos o constructoras?", a: "Sí, colaboramos habitualmente con profesionales del sector para asegurar una ejecución técnica impecable." },
      { q: "¿Qué garantía ofrecéis en reformas?", a: "Todas nuestras instalaciones integrales cuentan con garantía profesional y certificado de instalación." }
    ],
    keywords: ["fontanería reformas sevilla", "instalación fontanería vivienda", "fontanero para reformas"],
    category: "Reformas",
    icon: "Hammer"
  },
  {
    slug: "sustitucion-tuberias-bajantes",
    title: "Sustitución de Tuberías y Bajantes",
    summary: "Renovación completa de sistemas de fontanería antiguos por materiales modernos y eficientes en edificios y casas.",
    benefits: ["Eliminación de fugas recurrentes", "Mejora de la presión de agua", "Valorización del inmueble"],
    whatToExpect: "Evaluamos el estado de la red actual, proponemos la mejor solución técnica (multicapa, polietileno, etc.) y realizamos el cambio integral minimizando las molestias.",
    faqs: [
      { q: "¿Es necesario cambiar todas las tuberías?", a: "En viviendas de más de 25 años, la sustitución integral es la única forma de garantizar la tranquilidad a largo plazo." }
    ],
    keywords: ["cambio de tuberías sevilla", "sustitución bajantes", "renovación fontanería"],
    category: "Instalaciones",
    icon: "Droplets"
  },
  {
    slug: "fontaneria-locales-comerciales",
    title: "Fontanería para Locales Comerciales",
    summary: "Instalaciones especializadas para hostelería, clínicas y negocios que requieren sistemas de agua complejos.",
    benefits: ["Adaptación a normativa vigente", "Sistemas de alta capacidad", "Mantenimiento preventivo"],
    whatToExpect: "Instalación de grupos de presión, sistemas de filtrado industrial y redes de desagüe específicas para cada tipo de actividad comercial.",
    faqs: [
      { q: "¿Hacéis instalaciones para restaurantes?", a: "Sí, somos especialistas en redes de fontanería para cocinas industriales y zonas de aseo público." }
    ],
    keywords: ["fontanería locales sevilla", "fontanero para negocios", "instalación fontanería comercial"],
    category: "Empresas",
    icon: "Building2"
  },
  {
    slug: "instalaciones-baños-cocinas",
    title: "Instalaciones de Baños y Cocinas",
    summary: "Montaje completo de sanitarios, grifería técnica y sistemas de evacuación para proyectos de diseño.",
    benefits: ["Acabados de alta gama", "Instalación estanca garantizada", "Asesoramiento técnico"],
    whatToExpect: "Desde la pre-instalación hasta el montaje final de elementos, aseguramos que cada conexión sea perfecta y duradera.",
    faqs: [],
    keywords: ["instalación baño sevilla", "montaje cocina fontanería"],
    category: "Instalaciones",
    icon: "Bath"
  },
  {
    slug: "climatización-eficiente",
    title: "Sistemas de Climatización Eficiente",
    summary: "Instalación de sistemas de aire acondicionado por conductos y calefacción para máximo confort.",
    benefits: ["Eficiencia energética A+++", "Control por zonas", "Instalación estética"],
    whatToExpect: "Estudio de cargas térmicas, diseño de la red de conductos o split y puesta en marcha optimizada.",
    faqs: [],
    keywords: ["aire acondicionado conductos sevilla", "climatización profesional"],
    category: "Climatización",
    icon: "Snowflake"
  },
  {
    slug: "tratamiento-agua-industrial",
    title: "Tratamiento de Agua y Osmosis",
    summary: "Sistemas avanzados de filtración y descalcificación para viviendas completas y empresas.",
    benefits: ["Protección de electrodomésticos", "Agua de máxima pureza", "Reducción de cal"],
    whatToExpect: "Instalación de descalcificadores de alta capacidad y equipos de osmosis inversa de flujo directo.",
    faqs: [],
    keywords: ["descalcificador sevilla", "osmosis profesional"],
    category: "Tratamiento de Agua",
    icon: "Filter"
  }
];

export const REVIEWS = [
  {
    author: "Daniel",
    rating: 5,
    date: "Hace 7 meses",
    text: "Los mejores fontaneros de Los Palacios y Villafranca sin duda, 100% recomendables",
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
    q: "¿Realizáis reformas integrales de fontanería?",
    a: "Sí, estamos especializados en proyectos completos para viviendas y locales comerciales, encargándonos de toda la red de agua y saneamiento."
  },
  {
    q: "¿Cómo solicitó un presupuesto para mi proyecto?",
    a: "Puedes contactarnos para concertar una visita técnica. Evaluamos las necesidades de tu reforma o instalación y te proporcionamos un presupuesto detallado y cerrado."
  },
  {
    q: "¿Trabajáis con otros profesionales de la reforma?",
    a: "Habitualmente coordinamos nuestro trabajo con arquitectos, decoradores y jefes de obra para asegurar que la fontanería se integre perfectamente en el proyecto global."
  },
  {
    q: "¿Qué tipo de materiales utilizáis?",
    a: "Solo trabajamos con materiales de primera calidad y marcas líderes (multicapa, cobre, polietileno reticulado) para garantizar instalaciones que duren décadas."
  }
];

export const SEO_DEFAULTS = {
  titleTemplate: "%s | Fontanero Romero Bernal",
  defaultTitle: "Fontanero Romero Bernal | Instalaciones y Reformas de Fontanería en Los Palacios y Villafranca",
  defaultDescription: "Especialistas en reformas integrales de fontanería, sustitución de tuberías y proyectos para locales comerciales en Los Palacios y Villafranca, Sevilla. Calidad y garantía profesional.",
  baseUrl: "https://ais-pre-k6biwttfqfs6jvi5ucv5nn-129623626105.europe-west2.run.app",
  ogImage: "https://picsum.photos/seed/plumber/1200/630",
};

export const ABOUT_ME = {
  title: "Sobre Nosotros",
  subtitle: "Expertos en instalaciones complejas y reformas de fontanería en Los Palacios y Villafranca",
  description: "En Fontanero Romero Bernal nos alejamos del concepto de 'parche' para centrarnos en soluciones definitivas. Con amplia experiencia en el sector, nos hemos especializado en la ejecución de proyectos de fontanería para reformas integrales y obra nueva, donde la planificación y la precisión técnica son fundamentales.",
  image: "https://picsum.photos/seed/plumber-working/800/1000",
  stats: [
    { label: "Años de Experiencia", value: "15+" },
    { label: "Proyectos Realizados", value: "500+" },
    { label: "Garantía Profesional", value: "100%" },
  ]
};
