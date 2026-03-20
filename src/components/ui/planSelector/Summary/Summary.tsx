import type { FormState } from '@/schema/infraQuote.schema';
import styles from './Summary.module.scss';
import {
    ChevronRight,
    Cog,
    FileSliders,
    Headphones,
    Mail,
    Monitor,
    Printer,
} from 'lucide-react';

type SummaryRow = {
    icon: React.ReactElement;
    label: string;
    valueKey: keyof FormState;
    highlight?: boolean;
};

const SUMMARY_ROWS: SummaryRow[] = [
    { icon: <Cog />, label: 'Servidores', valueKey: 'servidores' },
    { icon: <Monitor />, label: 'Computadores', valueKey: 'computadores' },
    { icon: <Headphones />, label: 'Help Desk', valueKey: 'helpdesk' },
    { icon: <Mail />, label: 'E-mails', valueKey: 'emails', highlight: true },
    {
        icon: <Printer />,
        label: 'Impressoras',
        valueKey: 'impressoras',
        highlight: true,
    },
    { icon: <FileSliders />, label: 'Sistema', valueKey: 'sistema' },
    // { icon: '🔄', label: 'Ciclo', valueKey: 'ciclo' },
];

type SummaryProps = {
    form: FormState;
    onSubmit: () => void;
};

export function Summary({ form, onSubmit }: SummaryProps) {
    const formatValue = (key: keyof FormState): string => {
        const val = form[key];
        if (!val) return '—';

        // Append unit hint for option-group fields
        const unitMap: Partial<Record<keyof FormState, string>> = {
            servidores: 'servidores',
            computadores: 'computadores',
            helpdesk: 'usuários',
            emails: 'contas',
            impressoras: 'impressoras',
        };
        return unitMap[key] ? `${val} ${unitMap[key]}` : val;
    };

    return (
        <aside className={styles.summary}>
            <div className={styles.summary__bar} aria-hidden="true" />

            <div className={styles.summary__header}>
                <div className={styles['summary__header-left']}>
                    <div className={styles['summary__header-icon']}>
                        <Monitor />
                    </div>
                    <div>
                        <div className={styles['summary__header-title']}>
                            Meu novo servidor
                        </div>
                        <div className={styles['summary__header-subtitle']}>
                            Configuração personalizada
                        </div>
                    </div>
                </div>
                <div className={styles.summary__status}>
                    <span className={styles['summary__status-dot']} />
                    Disponível
                </div>
            </div>

            <ul className={styles.summary__specs}>
                {SUMMARY_ROWS.map((row) => (
                    <li key={row.valueKey} className={styles.summary__row}>
                        <div className={styles['summary__row-left']}>
                            <span className={styles['summary__row-icon']}>
                                {row.icon}
                            </span>
                            <span className={styles['summary__row-label']}>
                                {row.label}
                            </span>
                        </div>
                        <span
                            className={`${styles['summary__row-value']} ${
                                row.highlight
                                    ? styles['summary__row-value--highlight']
                                    : ''
                            }`}
                        >
                            {formatValue(row.valueKey)}
                        </span>
                    </li>
                ))}
            </ul>

            <div className={styles.summary__pricing}>
                <div className={styles['summary__pricing-main']}>
                    <span className={styles['summary__pricing-headline']}>
                        Valor sob consulta
                    </span>
                    <p className={styles['summary__pricing-sub']}>
                        Orçamento personalizado
                        <br />
                        de acordo com a sua configuração
                    </p>
                </div>
                <div className={styles['summary__pricing-divider']} />
                <div className={styles['summary__pricing-note']}>
                    <span className={styles['summary__pricing-note-icon']}>
                        <Mail />
                    </span>
                    <p className={styles['summary__pricing-note-text']}>
                        Receba o orçamento <strong>por e-mail</strong> em até{' '}
                        <strong
                            className={
                                styles['summary__pricing-note-text--accent']
                            }
                        >
                            24 horas
                        </strong>
                    </p>
                </div>
            </div>

            <div className={styles.summary__cta}>
                <button
                    type="button"
                    className={styles['summary__cta-button']}
                    onClick={onSubmit}
                >
                    <ChevronRight />
                    Solicitar orçamento
                </button>
                <div className={styles['summary__cta-trust']}>
                    <span className={styles['summary__cta-trust-item']}>
                        <StarIcon />
                        Resposta em 24h
                    </span>
                    <span className={styles['summary__cta-trust-item']}>
                        <StarIcon />
                        Sem compromisso
                    </span>
                </div>
            </div>
        </aside>
    );
}

function StarIcon() {
    return (
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M5 1l1.12 2.27 2.5.36-1.81 1.76.43 2.5L5 6.77 2.76 7.89l.43-2.5L1.38 3.63l2.5-.36L5 1z"
                fill="currentColor"
            />
        </svg>
    );
}
