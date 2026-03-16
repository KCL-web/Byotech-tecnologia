import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (
    threshold: number = 0.15,
    rootMargin: string = '0px',
) => {
    const ref = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin,
            },
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
            observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return { ref, isVisible };
};
