import { z } from 'zod';

export const formSchema = z.object({
    servidores: z.string().min(1, 'Selecione a quantidade de servidores'),
    computadores: z.string().min(1, 'Selecione a quantidade de computadores'),
    helpdesk: z.string().min(1, 'Selecione o plano de helpdesk'),
    emails: z.string().min(1, 'Selecione a quantidade de emails'),
    impressoras: z.string().min(1, 'Selecione a quantidade de impressoras'),
    sistema: z.enum(['Linux', 'Windows'], {
        error: () => ({ message: 'Selecione um sistema operacional' }),
    }),
    // ciclo: z.enum(['mensal', 'trimestral', 'semestral', 'anual'], {
    //     error: () => ({ message: 'Selecione um ciclo de pagamento' }),
    // }),
});
export type FormState = z.infer<typeof formSchema>;

//

export const osOptionSchema = z.object({
    value: z.enum(['Linux', 'Windows']),
    icon: z.string().min(1),
    label: z.string().min(1),
    sub: z.string().min(1),
});
export type OsOption = z.infer<typeof osOptionSchema>;

//

export const billingOptionSchema = z.object({
    value: z.enum(['mensal', 'trimestral', 'semestral', 'anual']),
    label: z.string().min(1),
    discount: z.string().nullable(),
});
export type BillingOption = z.infer<typeof billingOptionSchema>;
