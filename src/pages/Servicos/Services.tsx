import { motion } from 'framer-motion';
import {
    Server,
    HardDrive,
    Mail,
    ShieldCheck,
    Search,
    Headphones,
    type LucideIcon,
} from 'lucide-react';

import styles from './Services.module.scss';
import PlansSlider from '@/components/PlansSlider/PlansSlider';

type Service = {
    icon: LucideIcon;
    title: string;
    description: string;
    tag: string;
};

const services: Service[] = [
    {
        icon: Server,
        title: 'Hospedagem',
        description:
            'Servidores em datacenter Tier III com redundância de energia e rede. SLA de 99.9% garantido contratualmente.',
        tag: 'ALTA DISPONIBILIDADE',
    },
    {
        icon: HardDrive,
        title: 'Servidor VPS',
        description:
            'Infraestrutura escalável com Linux e Windows. Deploy em minutos, escale sob demanda sem downtime.',
        tag: 'ESCALÁVEL',
    },
    {
        icon: Mail,
        title: 'Email Profissional',
        description:
            'Emails corporativos com anti-spam avançado, criptografia TLS e compatibilidade com todos os clientes.',
        tag: 'SEGURO',
    },
    {
        icon: ShieldCheck,
        title: 'Backup Corporativo',
        description:
            'Backups imutáveis via S3 com retenção configurável. Restauração granular em minutos, não em horas.',
        tag: 'IMUTÁVEL',
    },
    {
        icon: Search,
        title: 'Auditoria de TI',
        description:
            'Avaliação completa da sua infraestrutura: inventário, vulnerabilidades, compliance e roadmap de melhorias.',
        tag: 'DIAGNÓSTICO',
    },
    {
        icon: Headphones,
        title: 'Suporte Técnico',
        description:
            'Equipe especializada com SLA de resposta de 15 minutos. Monitoramento proativo 24/7 da sua operação.',
        tag: '24/7',
    },
];

const days = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    status: Math.random() > 0.02 ? 'up' : 'degraded',
}));

export default function Services() {
    return (
        <main id="servicos" aria-labelledby="services-title">
            <section className={styles.hero} aria-labelledby="hero-title">
                <div className={styles.hero__container}>
                    <div className={styles.hero__grid}>
                        <motion.header
                            className={styles.hero__content}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 id="hero-title" className={styles.hero__title}>
                                Infraestrutura que escala antes da sua demanda
                            </h1>

                            <p className={styles.hero__description}>
                                Servidores, redes e suporte técnico projetados
                                para manter sua operação em funcionamento
                                contínuo — com estabilidade, segurança e
                                previsibilidade.
                            </p>

                            <nav
                                className={styles.hero__actions}
                                aria-label="Ações principais"
                            >
                                <a
                                    href="/#planos"
                                    className={styles.hero__buttonPrimary}
                                >
                                    Ver planos
                                </a>
                            </nav>
                        </motion.header>

                        <motion.aside
                            className={styles.hero__status}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            aria-label="Status da infraestrutura"
                        >
                            <header className={styles.hero__statusHeader}>
                                <h2 className={styles.hero__statusTitle}>
                                    Status da Infraestrutura
                                </h2>

                                <span className={styles.hero__statusBadge}>
                                    OPERACIONAL
                                </span>
                            </header>

                            <div className={styles.uptime}>
                                <div className={styles.uptime__header}>
                                    <span
                                        className={styles.uptime__indicator}
                                    />
                                    <span className={styles.uptime__label}>
                                        Todos os sistemas operacionais
                                    </span>
                                </div>

                                <div className={styles.uptime__grid}>
                                    {days.map((d) => (
                                        <div
                                            key={d.day}
                                            className={
                                                d.status === 'up'
                                                    ? styles['uptime__cell--up']
                                                    : styles[
                                                          'uptime__cell--degraded'
                                                      ]
                                            }
                                            title={`Dia ${d.day}`}
                                        />
                                    ))}
                                </div>

                                <div className={styles.uptime__footer}>
                                    <span>30 dias</span>
                                    <span className={styles.uptime__percentage}>
                                        99.97% uptime
                                    </span>
                                </div>
                            </div>

                            <dl className={styles.hero__stats}>
                                <div className={styles.hero__stat}>
                                    <dt className={styles.hero__statLabel}>
                                        Latência média
                                    </dt>
                                    <dd className={styles.hero__statValue}>
                                        12ms
                                    </dd>
                                </div>

                                <div className={styles.hero__stat}>
                                    <dt className={styles.hero__statLabel}>
                                        Requests/s
                                    </dt>
                                    <dd className={styles.hero__statValue}>
                                        48.2k
                                    </dd>
                                </div>

                                <div className={styles.hero__stat}>
                                    <dt className={styles.hero__statLabel}>
                                        Disponibilidade
                                    </dt>
                                    <dd className={styles.hero__statValue}>
                                        99.97%
                                    </dd>
                                </div>
                            </dl>
                        </motion.aside>
                    </div>
                </div>
            </section>

            <section className={styles.services}>
                <motion.header
                    className={styles.services__header}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 id="services-title" className={styles.services__title}>
                        Infraestrutura completa para sua operação digital
                    </h2>

                    <p className={styles.services__description}>
                        Soluções corporativas de TI que garantem estabilidade,
                        segurança e continuidade de negócios — da hospedagem ao
                        suporte técnico.
                    </p>
                </motion.header>

                <ul className={styles.services__grid}>
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.li
                                key={service.title}
                                className={styles.services__card}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.4,
                                }}
                            >
                                <article
                                    className={styles.services__cardContent}
                                >
                                    <header
                                        className={styles.services__cardHeader}
                                    >
                                        <div className={styles.services__icon}>
                                            <Icon
                                                aria-hidden="true"
                                                strokeWidth={1.5}
                                                size={20}
                                            />
                                        </div>

                                        <span
                                            className={styles.services__status}
                                            aria-hidden="true"
                                        >
                                            <span
                                                className={
                                                    styles[
                                                        'services__status-dot'
                                                    ]
                                                }
                                            />
                                            READY
                                        </span>
                                    </header>

                                    <span className={styles.services__tag}>
                                        {service.tag}
                                    </span>

                                    <h3 className={styles.services__cardTitle}>
                                        {service.title}
                                    </h3>

                                    <p
                                        className={
                                            styles.services__cardDescription
                                        }
                                    >
                                        {service.description}
                                    </p>
                                </article>
                            </motion.li>
                        );
                    })}
                </ul>
            </section>

            <PlansSlider />
        </main>
    );
}
