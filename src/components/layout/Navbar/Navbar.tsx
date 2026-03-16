import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Menu,
    X,
} from 'lucide-react';
import {
    Server,
    Cloud,
    Mail,
    ShieldCheck,
    DatabaseBackup,
    LifeBuoy,
} from 'lucide-react';

import Logo from '@assets/logo.webp';

import styles from './Navbar.module.scss';
import { useLanguage } from '@/i18n/useLanguage';
import type { TranslationKeys } from '@/i18n/translations';

interface SubMenuItem {
    title: string;
    description: string;
    href: string;
    badge?: string;
    icon?: React.ReactNode;
}

interface NavColumn {
    title: string;
    items: SubMenuItem[];
}

interface NavItem {
    label: string;
    icon?: React.ReactNode;
    href?: string;
    columns?: NavColumn[];
}

const createNavItems = (t: TranslationKeys['nav']): NavItem[] => [
    {
        label: t.home,
        href: '/',
    },
    {
        label: t.about,
        href: '/sobre',
    },
    {
        label: t.services,
        columns: [
            {
                title: t.infrastructure,
                items: [
                    {
                        title: t.hosting,
                        description: t.hostingDesc,
                        href: '/hospedagem',
                        icon: <Server size={18} />,
                    },
                    {
                        title: t.vps,
                        description: t.vpsDesc,
                        href: '/vps',
                        icon: <Cloud size={18} />,
                    },
                ],
            },
            {
                title: t.communication,
                items: [
                    {
                        title: t.email,
                        description: t.emailDesc,
                        href: '/email',
                        icon: <Mail size={18} />,
                    },
                ],
            },
            {
                title: t.security,
                items: [
                    {
                        title: t.backup,
                        description: t.backupDesc,
                        href: '/backup',
                        badge: 'Essencial',
                        icon: <DatabaseBackup size={18} />,
                    },
                    {
                        title: t.audit,
                        description: t.auditDesc,
                        href: '/auditoria',
                        icon: <ShieldCheck size={18} />,
                    },
                ],
            },
            {
                title: t.management,
                items: [
                    {
                        title: t.support,
                        description: t.supportDesc,
                        href: '/suporte-ti',
                        badge: '24/7',
                        icon: <LifeBuoy size={18} />,
                    },
                ],
            },
        ],
    },
    {
        label: t.help,
        href: '/suporte',
    },
];

export const Navbar = () => {
    const [active, setActive] = useState<number | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileStack, setMobileStack] = useState<number | null>(null);

    const toggleMenu = (index: number) => {
        setActive(active === index ? null : index);
    };

    const openSubmenu = (index: number) => {
        setMobileStack(index);
    };

    const closeSubmenu = () => {
        setMobileStack(null);
    };

    const { lang, setLang, t } = useLanguage();

    const NAV_ITEMS = createNavItems(t.nav);

    const toggleLanguage = () => {
        setLang(lang === 'pt' ? 'en' : 'pt');
    };

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileOpen(false);
                setMobileStack(null);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target as Node)
            ) {
                setActive(null);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <header className={styles.header} ref={navbarRef}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </Link>

                <nav className={styles.nav} aria-label="Main navigation">
                    {NAV_ITEMS.map((item, index) => (
                        <div
                            key={item.label}
                            className={styles.navItem}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {item.href ? (
                                <Link className={styles.navItem} to={item.href}>
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    className={styles.menuButton}
                                    onClick={() => toggleMenu(index)}
                                >
                                    {item.label}
                                    {active === index ? (
                                        <ChevronUp size={16} />
                                    ) : (
                                        <ChevronDown size={16} />
                                    )}{' '}
                                </button>
                            )}

                            {item.columns && active === index && (
                                <div className={styles.megaMenu}>
                                    {item.columns.map((column) => (
                                        <div
                                            key={column.title}
                                            className={styles.column}
                                        >
                                            <h4>{column.title}</h4>

                                            {column.items.map((sub) => (
                                                <Link
                                                    key={sub.title}
                                                    to={sub.href}
                                                    className={styles.subItem}
                                                >
                                                    <div
                                                        className={styles.icon}
                                                    >
                                                        {sub.icon}
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.content
                                                        }
                                                    >
                                                        <div
                                                            className={
                                                                styles.subHeader
                                                            }
                                                        >
                                                            <strong>
                                                                {sub.title}
                                                            </strong>

                                                            {sub.badge && (
                                                                <span
                                                                    className={
                                                                        styles.badge
                                                                    }
                                                                >
                                                                    {sub.badge}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <span>
                                                            {sub.description}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <button
                        className={styles.langButton}
                        onClick={toggleLanguage}
                    >
                        {lang.toUpperCase()}
                    </button>

                    <Link to="/login" className={styles.login}>
                        {t.nav.login}
                    </Link>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}
            >
                {/* MAIN PANEL */}
                <div
                    className={`${styles.mobilePanel} ${
                        mobileStack !== null ? styles.slideLeft : ''
                    }`}
                >
                    {NAV_ITEMS.map((item, index) => (
                        <div key={item.label} className={styles.mobileItem}>
                            {item.href ? (
                                <Link
                                    to={item.href}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <button
                                    className={styles.mobileMenuButton}
                                    onClick={() => openSubmenu(index)}
                                >
                                    {item.label}
                                    <ChevronRight size={18} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>

                {/* SUB PANEL */}
                {mobileStack !== null && (
                    <div className={`${styles.mobilePanel} ${styles.subPanel}`}>
                        <button
                            className={styles.mobileBack}
                            onClick={closeSubmenu}
                        >
                            <ChevronLeft /> Voltar
                        </button>

                        {NAV_ITEMS[mobileStack].columns?.map((column) => (
                            <div
                                key={column.title}
                                className={styles.mobileColumn}
                            >
                                {column.items.map((sub) => (
                                    <Link
                                        key={sub.title}
                                        to={sub.href}
                                        className={styles.mobileSubItem}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        <div className={styles.icon}>
                                            {sub.icon}
                                        </div>
                                        <div className={styles.mobileContent}>
                                            <strong>{sub.title}</strong>
                                            <span>{sub.description}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};
