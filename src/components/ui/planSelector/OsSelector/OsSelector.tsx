import type { OsOption } from '@/schema/infraQuote.schema';
import styles from './OsSelector.module.scss';

type OsSelectorProps = {
    options: OsOption[];
    selected: OsOption['value'];
    onChange: (value: OsOption['value']) => void;
};

export function OsSelector({ options, selected, onChange }: OsSelectorProps) {
    return (
        <div className={styles['os-selector']}>
            <h3 className={styles['os-selector__title']}>
                Sistema Operacional
            </h3>
            <div className={styles['os-selector__grid']}>
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        aria-pressed={selected === opt.value}
                        className={`${styles['os-selector__item']} ${
                            selected === opt.value
                                ? styles['os-selector__item--active']
                                : ''
                        }`}
                        onClick={() => onChange(opt.value)}
                    >
                        <span className={styles['os-selector__item-icon']}>
                            <img src={opt.icon} alt={opt.label} />
                        </span>
                        <div className={styles['os-selector__item-body']}>
                            <span className={styles['os-selector__item-label']}>
                                {opt.label}
                            </span>
                            <span className={styles['os-selector__item-sub']}>
                                {opt.sub}
                            </span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
