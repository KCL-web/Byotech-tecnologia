import styles from './OptionGroup.module.scss';

type Option = {
    value: string;
    label: string;
    sub: string;
};

type OptionGroupProps = {
    title: string;
    options: Option[];
    selected: string;
    onChange: (value: string) => void;
};

export function OptionGroup({
    title,
    options,
    selected,
    onChange,
}: OptionGroupProps) {
    const handleClick = (value: string) => {
        onChange(selected === value ? '' : value);
    };

    return (
        <div className={styles['option-group']}>
            <h3 className={styles['option-group__title']}>{title}</h3>
            <div className={styles['option-group__grid']}>
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        aria-pressed={selected === opt.value}
                        className={`${styles['option-group__item']} ${
                            selected === opt.value
                                ? styles['option-group__item--active']
                                : ''
                        }`}
                        onClick={() => handleClick(opt.value)}
                    >
                        <span className={styles['option-group__item-value']}>
                            {opt.label}
                        </span>
                        <span className={styles['option-group__item-sub']}>
                            {opt.sub}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
