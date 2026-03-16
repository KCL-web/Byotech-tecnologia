import { useEffect, useRef, useState } from 'react';
import { animate, useMotionValue, useMotionValueEvent } from 'framer-motion';

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export default function Counter({
    value,
    suffix = '',
    duration = 2,
}: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = useState(0);
    const [start, setStart] = useState(false);

    useMotionValueEvent(motionValue, 'change', (latest) => {
        setDisplay(Math.floor(latest));
    });

    // Detecta quando entra na viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 },
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    // Inicia animação
    useEffect(() => {
        if (!start) return;

        const controls = animate(motionValue, value, {
            duration,
            ease: 'easeOut',
        });

        return controls.stop;
    }, [start, value]);

    return (
        <span ref={ref}>
            {display.toLocaleString('pt-BR')}
            {suffix}
        </span>
    );
}
