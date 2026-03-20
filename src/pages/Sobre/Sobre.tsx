import { Shield, Zap, Clock, Users, ExternalLink, Check } from 'lucide-react';

import { motion, type Variants } from 'framer-motion';

import aboutHero from '@/assets/about-hero.jpg';
import serversImg from '@/assets/servers-closeup.jpg';

import virtualVisions from '@assets/virtualvisions.webp';
import pixelWeb from '@assets/pixelweb.webp';

import infraLinux from '@/assets/infra-linux.png';
import infraWindows from '@/assets/infra-windows.png';
import infraSecurity from '@/assets/infra-security.png';

import styles from './Sobre.module.scss';
import PlansSlider from '@/components/PlansSlider/PlansSlider';

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const values = [
    {
        icon: Shield,
        title: 'Confiabilidade',
        desc: 'SLA de 99,98% garantido com infraestrutura redundante e monitoramento 24 horas.',
    },
    {
        icon: Zap,
        title: 'Agilidade',
        desc: 'Ativação express dos serviços em minutos, sem burocracia ou processos demorados.',
    },
    {
        icon: Clock,
        title: 'Disponibilidade',
        desc: 'Suporte técnico 24/7/365 com equipe especializada pronta para ajudar.',
    },
    {
        icon: Users,
        title: 'Liberdade',
        desc: 'Método desvinculado — sem contratos longos, sem amarras. Você fica porque quer.',
    },
];

type Client = {
    name: string;
    description: string;
    image?: string;
    url: string;
};

const clients: Client[] = [
    {
        name: 'Virtual Visions',
        url: 'https://www.virtualvisions.com.br/',
        image: virtualVisions,
        description:
            'A Virtual Visions é especialista em videoconferência para organizações de todos os portes, oferecendo recomendações honestas, cumprimento de prazos, instalação inclusa e suporte garantido após a venda ou locação.',
    },
    {
        name: 'PixelWeb',
        url: 'https://www.pixelweb.dev.br/',
        image: pixelWeb,
        description:
            'Soluções digitais para transformar negócios — desenvolvendo sistemas, websites e aplicativos sob medida com foco em performance, experiência do usuário e arquitetura escalável.',
    },
];

const containerAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const cardAnimation = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
};

interface InfraCard {
    image: string;
    title: string;
    features: string[];
}

const infraCards: InfraCard[] = [
    {
        image: infraLinux,
        title: 'Servidores Linux',
        features: [
            'CentOS, Ubuntu e Debian',
            'Apache e Nginx',
            'Alta performance',
            'cPanel e WHM',
        ],
    },
    {
        image: infraWindows,
        title: 'Servidores Windows',
        features: [
            'Windows Server 2019+',
            'IIS e SQL Server',
            'Active Directory',
            'Remote Desktop',
        ],
    },
    {
        image: infraSecurity,
        title: 'Segurança e Backup',
        features: [
            'Firewall dedicado',
            'SSL gratuito',
            'Backup diário',
            'Monitoramento 24h',
        ],
    },
];

const Sobre = () => {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <img
                    src={aboutHero}
                    alt="Infraestrutura de cloud computing e data center"
                    className={styles.hero__bg}
                />

                <div className={styles.hero__overlay} />

                <motion.div
                    className={styles.hero__container}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.h1 variants={fadeUp} className={styles.hero__title}>
                        Quem é a <span>Byotec</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className={styles.hero__subtitle}
                    >
                        Há mais de 15 anos conectando empresas ao futuro com
                        soluções de infraestrutura de TI de alta performance.
                    </motion.p>
                </motion.div>
            </section>

            <motion.section
                className={styles.about}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <div className={styles.about__container}>
                    <div className={styles.about__grid}>
                        <motion.div
                            variants={fadeUp}
                            className={styles.about__text}
                        >
                            <span className={styles.about__kicker}>
                                Nossa História
                            </span>

                            <h2 className={styles.about__title}>
                                Experiência que gera confiança
                            </h2>

                            <div className={styles.about__content}>
                                <p>
                                    <p>
                                        A Byotec Tecnologia nasceu da paixão por
                                        oferecer soluções de TI que realmente
                                        fazem diferença no dia a dia das
                                        empresas. Com mais de 15 anos de atuação
                                        no mercado, nos consolidamos como
                                        referência em cloud hosting, e-mail
                                        corporativo e infraestrutura
                                        tecnológica.
                                    </p>{' '}
                                    <p>
                                        Nossa missão é democratizar o acesso à
                                        tecnologia de ponta, oferecendo serviços
                                        de alta qualidade com preços acessíveis
                                        e sem amarras contratuais. Acreditamos
                                        que a tecnologia deve ser uma aliada,
                                        não uma complicação.
                                    </p>{' '}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className={styles.about__image}
                        >
                            <img
                                src={serversImg}
                                alt="Infraestrutura de servidores"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className={styles.values}
            >
                <div className={styles.values__container}>
                    <h2 className={styles.values__title}>
                        A diferença está no serviço
                    </h2>

                    <div className={styles.values__grid}>
                        {values.map((v) => {
                            const Icon = v.icon;

                            return (
                                <div
                                    key={v.title}
                                    className={styles.values__card}
                                >
                                    <div className={styles.values__header}>
                                        <Icon className={styles.values__icon} />

                                        <h3
                                            className={styles.values__cardTitle}
                                        >
                                            {v.title}
                                        </h3>
                                    </div>

                                    <p className={styles.values__desc}>
                                        {v.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            <section className={styles.infra} aria-labelledby="infra-title">
                <div className={styles.infra__container}>
                    <motion.header
                        className={styles.infra__header}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerAnimation}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 id="infra-title" className={styles.infra__title}>
                            <span>Tecnologia de ponta</span> para sua empresa
                        </h2>

                        <p className={styles.infra__description}>
                            Nossa infraestrutura híbrida combina o melhor dos
                            ambientes Linux e Windows para entregar desempenho,
                            segurança e escalabilidade.
                        </p>
                    </motion.header>

                    <div className={styles.infra__grid}>
                        {infraCards.map((card, index) => (
                            <motion.article
                                key={card.title}
                                className={styles.infra__card}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardAnimation}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className={styles.card__imageWrapper}>
                                    <img
                                        src={card.image}
                                        alt={`Infraestrutura de ${card.title}`}
                                        loading="lazy"
                                        decoding="async"
                                        className={styles.card__image}
                                        width={112}
                                        height={112}
                                    />
                                </div>

                                <h3 className={styles.card__title}>
                                    {card.title}
                                </h3>

                                <ul className={styles.card__features}>
                                    {card.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className={styles.card__feature}
                                        >
                                            <span className={styles.card__icon}>
                                                <Check
                                                    size={14}
                                                    strokeWidth={3}
                                                />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className={styles.clients}
            >
                <div className={styles.clients__container}>
                    <header className={styles.clients__header}>
                        <h2
                            id="clients-title"
                            className={styles.clients__title}
                        >
                            Empresas que{' '}
                            <strong className={styles.clients__highlight}>
                                confiam na Byotec
                            </strong>
                        </h2>

                        <p className={styles.clients__description}>
                            Conheça algumas empresas que escolheram a Byotec
                            como parceira estratégica de tecnologia para
                            impulsionar seus resultados digitais.
                        </p>
                    </header>

                    <div className={styles.clients__grid}>
                        {clients.map((client) => (
                            <article
                                key={client.name}
                                className={styles.clients__card}
                                itemScope
                                itemType="https://schema.org/Organization"
                            >
                                <figure className={styles.clients__media}>
                                    <img
                                        src={client.image}
                                        alt={`Case de sucesso da empresa ${client.name}`}
                                        loading="lazy"
                                        itemProp="image"
                                    />

                                    <h3
                                        className={styles.clients__name}
                                        itemProp="name"
                                    >
                                        {client.name}
                                    </h3>
                                    <figcaption></figcaption>
                                </figure>

                                <div className={styles.clients__content}>
                                    <p
                                        className={styles.clients__text}
                                        itemProp="description"
                                    >
                                        {client.description}
                                    </p>

                                    <a
                                        href={client.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.clients__link}
                                        aria-label={`Visitar site da empresa ${client.name}`}
                                        itemProp="url"
                                    >
                                        Visitar site
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </motion.section>

            <PlansSlider />
        </main>
    );
};

export default Sobre;
