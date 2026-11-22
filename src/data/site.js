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
      challenge: 'Bars, restaurants and hotels needed to publish their digital menu and receive WhatsApp orders without depending on an app or a developer for every change.',
      solution: 'A SaaS platform with a public QR menu, admin dashboard, templates, plans, bookings and reviews, optimized to be scanned on a phone.',
      result: 'A QR menu in production that the business can manage itself, with an ordering experience built for mobile.',
      challenge: 'Bares, restaurantes y hoteles necesitaban publicar su menú digital y recibir pedidos por WhatsApp sin depender de una app ni de un desarrollador para cada cambio.',
      solution: 'Plataforma SaaS con menú público por QR, panel de administración, plantillas, planes, reservas y reseñas, optimizada para escanear desde el móvil.',
      result: 'Menú QR en producción y administrable por el propio negocio, con una experiencia de pedido pensada para el teléfono.',
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
      challenge: 'Artists and DJs sent music, dates and press kits through scattered links, and bookers could not find a professional view.',
      solution: 'A block-based EPK page builder with publishable templates, subscription plans, custom domains and an opportunities directory.',
      result: 'Every artist gets a professional page ready to share with bookers, venues and press in minutes.',
      challenge: 'Artistas y DJs enviaban música, fechas y press kit en enlaces dispersos, y los bookers no encontraban una vista profesional.',
      solution: 'Constructor de páginas EPK por bloques, plantillas publicables, planes de suscripción, dominios personalizados y un directorio de oportunidades.',
      result: 'Cada artista tiene una página profesional lista para compartir con bookers, venues y prensa en minutos.',
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
      challenge: 'Printed QR codes stopped working as soon as the destination link changed.',
      solution: 'A SaaS dynamic QR generator with editable destinations, scan analytics, multiple export formats and subscription plans.',
      result: 'Codes that update without reprinting and let you measure every scan from the dashboard.',
      challenge: 'Los códigos QR impresos dejaban de funcionar en cuanto cambiaba el enlace de destino.',
      solution: 'Generador SaaS de QR dinámicos con destino editable, analítica de escaneos, exportación en varios formatos y planes de suscripción.',
      result: 'Códigos que se actualizan sin reimprimir y permiten medir cada escaneo desde el panel.',
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
      challenge: 'The coffee competition needed to bring coffee shops, experiences and content together under one coherent digital identity.',
      solution: 'A bilingual site with a coffee shop directory, experience guide, digital passport, academy, blog and store.',
      result: 'A brand platform that centralizes Panama’s coffee ecosystem and makes it easier to discover and visit coffee shops.',
      challenge: 'La competencia de café necesitaba reunir cafeterías, experiencias y contenido en una sola identidad digital coherente.',
      solution: 'Sitio bilingüe con directorio de cafeterías, guía de experiencias, pasaporte digital, academia, blog y tienda.',
      result: 'Una plataforma de marca que centraliza el ecosistema del café panameño y facilita descubrir y visitar cafeterías.',
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
      challenge: 'A boutique stay in Altos de María needed to convey the experience and turn visits into direct bookings.',
      solution: 'An immersive bilingual site with element-based storytelling, gallery and on-brand booking calls to action.',
      result: 'An owned presence that sells the experience and reduces reliance on third-party platforms.',
      challenge: 'Un alojamiento boutique en Altos de María necesitaba transmitir la experiencia y convertir visitas en reservas directas.',
      solution: 'Sitio inmersivo bilingüe con storytelling por elementos, galería y llamados a reservar alineados a la marca.',
      result: 'Presencia propia que vende la experiencia y reduce la dependencia de plataformas de terceros.',
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
      challenge: 'A brand with a catalogue, dealer network and after-sales needed to organize a large amount of information into a clear website.',
      solution: 'Information architecture by product line, news, dealers, after-sales and contact, with a consistent interface.',
      result: 'An orderly experience for customers and dealers, aligned with the brand identity.',
      challenge: 'Una marca con catálogo, red de concesionarios y postventa necesitaba ordenar mucha información en una web clara.',
      solution: 'Arquitectura de información por líneas de producto, novedades, concesionarios, postventa y contacto, con una interfaz consistente.',
      result: 'Una experiencia ordenada para clientes y concesionarios, alineada a la identidad de la marca.',
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
      challenge: 'A Panamanian construction company needed a sober showcase that conveyed track record and trust.',
      solution: 'A corporate site with projects, services, experience and career opportunities, focused on commercial contact.',
      result: 'A direct channel to present the work and make conversations with clients and candidates easier.',
      challenge: 'Una constructora panameña necesitaba una vitrina sobria que transmitiera trayectoria y confianza.',
      solution: 'Sitio corporativo con proyectos, servicios, trayectoria y oportunidades de empleo, enfocado en el contacto comercial.',
      result: 'Un canal directo para presentar obra y facilitar conversaciones con clientes y candidatos.',
    },
    en: {
      tagline: 'Digital presence for a Panamanian construction company',
      description:
        'COBISA’s corporate website: projects, services, track record and career opportunities. A sober, direct showcase focused on building trust and making commercial contact easier.',
      role: 'Web design & development',
    },
  },
]
