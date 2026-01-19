export const portfolioData = {
    experience: [
        {
            id: '1',
            title: 'Desarrollador Mobile Senior',
            period: '2020 - Presente',
            description:
                'Desarrollo de aplicaciones móviles nativas y multiplataforma de alto rendimiento.',
            highlights: [
                'Liderazgo en proyectos móviles con Flutter y React Native',
                'Desarrollo nativo con Kotlin y Swift',
                'Implementación de arquitecturas limpias y escalables',
                'Integración con APIs REST y GraphQL',
            ],
        },
        {
            id: '2',
            title: 'Desarrollador Full Stack',
            period: '2019 - 2020',
            description:
                'Desarrollo de soluciones completas frontend y backend para aplicaciones empresariales.',
            highlights: [
                'Desarrollo backend con NestJS, .NET y Spring Boot',
                'Diseño e implementación de APIs RESTful',
                'Gestión de bases de datos relacionales y NoSQL',
                'Implementación de patrones de diseño y mejores prácticas',
            ],
        },
    ],
    skills: {
        mobile: [
            { name: 'Flutter', category: 'Mobile' },
            { name: 'React Native', category: 'Mobile' },
            { name: 'Kotlin', category: 'Mobile' },
            { name: 'Swift', category: 'Mobile' },
            { name: 'Java', category: 'Mobile' },
            { name: 'Ionic', category: 'Mobile' },
        ],
        frontend: [
            { name: 'Angular', category: 'Frontend' },
            { name: 'React', category: 'Frontend' },
            { name: 'TypeScript', category: 'Frontend' },
            { name: 'JavaScript', category: 'Frontend' },
        ],
        backend: [
            { name: 'NestJS', category: 'Backend' },
            { name: '.NET', category: 'Backend' },
            { name: 'Spring Boot', category: 'Backend' },
            { name: 'Node.js', category: 'Backend' },
        ],
        database: [
            { name: 'SQLite', category: 'Database' },
            { name: 'Oracle', category: 'Database' },
            { name: 'SQL Server', category: 'Database' },
            { name: 'PostgreSQL', category: 'Database' },
            { name: 'MySQL', category: 'Database' },
        ],
    },
    projects: [
        {
            id: '1',
            title: 'App de E-commerce Mobile',
            description:
                'Aplicación móvil multiplataforma con Flutter para comercio electrónico. Incluye pasarela de pagos, gestión de inventario y notificaciones push.',
            technologies: ['Flutter', 'NestJS', 'PostgreSQL', 'Firebase'],
            category: 'Mobile',
        },
        {
            id: '2',
            title: 'Sistema de Gestión Empresarial',
            description:
                'Aplicación nativa iOS y Android para gestión empresarial con sincronización offline y reportes en tiempo real.',
            technologies: ['Swift', 'Kotlin', 'Spring Boot', 'Oracle'],
            category: 'Mobile',
        },
        {
            id: '3',
            title: 'Plataforma de Reservas',
            description:
                'Sistema web y móvil para reservas con arquitectura de microservicios y alta disponibilidad.',
            technologies: ['React Native', 'Angular', '.NET', 'SQL Server'],
            category: 'Full Stack',
        },
        {
            id: '4',
            title: 'App de Salud y Fitness',
            description:
                'Aplicación móvil para seguimiento de salud con integración de wearables y análisis de datos.',
            technologies: ['Ionic', 'NestJS', 'PostgreSQL', 'Redis'],
            category: 'Mobile',
        },
    ],
    contact: [
        {
            id: '1',
            icon: '📧',
            label: 'Email',
            value: 'norwinnmw061296@hotmail.com',
            link: 'mailto:norwinnmw061296@hotmail.com',
        },
        {
            id: '2',
            icon: '💼',
            label: 'LinkedIn',
            value: 'linkedin.com/in/norwin-willis',
            link: 'https://www.linkedin.com/in/norwin-willis-b97775122?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        },
        {
            id: '3',
            icon: '🐙',
            label: 'GitHub',
            value: 'github.com/Norwin061296',
            link: 'https://github.com/Norwin061296',
        },
        {
            id: '4',
            icon: '📱',
            label: 'WhatsApp',
            value: '+505 87297781',
            link: 'https://wa.me/50587297781',
        },
    ],
    education: [
        {
            id: '1',
            degree: 'Ingeniería en Sistemas',
            institution: 'Universidad',
            period: 'Año de graduación',
            description: 'Título universitario en Ingeniería en Sistemas',
            document: '/documents/Documentos para aplicar a desarrollador mobile/Titulo Universitario.pdf',
        },
    ],
    certifications: [
        {
            id: '1',
            title: 'Curso Flutter Avanzado',
            issuer: 'Plataforma de Certificación',
            date: '2024',
            description: 'Certificación en desarrollo avanzado con Flutter',
            document: '/documents/Documentos para aplicar a desarrollador mobile/certificados/Curso Flutter Avanzado.pdf',
            icon: '🎓',
        },
        {
            id: '2',
            title: 'Certificado de Curso',
            issuer: 'Institución Educativa',
            date: '2024',
            description: 'Certificación profesional adicional',
            document: '/documents/Documentos para aplicar a desarrollador mobile/certificados/Certificado Curso.pdf',
            icon: '🏆',
        },
    ],
};
