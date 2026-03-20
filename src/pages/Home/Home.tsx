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

import styles from './Home.module.scss';

import AboutIMG from '@assets/M7X5J7.jpg';
import PlansSlider from '@/components/PlansSlider/PlansSlider';

interface Metric {
    value: number;
    title: string;
    suffix?: string;
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

interface Feature {
    icon: React.ReactElement;
    title: string;
    description: string;
}

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
                    <div className={styles.hero__overlay} />
                    <div className={styles.hero__pulseLeft} />
                    <div className={styles.hero__pulseRight} />
                    <div className={styles.hero__heroContainer}>
                        <h1 className={styles.hero__heroTitle}>
                            Cloud Hosting que <br />
                            <span>impulsiona seu negócio</span>
                        </h1>

                        <p className={styles.hero__heroSubtitle}>
                            Hospedagem, e-mail corporativo, backup e domínios
                            com a confiabilidade e suporte que sua empresa
                            precisa para operar 24/7.
                        </p>

                        <div className={styles.hero__actions}>
                            <a
                                href="/suporte"
                                className={styles.hero__primaryBtn}
                            >
                                Falar com um especialista
                                <ArrowRight size={18} />
                            </a>

                            <a
                                href="/servicos"
                                className={styles.hero__secondaryBtn}
                            >
                                <Play size={16} />
                                Ver serviços
                            </a>
                        </div>
                    </div>
                </section>

                <section className={styles.metrics}>
                    <div className={styles.metrics__glow} />

                    <div className={styles.metrics__container}>
                        {metrics.map((item, index) => (
                            <div key={index} className={styles.metrics__metric}>
                                <span className={styles.metrics__metricValue}>
                                    <Counter
                                        value={item.value}
                                        suffix={item.suffix}
                                        duration={3}
                                    />
                                </span>

                                <span className={styles.metrics__metricTitle}>
                                    {item.title}
                                </span>

                                <span
                                    className={
                                        styles.metrics__metricDescription
                                    }
                                >
                                    {item.description}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.why__container}>
                        <motion.div
                            className={styles.why__content}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-100px' }}
                            variants={container}
                        >
                            <motion.span
                                className={styles.why__badge}
                                variants={item}
                            >
                                POR QUE A BYOTEC?
                            </motion.span>

                            <motion.h2
                                id="why-heading"
                                className={styles.why__title}
                                variants={item}
                            >
                                Diferenciais que fazem sua empresa decolar
                            </motion.h2>

                            <motion.div
                                className={styles.why__features}
                                variants={container}
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        className={styles.why__item}
                                        variants={item}
                                    >
                                        <div className={styles.why__iconBox}>
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
                            className={styles.why__image}
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

                            <div className={styles.why__infrastructureBadge}>
                                <div className={styles.why__badgeIcon}>
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

                <PlansSlider />

                <section
                    className={styles.contact}
                    aria-labelledby="contact-heading"
                    itemScope
                    itemType="https://schema.org/Organization"
                >
                    <div className={styles.contact__container}>
                        <header className={styles.contact__header}>
                            <span className={styles.contact__label}>
                                Contato
                            </span>

                            <h2
                                id="contact-heading"
                                className={styles.contact__title}
                            >
                                Pronto para <strong>modernizar</strong> a
                                infraestrutura da sua empresa?
                            </h2>

                            <p className={styles.contact__description}>
                                Fale com nossos especialistas e descubra como
                                nossas soluções garantem segurança, desempenho e
                                operação contínua para o seu negócio.
                            </p>

                            <a
                                href="/suporte"
                                className={styles.contact__cta}
                                aria-label="Solicitar orçamento agora"
                            >
                                Fale com um especialista
                                <ArrowRight size={18} />
                            </a>
                        </header>

                        <div className={styles.contact__cards}>
                            {contactInfo.map((info, index) => (
                                <article
                                    className={styles.contact__card}
                                    key={index}
                                >
                                    <div className={styles.contact__icon}>
                                        {info.icon}
                                    </div>

                                    <span className={styles.contact__cardLabel}>
                                        {info.title}
                                    </span>

                                    {info.title === 'E-mail' ? (
                                        <a
                                            href="mailto:contato@virtualvisions.com.br"
                                            className={
                                                styles.contact__cardValue
                                            }
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
