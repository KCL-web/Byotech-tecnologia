import { OptionGroup } from '@/components/ui/planSelector/OptionGroup/OptionGroup';
import { useState } from 'react';
import { OsSelector } from '@/components/ui/planSelector/OsSelector/OsSelector';
// import { BillingSelector } from '@/components/ui/planSelector/BillingSelector/BillingSelector';
import { Summary } from '@/components/ui/planSelector/Summary/Summary';

import styles from './QuoteRequest.module.scss';
import Linux from '@assets/linux.webp';
import Windows from '@assets/windows.webp';

export type FormState = {
    servidores: string;
    computadores: string;
    helpdesk: string;
    emails: string;
    impressoras: string;
    sistema: 'Windows' | 'Linux';
    // ciclo: 'mensal' | 'trimestral' | 'semestral' | 'anual';
};

export type OsOption = {
    value: 'Windows' | 'Linux';
    icon: string;
    label: string;
    sub: string;
};

export type BillingOption = {
    value: 'mensal' | 'trimestral' | 'semestral' | 'anual';
    label: string;
    discount: string | null;
};

const INITIAL_FORM: FormState = {
    servidores: '',
    computadores: '',
    helpdesk: '',
    emails: '',
    impressoras: '',
    sistema: 'Windows',
    // ciclo: 'mensal',
};

const OPTION_GROUPS: {
    field: keyof Pick<
        FormState,
        'servidores' | 'computadores' | 'helpdesk' | 'emails' | 'impressoras'
    >;
    title: string;
    options: { value: string; label: string; sub: string }[];
}[] = [
    {
        field: 'servidores',
        title: 'Quantidade de servidores',
        options: [
            { value: '1-2', label: '1–2', sub: 'servidores' },
            { value: '3-4', label: '3–4', sub: 'servidores' },
            { value: '5-8', label: '5–8', sub: 'servidores' },
            { value: '9-10', label: '9–10', sub: 'servidores' },
        ],
    },
    {
        field: 'computadores',
        title: 'Suporte de computadores',
        options: [
            { value: '10-25', label: '10–25', sub: 'computadores' },
            { value: '26-50', label: '26–50', sub: 'computadores' },
            { value: '51-100', label: '51–100', sub: 'computadores' },
            { value: '100+', label: '100+', sub: 'computadores' },
        ],
    },
    {
        field: 'helpdesk',
        title: 'Help Desk',
        options: [
            { value: '10', label: '10', sub: 'usuários' },
            { value: '25', label: '25', sub: 'usuários' },
            { value: '50', label: '50', sub: 'usuários' },
            { value: '100', label: '100', sub: 'usuários' },
        ],
    },
    {
        field: 'emails',
        title: 'Contas de e-mail',
        options: [
            { value: '15', label: '15', sub: 'contas' },
            { value: '30', label: '30', sub: 'contas' },
            { value: '60', label: '60', sub: 'contas' },
            { value: '120', label: '120', sub: 'contas' },
        ],
    },
    {
        field: 'impressoras',
        title: 'Suporte de impressoras',
        options: [
            { value: '2-5', label: '2–5', sub: 'impressoras' },
            { value: '6-10', label: '6–10', sub: 'impressoras' },
            { value: '11-25', label: '11–25', sub: 'impressoras' },
            { value: '26+', label: '26+', sub: 'impressoras' },
        ],
    },
];

const OS_OPTIONS: OsOption[] = [
    {
        value: 'Windows',
        icon: Windows,
        label: 'Windows Server',
        sub: 'Você poderá escolher a versão pelo painel de controle',
    },
    {
        value: 'Linux',
        icon: Linux,
        label: 'CentOS, Ubuntu etc',
        sub: 'Você poderá escolher a versão pelo painel de controle',
    },
];

// const BILLING_OPTIONS: BillingOption[] = [
//     { value: 'mensal', label: 'Mensal', discount: null },
//     { value: 'trimestral', label: 'Trimestral', discount: '↓ 15% de desconto' },
//     { value: 'semestral', label: 'Semestral', discount: '↓ 20% de desconto' },
//     { value: 'anual', label: 'Anual', discount: '↓ 25% de desconto' },
// ];

export default function QuoteRequest() {
    const [form, setForm] = useState<FormState>(INITIAL_FORM);

    const handleChange = <K extends keyof FormState>(
        field: K,
        value: FormState[K],
    ) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = () => {
        console.log('Orçamento solicitado:', form);
    };

    return (
        <section className={styles.quote}>
            <div className={styles.infraquote__configurator}>
                <div className={styles.infraquote__main}>
                    <div className={styles.infraquote__heading}>
                        Configure seu serviço
                    </div>

                    {OPTION_GROUPS.map((group) => (
                        <OptionGroup
                            key={group.field}
                            title={group.title}
                            options={group.options}
                            selected={form[group.field]}
                            onChange={(value) =>
                                handleChange(group.field, value)
                            }
                        />
                    ))}

                    <OsSelector
                        options={OS_OPTIONS}
                        selected={form.sistema}
                        onChange={(value) => handleChange('sistema', value)}
                    />

                    {/* <BillingSelector
                        options={BILLING_OPTIONS}
                        selected={form.ciclo}
                        onChange={(value) => handleChange('ciclo', value)}
                    /> */}
                </div>

                <div className={styles.infraquote__sidebar}>
                    <Summary form={form} onSubmit={handleSubmit} />
                </div>
            </div>
            ;
        </section>
    );
}
