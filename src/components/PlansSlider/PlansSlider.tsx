import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import styles from './PlansSlider.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

export interface Plan {
    name: string;
    description: string;
    price: string;
    features: string[];
    recommended?: boolean;
}

const plans: Plan[] = [
    {
        name: 'Basic',
        description: 'Para pequenas empresas',
        price: 'R$ 149',
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
        price: 'R$ 299',
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
        price: 'R$ 499',
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
        price: 'R$ 899',
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

                <Swiper
                    modules={[Pagination]}
                    loop
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                    }}
                    className={styles.plans__slider}
                >
                    {plans.map((plan) => (
                        <SwiperSlide key={plan.name}>
                            <article
                                className={`${styles.planCard} ${
                                    plan.recommended
                                        ? styles['planCard--recommended']
                                        : ''
                                }`}
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
                                        {plan.price}
                                    </strong>
                                    <span>/mês</span>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
