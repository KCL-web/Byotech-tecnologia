import type { BillingOption } from '@/schema/infraQuote.schema';
import styles from './BillingSelector.module.scss';

type BillingSelectorProps = {
    options: BillingOption[];
    selected: BillingOption['value'];
    onChange: (value: BillingOption['value']) => void;
};

export function BillingSelector({
    options,
    selected,
    onChange,
}: BillingSelectorProps) {
    return (
        <div className={styles['billing-selector']}>
            <h3 className={styles['billing-selector__title']}>
                Ciclo de pagamento
            </h3>
            <div className={styles['billing-selector__grid']}>
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        aria-pressed={selected === opt.value}
                        className={`${styles['billing-selector__item']} ${
                            selected === opt.value
                                ? styles['billing-selector__item--active']
                                : ''
                        }`}
                        onClick={() => onChange(opt.value)}
                    >
                        <span
                            className={styles['billing-selector__item-label']}
                        >
                            {opt.label}
                        </span>
                        {opt.discount ? (
                            <span
                                className={
                                    styles['billing-selector__item-discount']
                                }
                            >
                                {opt.discount}
                            </span>
                        ) : (
                            <span
                                className={
                                    styles['billing-selector__item-nodiscount']
                                }
                            >
                                Sem desconto
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
