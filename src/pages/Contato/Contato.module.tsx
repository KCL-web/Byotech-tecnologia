import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { z } from 'zod';

import styles from './Contato.module.scss';
import contactSchema from '@/schema/contactForm';
import { Input } from '@/components/ui/Input/Input';
import { useLanguage } from '@/i18n/useLanguage';
import { Textarea } from '@/components/ui/TextArea/TextArea';
import { Button } from '@/components/ui/Button/Button';

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
    {
        icon: Phone,
        label: 'Telefone',
        value: '(11) 2219-0986',
        href: 'tel:+551122190986',
    },
    {
        icon: Mail,
        label: 'E-mail',
        value: 'contato@byotec.com.br',
        href: 'mailto:contato@byotec.com.br',
    },
    {
        icon: MapPin,
        label: 'Localização',
        value: 'São Paulo, SP — Brasil',
    },
    {
        icon: Clock,
        label: 'Horário',
        value: 'Suporte 24/7/365',
    },
];

const Contato = () => {
    const [loading, setLoading] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        company: '',
        details: '',
    });

    const { t } = useLanguage();

    const [errors, setErrors] = useState<
        Partial<Record<keyof ContactForm, string>>
    >({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof ContactForm]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const result = contactSchema.safeParse(form);

        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};

            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof ContactForm;

                if (!fieldErrors[field]) fieldErrors[field] = err.message;
            });

            setErrors(fieldErrors);
            return;
        }

        setLoading(true);

        setTimeout(
            () => {
                setLoading(false);

                setSubmitted(true);
                setForm({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    details: '',
                });
            },
            setTimeout(() => setSubmitted(false), 5000),
        );
    };

    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.title}>
                        {t.contact.title} <span>{t.contact.span}</span>
                    </h1>

                    {submitted && (
                        <div className={styles.successMessage}>
                            ✅ Mensagem enviada com sucesso! Em breve entraremos
                            em contato.
                        </div>
                    )}

                    <p className={styles.subtitle}>{t.contact.subtitle}</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.formWrapper}>
                            <h2 className={styles.formTitle}>
                                {t.contact.formTitle}
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className={styles.form}
                                noValidate
                            >
                                <div className={styles.row}>
                                    <Input
                                        name="name"
                                        label={t.contact.name}
                                        placeholder={t.contact.namePH}
                                        value={form.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                    />

                                    <Input
                                        name="email"
                                        label={t.contact.email}
                                        placeholder={t.contact.emailPH}
                                        value={form.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                    />
                                </div>

                                <div className={styles.row}>
                                    <Input
                                        name="phone"
                                        label={t.contact.phone}
                                        placeholder={t.contact.phonePH}
                                        value={form.phone}
                                        onChange={handleChange}
                                        error={errors.phone}
                                    />

                                    <Input
                                        name="company"
                                        label={t.contact.company}
                                        placeholder={t.contact.companyPH}
                                        value={form.company}
                                        onChange={handleChange}
                                        error={errors.company}
                                    />
                                </div>

                                <Textarea
                                    label={t.contact.message}
                                    name="details"
                                    value={form.details}
                                    onChange={handleChange}
                                />

                                <Button
                                    type="submit"
                                    variant="gradient"
                                    disabled={loading}
                                    className={styles.button}
                                >
                                    <Send size={16} />
                                    {loading
                                        ? t.contact.sending
                                        : t.contact.send}
                                </Button>
                            </form>
                        </div>

                        <aside className={styles.info}>
                            {contactInfo.map((info) => {
                                const Icon = info.icon;

                                const content = (
                                    <div className={styles.card}>
                                        <div className={styles.icon}>
                                            <Icon size={20} />
                                        </div>

                                        <div>
                                            <span className={styles.label}>
                                                {info.label}
                                            </span>

                                            <p className={styles.value}>
                                                {info.value}
                                            </p>
                                        </div>
                                    </div>
                                );

                                return info.href ? (
                                    <a key={info.label} href={info.href}>
                                        {content}
                                    </a>
                                ) : (
                                    <div key={info.label}>{content}</div>
                                );
                            })}

                            <div className={styles.support}>
                                <h3>Precisa de ajuda urgente?</h3>

                                <p>
                                    Nosso suporte técnico está disponível 24
                                    horas por dia.
                                </p>

                                <a href="tel:+551122190986">
                                    <Phone size={16} />
                                    Ligar agora
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contato;
