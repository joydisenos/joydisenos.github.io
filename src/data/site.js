export const site = {
  name: 'Joseph Vásquez',
  role: 'Desarrollador Web Full-Stack',
  email: 'joydisenos@gmail.com',
  phone: '+58 424 152 8889',
  phoneRaw: '+584241528889',
  whatsapp: 'https://wa.me/584241528889',
  github: 'https://github.com/joydisenos',
  // Completa con tu perfil cuando lo tengas y aparecerá automáticamente en el sitio.
  linkedin: '',
  location: 'Venezuela · 100% remoto',
  cv: '/cv-joseph-vasquez.pdf',
  year: new Date().getFullYear(),
}

export const projects = [
  {
    id: 'qrya',
    name: 'QRya',
    url: 'https://www.qrya.net/',
    image: '/projects/qrya.jpg',
    category: 'saas',
    featured: true,
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    es: {
      tagline: 'Menú QR, pedidos y reservas para comercios',
      description:
        'Plataforma SaaS que permite a bares, restaurantes y hoteles publicar su menú digital, recibir pedidos por WhatsApp, gestionar reservas y recoger reseñas. Incluye panel de administración, planes, plantillas y un menú público optimizado para escanear desde el móvil.',
      role: 'Desarrollo full-stack & UI',
    },
    en: {
      tagline: 'QR menus, orders and bookings for businesses',
      description:
        'A SaaS platform that lets bars, restaurants and hotels publish their digital menu, receive WhatsApp orders, manage bookings and collect reviews. Includes an admin dashboard, plans, templates and a mobile-first public menu built to be scanned on the go.',
      role: 'Full-stack development & UI',
    },
  },
  {
    id: 'bookedkit',
    name: 'BookedKit',
    url: 'https://www.bookedkit.com/',
    image: '/projects/bookedkit.jpg',
    category: 'saas',
    tags: ['Laravel', 'PHP', 'SaaS', 'Responsive'],
    es: {
      tagline: 'Plataforma SaaS de EPK y booking para artistas',
      description:
        'Producto SaaS para artistas y DJs: un constructor de páginas EPK con bloques arrastrables para música, video, shows, press kit y documentos, plantillas listas para publicar, planes de suscripción, dominios personalizados y analíticas. Incluye directorio de oportunidades, guías de la industria y panel de administración.',
      role: 'Desarrollo full-stack & producto',
    },
    en: {
      tagline: 'SaaS platform for artist EPKs and booking',
      description:
        'A SaaS product for artists and DJs: a drag-and-drop EPK page builder with blocks for music, video, shows, press kit and documents, ready-to-publish templates, subscription plans, custom domains and analytics. Includes an opportunities directory, industry guides and an admin dashboard.',
      role: 'Full-stack development & product',
    },
  },
  {
    id: 'qrtools',
    name: 'QRtools',
    url: 'https://qrtools.app/',
    image: '/projects/qrtools.jpg',
    category: 'saas',
    tags: ['Laravel', 'PHP', 'API', 'SaaS'],
    es: {
      tagline: 'Generador de códigos QR dinámicos con analítica',
      description:
        'Producto SaaS internacional para crear códigos QR editables, cambiar su destino sin reimprimir y medir cada escaneo. Dashboard, exportación en PNG, PDF y SVG, planes de suscripción e interfaz multiidioma.',
      role: 'Desarrollo web & producto',
    },
    en: {
      tagline: 'Dynamic QR code generator with scan analytics',
      description:
        'An international SaaS product to create editable QR codes, change their destination without reprinting and measure every scan. Dashboard, PNG, PDF and SVG exports, subscription plans and a multilingual interface.',
      role: 'Web development & product',
    },
  },
  {
    id: 'coffeegeeks',
    name: 'Coffee Geeks Panamá',
    url: 'https://coffeegeekspanama.com/',
    image: '/projects/coffeegeeks.jpg',
    category: 'web',
    tags: ['Next.js', 'React', 'UI', 'Responsive'],
    es: {
      tagline: 'La plataforma del café de especialidad en Panamá',
      description:
        'Sitio y plataforma del concurso Coffee Geeks Panamá: directorio de cafeterías participantes, guía de experiencias, pasaporte digital, academia, blog y tienda. Una identidad visual cálida y editorial, con el café como protagonista.',
      role: 'Desarrollo & UI',
    },
    en: {
      tagline: 'Panama’s specialty coffee platform',
      description:
        'Website and platform for the Coffee Geeks Panama competition: a directory of participating coffee shops, experience guide, digital passport, academy, blog and store. A warm, editorial visual identity with coffee at its center.',
      role: 'Development & UI',
    },
  },
  {
    id: 'losdomos',
    name: 'Los Domos Panamá',
    url: 'https://losdomospanama.com/',
    image: '/projects/losdomos.jpg',
    category: 'web',
    tags: ['Laravel', 'UI', 'Bilingual', 'Responsive'],
    es: {
      tagline: 'Glamping de lujo en las montañas de Panamá',
      description:
        'Sitio bilingüe para cuatro domos privados en Altos de María. Una experiencia visual inmersiva, narrativa por ambientes —agua, fuego y aire— y un recorrido pensado para llevar al visitante a la reserva directa.',
      role: 'Diseño web & desarrollo',
    },
    en: {
      tagline: 'Luxury glamping in the mountains of Panama',
      description:
        'A bilingual website for four private domes in Altos de María. An immersive visual experience, storytelling by elements —water, fire and air— and a journey designed to lead visitors to direct booking.',
      role: 'Web design & development',
    },
  },
  {
    id: 'vw',
    name: 'Volkswagen Camiones y Buses',
    url: 'https://vwcamionesybuses.com.ar/',
    image: '/projects/vw.jpg',
    category: 'corporate',
    tags: ['Laravel', 'PHP', 'Corporate', 'Responsive'],
    es: {
      tagline: 'Sitio corporativo de camiones y buses para Argentina',
      description:
        'Presencia digital de Volkswagen Camiones y Buses Argentina: catálogo de modelos, novedades, red de concesionarios, postventa y contenido institucional. Arquitectura de información clara para una marca con múltiples líneas de producto.',
      role: 'Desarrollo front-end & UI',
    },
    en: {
      tagline: 'Corporate trucks and buses website for Argentina',
      description:
        'Digital presence for Volkswagen Trucks and Buses Argentina: model catalogue, news, dealer network, after-sales and corporate content. A clear information architecture for a brand with multiple product lines.',
      role: 'Front-end development & UI',
    },
  },
  {
    id: 'cobisa',
    name: 'COBISA',
    url: 'https://cobisa.com.pa/',
    image: '/projects/cobisa.jpg',
    category: 'corporate',
    tags: ['Corporate', 'Responsive', 'UI'],
    es: {
      tagline: 'Presencia digital para una constructora panameña',
      description:
        'Sitio corporativo de COBISA: proyectos, servicios, trayectoria y oportunidades de empleo. Una vitrina sobria y directa, enfocada en transmitir confianza y facilitar el contacto comercial.',
      role: 'Diseño & desarrollo web',
    },
    en: {
      tagline: 'Digital presence for a Panamanian construction company',
      description:
        'COBISA’s corporate website: projects, services, track record and career opportunities. A sober, direct showcase focused on building trust and making commercial contact easier.',
      role: 'Web design & development',
    },
  },
]
