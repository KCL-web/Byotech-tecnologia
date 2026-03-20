import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './PlansSlider.module.scss';

export interface Plan {
    name: string;
    description: string;
    features: string[];
    recommended?: boolean;
}

const plans: Plan[] = [
    {
        name: 'Basic',
        description: 'Para pequenas empresas',
        recommended: true,
        features: [
            'Suporte até 01 servidor',
            'Suporte até 10 computadores',
            'HelpDesk para até 10 usuários',
            'Hospedagem híbrida',
            '15 contas de e-mail',
            'Suporte até 02 impressoras',
        ],
    },
    {
        name: 'Standard',
        description: 'Empresas em crescimento',
        features: [
            'Suporte até 02 servidores',
            'Suporte até 25 computadores',
            'HelpDesk para até 25 usuários',
            'Hospedagem híbrida',
            '30 contas de e-mail',
            'Suporte até 03 impressoras',
        ],
    },
    {
        name: 'Advanced',
        description: 'Operações mais robustas',
        features: [
            'Suporte até 05 servidores',
            'Suporte até 50 computadores',
            'HelpDesk para até 50 usuários',
            'Hospedagem híbrida',
            '60 contas de e-mail',
            'Suporte até 05 impressoras',
        ],
    },
    {
        name: 'Enterprise',
        description: 'Infraestrutura completa',
        features: [
            'Suporte até 10 servidores',
            'Suporte até 100 computadores',
            'HelpDesk para até 100 usuários',
            'Hospedagem híbrida',
            '120 contas de e-mail',
            'Suporte até 25 impressoras',
        ],
    },
];

export default function PlansSlider() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1);
    const total = plans.length;

    const updateSlidesPerView = useCallback(() => {
        const w = window.innerWidth;
        if (w >= 1200) setSlidesPerView(4);
        else if (w >= 1024) setSlidesPerView(3);
        else if (w >= 768) setSlidesPerView(2);
        else setSlidesPerView(1);
    }, []);

    useEffect(() => {
        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
    }, [updateSlidesPerView]);

    const maxIndex = Math.max(0, total - slidesPerView);

    const goTo = useCallback(
        (index: number) => {
            const clamped = Math.max(0, Math.min(index, maxIndex));
            setActiveIndex(clamped);
            if (trackRef.current) {
                const slideWidth = trackRef.current.offsetWidth / slidesPerView;
                trackRef.current.style.transform = `translateX(-${clamped * slideWidth}px)`;
            }
        },
        [maxIndex, slidesPerView],
    );

    useEffect(() => {
        goTo(Math.min(activeIndex, maxIndex));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slidesPerView]);

    const dots = Array.from({ length: maxIndex + 1 });

    const startXRef = useRef(0);
    const isDraggingRef = useRef(false);

    const handleDragStart = (clientX: number) => {
        startXRef.current = clientX;
        isDraggingRef.current = true;
    };

    const handleDragEnd = (clientX: number) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;

        const diff = startXRef.current - clientX;
        const threshold = 50; // px mínimos para considerar um swipe

        if (diff > threshold) goTo(activeIndex + 1);
        else if (diff < -threshold) goTo(activeIndex - 1);
    };

    const onMouseDown = (e: React.MouseEvent) => handleDragStart(e.clientX);
    const onMouseUp = (e: React.MouseEvent) => handleDragEnd(e.clientX);
    const onMouseLeave = (e: React.MouseEvent) => handleDragEnd(e.clientX);

    // Touch events
    const onTouchStart = (e: React.TouchEvent) =>
        handleDragStart(e.touches[0].clientX);
    const onTouchEnd = (e: React.TouchEvent) =>
        handleDragEnd(e.changedTouches[0].clientX);

    return (
        <section
            className={styles.plans}
            aria-labelledby="plans-heading"
            itemScope
            itemType="https://schema.org/OfferCatalog"
        >
            <div className={styles.plans__container}>
                <header className={styles.plans__header}>
                    <h2 id="plans-heading">
                        Planos de <span>Suporte e Infraestrutura</span>
                    </h2>
                    <p>
                        Soluções completas de suporte técnico, helpdesk
                        personalizado e hospedagem híbrida para empresas que
                        precisam de estabilidade e escalabilidade.
                    </p>
                </header>

                <div
                    className={styles.plans__sliderWrapper}
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseLeave}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    <div className={styles.plans__track} ref={trackRef}>
                        {plans.map((plan) => (
                            <article
                                key={plan.name}
                                className={`${styles.planCard} ${
                                    plan.recommended
                                        ? styles['planCard--recommended']
                                        : ''
                                }`}
                                style={{
                                    flex: `0 0 calc(100% / ${slidesPerView} - 24px * (${slidesPerView} - 1) / ${slidesPerView})`,
                                }}
                                itemScope
                                itemType="https://schema.org/Offer"
                            >
                                {plan.recommended && (
                                    <span className={styles.planCard__badge}>
                                        Recomendado
                                    </span>
                                )}

                                <header className={styles.planCard__header}>
                                    <h3 itemProp="name">{plan.name}</h3>
                                    <p>{plan.description}</p>
                                </header>

                                <div className={styles.planCard__price}>
                                    <strong itemProp="price">
                                        Valor sob consulta
                                    </strong>
                                </div>

                                <button
                                    onClick={() =>
                                        window.location.assign('/plano')
                                    }
                                    className={styles.planCard__button}
                                >
                                    Personalizar plano
                                </button>

                                <ul className={styles.planCard__features}>
                                    {plan.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>

                {dots.length > 1 && (
                    <div className={styles.plans__pagination}>
                        {dots.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.plans__dot} ${
                                    i === activeIndex
                                        ? styles['plans__dot--active']
                                        : ''
                                }`}
                                onClick={() => goTo(i)}
                                aria-label={`Ir para slide ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
