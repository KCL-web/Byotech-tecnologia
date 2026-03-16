import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/useLanguage';

import Logo from '@assets/logo.webp';

import styles from './Footer.module.scss';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src={Logo} alt="Byotec Logo" />
                        </div>

                        <p className={styles.description}>
                            {t.footer.description}
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.title}>{t.footer.quickLinks}</h4>

                        <nav className={styles.links}>
                            <Link to="/" className={styles.link}>
                                {t.nav.home}
                            </Link>
                            <Link to="/sobre" className={styles.link}>
                                {t.nav.about}
                            </Link>
                            <Link to="/servicos" className={styles.link}>
                                {t.nav.services}
                            </Link>
                            <Link to="/suporte" className={styles.link}>
                                {t.nav.help}
                            </Link>
                        </nav>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.title}>
                            {t.footer.servicesTitle}
                        </h4>

                        <nav className={styles.links}>
                            <Link
                                to="/servicos/hosting"
                                className={styles.link}
                            >
                                {t.nav.hosting}
                            </Link>
                            <Link to="/servicos/vps" className={styles.link}>
                                {t.nav.vps}
                            </Link>
                            <Link to="/servicos/email" className={styles.link}>
                                {t.nav.email}
                            </Link>
                            <Link to="/servicos/backup" className={styles.link}>
                                {t.nav.backup}
                            </Link>
                            <Link
                                to="/servicos/auditoria"
                                className={styles.link}
                            >
                                {t.nav.audit}
                            </Link>
                            <Link
                                to="/servicos/suporte"
                                className={styles.link}
                            >
                                {t.nav.support}
                            </Link>
                        </nav>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.title}>
                            {t.footer.contactTitle}
                        </h4>

                        <div className={styles.contact}>
                            <a
                                href={`mailto:${t.contact.emailAddress}`}
                                className={styles.contactItem}
                            >
                                <Mail className={styles.icon} />
                                {t.contact.emailAddress}
                            </a>

                            <div className={styles.address}>
                                <MapPin className={styles.icon} />

                                <a
                                    href="https://maps.app.goo.gl/7m4CBEgVfUsk1sfV7"
                                    target="_blank"
                                    className={styles.addressContent}
                                >
                                    <strong>Byotec Tecnologia</strong>

                                    <span>
                                        R. Capitão e Pacheco Chaves, 1056
                                    </span>
                                    <span>7º Andar - Sala 71</span>
                                    <span>03126-001 - São Paulo - SP</span>
                                    <span>(11) 2219-0986</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.bottomContent}>
                    <span>
                        &copy; {new Date().getFullYear()} Byotec
                        {''} - {''}
                        {t.footer.rights}
                    </span>
                    <span>CNPJ: 12.345.678/0001-90</span>
                </div>
            </div>
        </footer>
    );
};
