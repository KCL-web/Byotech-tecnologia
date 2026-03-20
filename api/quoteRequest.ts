import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export type QuoteRequestBody = {
    servidores: string;
    computadores: string;
    helpdesk: string;
    emails: string;
    impressoras: string;
    sistema: 'Windows' | 'Linux';
};

const FIELD_LABELS: Record<keyof QuoteRequestBody, string> = {
    servidores: 'Quantidade de servidores',
    computadores: 'Suporte de computadores',
    helpdesk: 'Help Desk',
    emails: 'Contas de e-mail',
    impressoras: 'Suporte de impressoras',
    sistema: 'Sistema operacional',
};

function buildEmailHtml(data: QuoteRequestBody): string {
    const rows = (Object.keys(FIELD_LABELS) as (keyof QuoteRequestBody)[])
        .map((key) => {
            const label = FIELD_LABELS[key];
            const value = data[key];
            return value ? `<p><strong>${label}:</strong> ${value}</p>` : '';
        })
        .join('');

    return `
        <h2>Novo orçamento solicitado</h2>
        ${rows}
    `;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const body = req.body as QuoteRequestBody;
        const {
            servidores,
            computadores,
            helpdesk,
            emails,
            impressoras,
            sistema,
        } = body;

        if (
            !servidores ||
            !computadores ||
            !helpdesk ||
            !emails ||
            !impressoras ||
            !sistema
        ) {
            return res.status(400).json({
                error: 'Todos os campos são obrigatórios',
            });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `Site <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL,
            replyTo: process.env.SMTP_USER,
            subject: 'Novo orçamento solicitado pelo site',
            html: buildEmailHtml(body),
        });

        return res.status(200).json({
            success: true,
            message: 'Orçamento enviado com sucesso',
        });
    } catch (error: unknown) {
        const message =
            error instanceof Error ? error.message : 'Erro ao enviar orçamento';

        return res.status(500).json({
            error: message,
        });
    }
}
