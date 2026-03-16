export type Language = 'pt' | 'en';

export const translations = {
    pt: {
        nav: {
            home: 'Início',
            about: 'Sobre nós',
            services: 'Serviços',
            help: 'Atendimento e Ajuda',

            infrastructure: 'Infraestrutura & Cloud',
            communication: 'Comunicação',
            security: 'Segurança & Continuidade',
            management: 'Gestão de TI',

            hosting: 'Hospedagem',
            hostingDesc: 'Servidores em datacenter de alta disponibilidade',

            vps: 'Servidor VPS',
            vpsDesc: 'Infraestrutura escalável Linux e Windows',

            email: 'Email Profissional',
            emailDesc: 'Emails corporativos seguros e confiáveis',

            backup: 'Backup Corporativo',
            backupDesc: 'Proteja seus dados contra perdas e falhas',

            audit: 'Auditoria de TI',
            auditDesc: 'Avaliação completa da sua infraestrutura',

            support: 'Suporte Técnico',
            supportDesc: 'Suporte especializado para sua empresa',

            essential: 'Essencial',
            login: 'Entrar',
        },
        home: {
            heroTitle: 'Tecnologia que impulsiona o seu negócio',
            heroSubtitle:
                'Soluções em nuvem, suporte 24/7 e infraestrutura de alta performance para sua empresa crescer com segurança.',
            heroCta: 'Conheça nossos serviços',
            heroCtaSecondary: 'Fale com um especialista',
            servicesTitle: 'Nossos Serviços',
            servicesSubtitle:
                'Soluções completas de TI baseadas em nuvem, rápidas, econômicas e interativas.',
            whyTitle: 'Por que a Byotec?',
            whySubtitle:
                'Resultados que fazem a diferença no seu ambiente de TI.',
            sla: 'SLA 99,98%',
            slaDesc: 'Disponibilidade garantida para o seu negócio não parar.',
            support247: 'Suporte 24/7/365',
            support247Desc:
                'Equipe especializada disponível a qualquer hora, qualquer dia.',
            fastActivation: 'Ativação Express',
            fastActivationDesc:
                'Implantação rápida para você começar a usar imediatamente.',
            partnersTitle: 'Empresas que confiam na Byotec',
        },
        about: {
            title: 'Quem Somos',
            subtitle: 'Conheça a história e os valores que movem a Byotec.',
            heroTitle: 'Transformando ambientes de TI desde 2010',
            heroText:
                'A Byotec está apta a projetar e implantar a rede fornecendo documentação normativa e garantida. Com uma equipe em constante aperfeiçoamento operacional e tecnológico, a Byotec se coloca no mercado como destaque em projetar e executar estruturas de rede, além de know how para uma assistência técnica eficiente.',
            missionTitle: 'Missão',
            missionText:
                'Oferecer soluções de TI confiáveis e inovadoras que impulsionam o crescimento dos nossos clientes.',
            visionTitle: 'Visão',
            visionText:
                'Ser referência nacional em gestão de infraestrutura de TI, reconhecida pela excelência e inovação.',
            valuesTitle: 'Valores',
            valuesText:
                'Comprometimento, transparência, inovação contínua e foco no resultado do cliente.',
            differentialsTitle: 'Nossos Diferenciais',
            diff1Title: 'Equipe Certificada',
            diff1Text:
                'Profissionais com certificações Microsoft, AWS, Google Cloud e mais.',
            diff2Title: 'Infraestrutura Tier III',
            diff2Text:
                'Datacenter no maior e melhor centro de dados do Brasil.',
            diff3Title: 'Atendimento Personalizado',
            diff3Text:
                'Cada cliente é único. Soluções sob medida para cada necessidade.',
            diff4Title: 'Monitoramento Proativo',
            diff4Text:
                'Identificamos e resolvemos problemas antes que impactem seu negócio.',
        },
        services: {
            title: 'Nossos Serviços',
            subtitle:
                'Todos os nossos serviços são baseados em nuvem, rápidos, de fácil implantação, econômicos e interativos.',
            cloudTitle: 'Cloud & Hospedagem',
            cloudDesc:
                'Servidores Windows, Linux e híbridos. VPS com a melhor infraestrutura e suporte do mercado.',
            emailTitle: 'E-mail & Colaboração',
            emailDesc:
                'Do tamanho da sua necessidade. Exchange, Google Workspace, Professional e muito mais.',
            backupTitle: 'Backup & Segurança',
            backupDesc:
                'O backup mais rápido e confiável do mercado. Auditoria e proteção de dados.',
            supportTitle: 'Suporte & Infraestrutura',
            supportDesc:
                'Suporte 24/7/365 para todos os colaboradores. Projetos de rede e domínios.',
            learnMore: 'Saiba mais',
            ctaTitle: 'Pronto para transformar sua TI?',
            ctaText:
                'Entre em contato e descubra como podemos ajudar sua empresa.',
            ctaButton: 'Fale Conosco',
        },
        serviceCloud: {
            title: 'Cloud & Hospedagem',
            subtitle:
                'Nossos servidores estão no maior e melhor DataCenter do Brasil e gerenciado pelo nosso DreamTeam.',
            heroText:
                'Infraestrutura em nuvem de alta performance com servidores Windows, Linux e híbridos. Nossos serviços de VPS contam com a melhor infraestrutura e suporte do mercado.',
            feature1Title: 'Servidores Dedicados',
            feature1Text:
                'Servidores Windows e Linux com recursos exclusivos e performance garantida.',
            feature2Title: 'VPS Cloud',
            feature2Text:
                'Máquinas virtuais escaláveis com SSD NVMe e uptime de 99,98%.',
            feature3Title: 'Hospedagem Web',
            feature3Text:
                'Hospedagem compartilhada e dedicada com SSL, backups e painel de controle.',
            feature4Title: 'Ambiente Híbrido',
            feature4Text:
                'Integração entre nuvem pública e privada para máxima flexibilidade.',
        },
        serviceEmail: {
            title: 'E-mail & Colaboração',
            subtitle:
                'Do tamanho da sua necessidade, com a disponibilidade que você precisa.',
            heroText:
                'Soluções de e-mail corporativo que se adaptam ao tamanho da sua empresa. Exchange, Google Workspace, e-mail profissional e muito mais.',
            feature1Title: 'Microsoft Exchange',
            feature1Text:
                'E-mail corporativo com calendário compartilhado, contatos e tarefas.',
            feature2Title: 'Google Workspace',
            feature2Text:
                'Gmail, Drive, Meet e todas as ferramentas Google para sua empresa.',
            feature3Title: 'E-mail Profissional',
            feature3Text:
                'Caixas de e-mail com seu domínio, antispam e antivírus integrados.',
            feature4Title: 'Migração Segura',
            feature4Text:
                'Migração de e-mails sem perda de dados e sem downtime.',
        },
        serviceBackup: {
            title: 'Backup & Segurança',
            subtitle: 'Este é um recurso indispensável para todas as empresas!',
            heroText:
                'Nosso backup é o mais rápido e confiável do mercado. Proteção completa dos seus dados com auditoria e compliance.',
            feature1Title: 'Backup em Nuvem',
            feature1Text:
                'Cópias automáticas e criptografadas dos seus dados na nuvem.',
            feature2Title: 'Disaster Recovery',
            feature2Text:
                'Planos de recuperação de desastres para manter seu negócio ativo.',
            feature3Title: 'Auditoria de TI',
            feature3Text:
                'Não está contente com sua equipe local? Que tal uma averiguação completa.',
            feature4Title: 'Proteção de Dados',
            feature4Text:
                'Compliance com LGPD e melhores práticas de segurança da informação.',
        },
        serviceSupport: {
            title: 'Suporte & Infraestrutura',
            subtitle:
                'O melhor suporte para todos os colaboradores da sua empresa 24/7/365.',
            heroText:
                'Se seu foco é resultado, você precisa de um serviço confiável de gestão do seu ambiente de tecnologia. Na era da transformação digital, é essencial que suas infraestruturas estejam sempre disponíveis.',
            feature1Title: 'Suporte 24/7',
            feature1Text:
                'Equipe técnica disponível 24 horas, 7 dias por semana, 365 dias por ano.',
            feature2Title: 'Projetos de Rede',
            feature2Text:
                'Projeto, implantação e documentação de redes estruturadas.',
            feature3Title: 'Registro de Domínios',
            feature3Text: 'Reserva de domínios nacionais e internacionais.',
            feature4Title: 'Gestão de TI',
            feature4Text:
                'Gestão completa do seu ambiente de tecnologia com foco em resultados.',
        },
        contact: {
            title: 'Fale',
            span: 'Conosco',
            subtitle:
                'Estamos prontos para atender sua empresa. Preencha o formulário ou entre em contato diretamente.',
            formTitle: 'Envie uma Mensagem',
            name: 'Nome Completo',
            namePH: 'Seu nome completo',
            email: 'E-mail',
            emailPH: 'seu@email.com',
            phone: 'Telefone',
            company: 'Empresa',
            companyPH: 'Nome da empresa',
            phonePH: '(11) 9 1234-5678',
            subject: 'Assunto',
            message: 'Como podemos ajudar sua empresa?',
            send: 'Enviar Mensagem',
            sending: 'Enviando...',
            infoTitle: 'Informações de Contato',
            address: 'São Paulo, SP - Brasil',
            phoneNumber: '(11) 4000-1234',
            emailAddress: 'contato@byotec.com.br',
            hours: 'Seg - Sex: 8h às 18h',
            hoursSupport: 'Suporte: 24/7/365',
        },
        footer: {
            description:
                'Soluções em tecnologia da informação para empresas que buscam performance, segurança e inovação.',
            quickLinks: 'Links Rápidos',
            servicesTitle: 'Serviços',
            contactTitle: 'Contato',
            rights: 'Todos os direitos reservados.',
        },
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            help: 'Support & Help',

            infrastructure: 'Infrastructure & Cloud',
            communication: 'Communication',
            security: 'Security & Continuity',
            management: 'IT Management',

            hosting: 'Hosting',
            hostingDesc: 'Servers in high availability datacenter',

            vps: 'VPS Server',
            vpsDesc: 'Scalable Linux and Windows infrastructure',

            email: 'Professional Email',
            emailDesc: 'Secure and reliable corporate email',

            backup: 'Corporate Backup',
            backupDesc: 'Protect your data against failures',

            audit: 'IT Audit',
            auditDesc: 'Complete infrastructure assessment',

            support: 'Technical Support',
            supportDesc: 'Specialized support for your company',

            essential: 'Essential',
            login: 'Login',
        },
        home: {
            heroTitle: 'Technology that drives your business',
            heroSubtitle:
                'Cloud solutions, 24/7 support, and high-performance infrastructure for your company to grow securely.',
            heroCta: 'Explore our services',
            heroCtaSecondary: 'Talk to a specialist',
            servicesTitle: 'Our Services',
            servicesSubtitle:
                'Complete cloud-based IT solutions — fast, affordable, and interactive.',
            whyTitle: 'Why Byotec?',
            whySubtitle:
                'Results that make a difference in your IT environment.',
            sla: '99.98% SLA',
            slaDesc: 'Guaranteed availability so your business never stops.',
            support247: '24/7/365 Support',
            support247Desc: 'Specialized team available anytime, any day.',
            fastActivation: 'Express Activation',
            fastActivationDesc:
                'Fast deployment so you can start using it immediately.',
            partnersTitle: 'Companies that trust Byotec',
        },
        about: {
            title: 'About Us',
            subtitle: 'Learn about the history and values that drive Byotec.',
            heroTitle: 'Transforming IT environments since 2010',
            heroText:
                'Byotec is ready to design and deploy networks with normative and guaranteed documentation. With a team in constant operational and technological improvement, Byotec stands out in the market for designing and executing network structures, with the know-how for efficient technical support.',
            missionTitle: 'Mission',
            missionText:
                "To deliver reliable and innovative IT solutions that drive our clients' growth.",
            visionTitle: 'Vision',
            visionText:
                'To be a national reference in IT infrastructure management, recognized for excellence and innovation.',
            valuesTitle: 'Values',
            valuesText:
                'Commitment, transparency, continuous innovation, and focus on client results.',
            differentialsTitle: 'Our Differentials',
            diff1Title: 'Certified Team',
            diff1Text:
                'Professionals with Microsoft, AWS, Google Cloud, and more certifications.',
            diff2Title: 'Tier III Infrastructure',
            diff2Text:
                'Datacenter in the largest and best data center in Brazil.',
            diff3Title: 'Personalized Service',
            diff3Text:
                'Every client is unique. Tailored solutions for every need.',
            diff4Title: 'Proactive Monitoring',
            diff4Text:
                'We identify and resolve issues before they impact your business.',
        },
        services: {
            title: 'Our Services',
            subtitle:
                'All our services are cloud-based, fast, easy to deploy, affordable, and interactive.',
            cloudTitle: 'Cloud & Hosting',
            cloudDesc:
                'Windows, Linux, and hybrid servers. VPS with the best infrastructure and support in the market.',
            emailTitle: 'Email & Collaboration',
            emailDesc:
                'Sized to your needs. Exchange, Google Workspace, Professional, and much more.',
            backupTitle: 'Backup & Security',
            backupDesc:
                'The fastest and most reliable backup on the market. Auditing and data protection.',
            supportTitle: 'Support & Infrastructure',
            supportDesc:
                '24/7/365 support for all employees. Network projects and domains.',
            learnMore: 'Learn more',
            ctaTitle: 'Ready to transform your IT?',
            ctaText: 'Get in touch and discover how we can help your company.',
            ctaButton: 'Contact Us',
        },
        serviceCloud: {
            title: 'Cloud & Hosting',
            subtitle:
                'Our servers are in the largest and best DataCenter in Brazil, managed by our DreamTeam.',
            heroText:
                'High-performance cloud infrastructure with Windows, Linux, and hybrid servers. Our VPS services feature the best infrastructure and support in the market.',
            feature1Title: 'Dedicated Servers',
            feature1Text:
                'Windows and Linux servers with exclusive resources and guaranteed performance.',
            feature2Title: 'Cloud VPS',
            feature2Text:
                'Scalable virtual machines with NVMe SSD and 99.98% uptime.',
            feature3Title: 'Web Hosting',
            feature3Text:
                'Shared and dedicated hosting with SSL, backups, and control panel.',
            feature4Title: 'Hybrid Environment',
            feature4Text:
                'Integration between public and private cloud for maximum flexibility.',
        },
        serviceEmail: {
            title: 'Email & Collaboration',
            subtitle: 'Sized to your needs, with the availability you require.',
            heroText:
                'Corporate email solutions that adapt to the size of your company. Exchange, Google Workspace, professional email, and much more.',
            feature1Title: 'Microsoft Exchange',
            feature1Text:
                'Corporate email with shared calendar, contacts, and tasks.',
            feature2Title: 'Google Workspace',
            feature2Text:
                'Gmail, Drive, Meet, and all Google tools for your company.',
            feature3Title: 'Professional Email',
            feature3Text:
                'Email accounts with your domain, integrated antispam and antivirus.',
            feature4Title: 'Secure Migration',
            feature4Text:
                'Email migration without data loss and zero downtime.',
        },
        serviceBackup: {
            title: 'Backup & Security',
            subtitle: 'This is an indispensable resource for all companies!',
            heroText:
                'Our backup is the fastest and most reliable on the market. Complete data protection with auditing and compliance.',
            feature1Title: 'Cloud Backup',
            feature1Text:
                'Automatic and encrypted copies of your data in the cloud.',
            feature2Title: 'Disaster Recovery',
            feature2Text:
                'Disaster recovery plans to keep your business running.',
            feature3Title: 'IT Audit',
            feature3Text:
                'Not happy with your local team? How about a thorough investigation.',
            feature4Title: 'Data Protection',
            feature4Text:
                'Compliance with LGPD and best information security practices.',
        },
        serviceSupport: {
            title: 'Support & Infrastructure',
            subtitle:
                "The best support for all your company's employees 24/7/365.",
            heroText:
                "If your focus is results, you need a reliable technology management service. In the era of digital transformation, it's essential that your infrastructures are always available.",
            feature1Title: '24/7 Support',
            feature1Text:
                'Technical team available 24 hours a day, 7 days a week, 365 days a year.',
            feature2Title: 'Network Projects',
            feature2Text:
                'Design, deployment, and documentation of structured networks.',
            feature3Title: 'Domain Registration',
            feature3Text: 'National and international domain registration.',
            feature4Title: 'IT Management',
            feature4Text:
                'Complete management of your technology environment focused on results.',
        },
        contact: {
            title: 'Contact',
            span: 'Us',
            subtitle:
                'We are ready to support your business. Fill out the form or contact us directly.',
            formTitle: 'Send a Message',
            name: 'Full Name',
            namePH: 'Your full name',
            email: 'E-mail',
            emailPH: 'your@email.com',
            phone: 'Phone',
            company: 'Company',
            companyPH: 'Company name',
            phonePH: '+1 (000) 000-0000',
            subject: 'Subject',
            message: 'How can we help your business?',
            send: 'Send Message',
            sending: 'Sending...',
            infoTitle: 'Contact Information',
            address: 'São Paulo, SP - Brazil',
            phoneNumber: '+55 (11) 4000-1234',
            emailAddress: 'contact@byotec.com.br',
            hours: 'Mon - Fri: 8 AM to 6 PM',
            hoursSupport: 'Support: 24/7/365',
        },
        footer: {
            description:
                'Information technology solutions for companies seeking performance, security, and innovation.',
            quickLinks: 'Quick Links',
            servicesTitle: 'Services',
            contactTitle: 'Contact',
            rights: 'All rights reserved.',
        },
    },
} as const;

type DeepStringify<T> = {
    [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

export type TranslationKeys = DeepStringify<typeof translations.pt>;
