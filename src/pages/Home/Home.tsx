import {
    ArrowRight,
    Check,
    Clock,
    Mail,
    MessageSquare,
    Phone,
    Pin,
    Play,
    ShieldCheck,
    Zap,
} from 'lucide-react';

import Counter from '@/components/Counter';
import { motion, type Variants } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Home.module.scss';

import AboutIMG from '@assets/M7X5J7.jpg';

interface Metric {
    value: number;
    title: string;
    suffix?: string;
    description: string;
}

interface Feature {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const metrics: Metric[] = [
    {
        value: 3498,
        suffix: '+',
        title: 'Empresas Atendidas',
        description: 'em todo o Brasil',
    },
    {
        suffix: '+',
        value: 15,
        title: 'Anos de Experiência',
        description: 'no mercado AV',
    },
    {
        suffix: '%',
        value: 99,
        title: 'Satisfação dos Clientes',
        description: 'índice NPS',
    },
    {
        value: 24,
        suffix: '/7',
        title: 'Suporte Disponível',
        description: 'quando você precisa',
    },
];

const features: Feature[] = [
    {
        icon: <Zap />,
        title: 'Ativação Express',
        description: 'Seu serviço ativo em minutos, sem burocracia.',
    },
    {
        icon: <Clock />,
        title: 'SLA 99,98%',
        description:
            'Data centers de alto desempenho garantindo disponibilidade, segurança e escalabilidade para sua empresa.',
    },
    {
        icon: <ShieldCheck />,
        title: 'Especialistas Certificados',
        description:
            'Nossa equipe possui anos de experiência em cloud, infraestrutura e soluções corporativas.',
    },
    {
        icon: <MessageSquare />,
        title: 'Suporte Humanizado',
        description:
            'Atendimento técnico rápido, transparente e sempre focado na continuidade do seu negócio.',
    },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

interface Plan {
    name: string;
    description: string;
    price: string;
    features: string[];
    recommended?: boolean;
}

const plans: Plan[] = [
    {
        name: 'Basic',
        description: 'Para pequenas empresas',
        price: 'R$ 149',
        recommended: true,
        features: [
            'Suporte até 01 servidor',
            'Suporte até 10 computadores',
            'HelpDesk para até 10 usuários',
            'Hospedagem híbrida',
            '15 contas de e-mail',
            'Suporte até 02 impressoras',
        ],
    },
    {
        name: 'Standard',
        description: 'Empresas em crescimento',
        price: 'R$ 299',
        features: [
            'Suporte até 02 servidores',
            'Suporte até 25 computadores',
            'HelpDesk para até 25 usuários',
            'Hospedagem híbrida',
            '30 contas de e-mail',
            'Suporte até 03 impressoras',
        ],
    },
    {
        name: 'Advanced',
        description: 'Operações mais robustas',
        price: 'R$ 499',
        features: [
            'Suporte até 05 servidores',
            'Suporte até 50 computadores',
            'HelpDesk para até 50 usuários',
            'Hospedagem híbrida',
            '60 contas de e-mail',
            'Suporte até 05 impressoras',
        ],
    },
    {
        name: 'Enterprise',
        description: 'Infraestrutura completa',
        price: 'R$ 899',
        features: [
            'Suporte até 10 servidores',
            'Suporte até 100 computadores',
            'HelpDesk para até 100 usuários',
            'Hospedagem híbrida',
            '120 contas de e-mail',
            'Suporte até 25 impressoras',
        ],
    },
];

const contactInfo = [
    {
        icon: <Mail />,
        title: 'E-mail',
        description: 'contato@byotec.com.br',
    },
    {
        icon: <Phone />,
        title: 'Telefone',
        description: '(11) 3456-7890',
    },
    {
        icon: <Pin />,
        title: 'Endereço',
        description: 'R. Capitão pacheco e Chaves, 1056 - São Paulo, SP',
    },
];

export default function Home() {
    return (
        <>
            <main
                className={styles.home}
                aria-label="Infraestrutura cloud e data center de alta performance"
            >
                <section className={styles.hero}>
                    {' '}
                    //background image definido no arquivo module.scss!
                    <div className={styles.overlay} />
                    <div className={styles.pulseLeft} />
                    <div className={styles.pulseRight} />
                    <div className={styles.heroContainer}>
                        <h1 className={styles.heroTitle}>
                            Cloud Hosting que <br />
                            <span>impulsiona seu negócio</span>
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Hospedagem, e-mail corporativo, backup e domínios
                            com a confiabilidade e suporte que sua empresa
                            precisa para operar 24/7.
                        </p>

                        <div className={styles.actions}>
                            <a href="/suporte" className={styles.primaryBtn}>
                                Falar com um especialista
                                <ArrowRight size={18} />
                            </a>

                            <a href="/servicos" className={styles.secondaryBtn}>
                                <Play size={16} />
                                Ver serviços
                            </a>
                        </div>
                    </div>
                </section>

                <section className={styles.metrics}>
                    <div className={styles.glow} />

                    {/* <h1>Números que <span>falam por nós</span></h1> */}

                    <div className={styles.metricsContainer}>
                        {metrics.map((item, index) => (
                            <div key={index} className={styles.metric}>
                                <span className={styles.metricValue}>
                                    <Counter
                                        value={item.value}
                                        suffix={item.suffix}
                                        duration={3}
                                    />
                                </span>

                                <span className={styles.metricTitle}>
                                    {item.title}
                                </span>

                                <span className={styles.metricDescription}>
                                    {item.description}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.whyContainer}>
                        <motion.div
                            className={styles.whyContent}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={container}
                        >
                            <motion.span
                                className={styles.whyBadge}
                                variants={item}
                            >
                                POR QUE A BYOTEC?
                            </motion.span>

                            <motion.h2
                                id="why-heading"
                                className={styles.whyTitle}
                                variants={item}
                            >
                                Diferenciais que fazem sua empresa decolar
                            </motion.h2>

                            <motion.div
                                className={styles.whyFeatures}
                                variants={container}
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.whyItem}
                                        variants={item}
                                    >
                                        <div className={styles.iconBox}>
                                            <div>{feature.icon}</div>
                                        </div>
                                        <div>
                                            <strong>{feature.title}</strong>
                                            <span>{feature.description}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className={styles.whyImage}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img
                                src={AboutIMG}
                                alt="Infraestrutura de rede corporativa"
                                loading="lazy"
                            />

                            <div className={styles.infrastructureBadge}>
                                <div className={styles.badgeIcon}>
                                    <Check />
                                </div>

                                <div>
                                    <strong>Infraestrutura Híbrida</strong>
                                    <span>Linux & Windows</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section
                    className={styles.plans}
                    aria-labelledby="plans-heading"
                    itemScope
                    itemType="https://schema.org/OfferCatalog"
                >
                    <div className={styles.plansContent}>
                        <header className={styles.header}>
                            <h2 id="plans-heading">
                                Planos de <span>Suporte e Infraestrutura</span>
                            </h2>

                            <p>
                                Soluções completas de suporte técnico, helpdesk
                                personalizado e hospedagem híbrida para empresas
                                que precisam de estabilidade e escalabilidade.
                            </p>
                        </header>

                        <Swiper
                            modules={[Pagination]}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{ clickable: true }}
                            spaceBetween={24}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                            }}
                            className={styles.slider}
                        >
                            {plans.map((plan, index) => (
                                <SwiperSlide key={index}>
                                    <article
                                        className={`${styles.card} ${
                                            plan.recommended
                                                ? styles.recommended
                                                : ''
                                        }`}
                                        itemScope
                                        itemType="https://schema.org/Offer"
                                    >
                                        {plan.recommended && (
                                            <span className={styles.badge}>
                                                Recomendado
                                            </span>
                                        )}

                                        <header className={styles.cardHeader}>
                                            <h3 itemProp="name">{plan.name}</h3>
                                            <p>{plan.description}</p>
                                        </header>

                                        <div className={styles.price}>
                                            <strong itemProp="price">
                                                {plan.price}
                                            </strong>
                                            <span>/mês</span>
                                        </div>

                                        <button className={styles.button}>
                                            Escolher plano
                                        </button>

                                        <ul className={styles.features}>
                                            {plan.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                <section
                    className={styles.contact}
                    aria-labelledby="contact-heading"
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <div className={styles.container}>
                        <header className={styles.contactheader}>
                            <span className={styles.label}>Contato</span>

                            <h2 id="contact-heading" className={styles.title}>
                                Pronto para <strong>modernizar</strong> a
                                infraestrutura da sua empresa?
                            </h2>

                            <p className={styles.contactDescription}>
                                Fale com nossos especialistas e descubra como
                                nossas soluções garantem segurança, desempenho e
                                operação contínua para o seu negócio.
                            </p>

                            <a
                                href="/suporte"
                                className={styles.cta}
                                aria-label="Solicitar orçamento agora"
                            >
                                Fale com um especialista
                                <ArrowRight size={18} />
                            </a>
                        </header>

                        <div className={styles.contactCards}>
                            {contactInfo.map((info, index) => (
                                <article
                                    className={styles.contactCard}
                                    key={index}
                                >
                                    <div className={styles.icon}>
                                        {info.icon}
                                    </div>

                                    <span className={styles.contactCardLabel}>
                                        {info.title}
                                    </span>

                                    {info.title === 'E-mail' ? (
                                        <a
                                            href="mailto:contato@virtualvisions.com.br"
                                            className={styles.contactCardValue}
                                            itemProp="email"
                                        >
                                            {info.description}
                                        </a>
                                    ) : (
                                        <span>{info.description}</span>
                                    )}
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
