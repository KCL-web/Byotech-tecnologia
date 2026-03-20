import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';

import Logo from '@assets/logo.webp';

import styles from './Footer.module.scss';

export const Footer = () => {
    const { t } = useLanguage();

    const footerLinks = [
        { label: t.nav.home, url: '/' },
        { label: t.nav.about, url: '/sobre' },
        { label: t.nav.services, url: '/servicos' },
        { label: t.nav.help, url: '/suporte' },
    ];

    const serviceLinks = [
        { to: '/servicos', label: t.nav.hosting },
        { to: '/servicos', label: t.nav.vps },
        { to: '/servicos', label: t.nav.email },
        { to: '/servicos', label: t.nav.backup },
        { to: '/servicos', label: t.nav.audit },
        { to: '/servicos', label: t.nav.support },
    ];

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.footer__container}>
                <div className={styles.footer__grid}>
                    <section
                        className={styles.footer__brand}
                        aria-labelledby="footer-brand"
                    >
                        <figure className={styles.footer__logo}>
                            <img
                                src={Logo}
                                alt="Byotec Tecnologia - Infraestrutura de TI e Cloud"
                                width="140"
                                height="40"
                                loading="lazy"
                            />
                        </figure>

                        <p className={styles.footer__description}>
                            {t.footer.description}
                        </p>
                    </section>

                    <nav
                        className={styles.footer__column}
                        aria-labelledby="footer-nav-title"
                    >
                        <h2
                            id="footer-nav-title"
                            className={styles.footer__title}
                        >
                            {t.footer.quickLinks}
                        </h2>

                        <ul className={styles.footer__links}>
                            {footerLinks.map((item) => (
                                <li key={item.url}>
                                    <Link
                                        to={item.url}
                                        className={styles.footer__link}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav
                        className={styles.footer__column}
                        aria-labelledby="footer-services-title"
                    >
                        <h2
                            id="footer-services-title"
                            className={styles.footer__title}
                        >
                            {t.footer.servicesTitle}
                        </h2>

                        <ul className={styles.footer__links}>
                            {serviceLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className={styles.footer__link}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <section
                        className={styles.footer__column}
                        aria-labelledby="footer-contact-title"
                    >
                        <h2
                            id="footer-contact-title"
                            className={styles.footer__title}
                        >
                            {t.footer.contactTitle}
                        </h2>

                        <address className={styles.footer__contact}>
                            <a
                                href={`mailto:${t.contact.emailAddress}`}
                                className={styles.footer__contactItem}
                            >
                                <Mail className={styles.footer__icon} />
                                <span>{t.contact.emailAddress}</span>
                            </a>

                            <a
                                href="https://maps.app.goo.gl/7m4CBEgVfUsk1sfV7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.footer__address}
                            >
                                <MapPin className={styles.footer__icon} />

                                <span className={styles.footer__addressContent}>
                                    <strong>Byotec Tecnologia</strong>

                                    <span>
                                        R. Capitão e Pacheco Chaves, 1056
                                    </span>
                                    <span>7º Andar - Sala 71</span>
                                    <span>03126-001 - São Paulo - SP</span>
                                    <span>(11) 2219-0986</span>
                                </span>
                            </a>
                        </address>
                    </section>
                </div>
            </div>

            <div className={styles.footer__bottom}>
                <div className={styles.footer__bottomContent}>
                    <p>
                        &copy; {new Date().getFullYear()} Byotec —{' '}
                        {t.footer.rights}
                    </p>

                    <p>CNPJ: 39.154.437/0001-1</p>
                </div>
            </div>
        </footer>
    );
};
