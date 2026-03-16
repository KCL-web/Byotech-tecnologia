import {
    Shield,
    Zap,
    Clock,
    Users,
    Server,
    Monitor,
    CheckCircle2,
} from 'lucide-react';

import { motion, type Variants } from 'framer-motion';

import aboutHero from '@/assets/about-hero.jpg';
import serversImg from '@/assets/servers-closeup.jpg';

import styles from './Sobre.module.scss';
import Counter from '@/components/Counter';

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

const metrics = [
    { value: 15, suffix: '+', label: 'Anos de Experiência' },
    { value: 500, suffix: '+', label: 'Clientes Atendidos' },
    { value: 1000, suffix: '+', label: 'Servidores Gerenciados' },
    { value: 99, suffix: ',98%', label: 'Uptime Garantido' },
];

const infra = [
    {
        icon: Server,
        title: 'Servidores Linux',
        items: [
            'CentOS, Ubuntu, Debian',
            'Apache & Nginx',
            'Alta performance',
            'cPanel/WHM',
        ],
    },
    {
        icon: Monitor,
        title: 'Servidores Windows',
        items: [
            'Windows Server 2019+',
            'IIS & SQL Server',
            'Active Directory',
            'Remote Desktop',
        ],
    },
    {
        icon: Shield,
        title: 'Segurança & Backup',
        items: [
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
                    className={styles.heroBg}
                />

                <div className={styles.heroOverlay} />

                <motion.div
                    className={styles.heroContainer}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    <motion.h1 variants={fadeUp} className={styles.title}>
                        Quem é a <span>Byotec</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className={styles.subtitle}>
                        Há mais de 15 anos conectando empresas ao futuro com
                        soluções de infraestrutura de TI de alta performance.
                    </motion.p>
                </motion.div>
            </section>

            <motion.section
                className={styles.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
            >
                <div className={styles.container}>
                    <div className={styles.historyGrid}>
                        <motion.div
                            variants={fadeUp}
                            className={styles.historyText}
                        >
                            <span className={styles.kicker}>
                                Nossa História
                            </span>

                            <h2 className={styles.sectionTitle}>
                                Experiência que gera confiança
                            </h2>

                            <div className={styles.historyContent}>
                                <p>
                                    A Byotec Tecnologia nasceu da paixão por
                                    oferecer soluções de TI que realmente fazem
                                    diferença no dia a dia das empresas.
                                </p>

                                <p>
                                    Nossa missão é democratizar o acesso à
                                    tecnologia de ponta, oferecendo serviços de
                                    alta qualidade com preços acessíveis.
                                </p>

                                <p>
                                    Trabalhamos com servidores próprios em
                                    datacenters de última geração garantindo
                                    segurança e velocidade.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className={styles.historyImage}
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
                className={styles.metrics}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <motion.div className={styles.metricHeader} variants={fadeUp}>
                    <motion.h2 className={styles.metricTitle} variants={fadeUp}>
                        Números que{' '}
                        <span className={styles.titleSpan}>falam por nós</span>
                    </motion.h2>
                </motion.div>
                <div className={styles.container}>
                    <div className={styles.metricsGrid}>
                        {metrics.map((m) => (
                            <motion.div
                                key={m.label}
                                variants={fadeUp}
                                className={styles.metric}
                            >
                                <p className={styles.metricValue}>
                                    <Counter
                                        value={m.value}
                                        suffix={m.suffix}
                                    />
                                </p>

                                <p className={styles.metricLabel}>{m.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className={styles.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <div className={styles.container}>
                    <div className={styles.valuesGrid}>
                        {values.map((v) => {
                            const Icon = v.icon;

                            return (
                                <motion.div
                                    key={v.title}
                                    variants={fadeUp}
                                    className={styles.valueCard}
                                >
                                    <div className={styles.valueIcon}>
                                        <Icon size={26} />
                                    </div>

                                    <h3 className={styles.valueTitle}>
                                        {v.title}
                                    </h3>

                                    <p className={styles.valueDesc}>{v.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            <motion.section
                className={styles.infrastructure}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
            >
                <div className={styles.container}>
                    <div className={styles.infraGrid}>
                        {infra.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    variants={fadeUp}
                                    className={styles.infraCard}
                                >
                                    <div className={styles.infraIcon}>
                                        <Icon size={22} />
                                    </div>

                                    <h3 className={styles.infraTitle}>
                                        {item.title}
                                    </h3>

                                    <ul className={styles.infraList}>
                                        {item.items.map((li) => (
                                            <li key={li}>
                                                <CheckCircle2 size={16} />
                                                {li}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default Sobre;
