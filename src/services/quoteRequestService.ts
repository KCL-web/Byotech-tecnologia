import type { FormState } from '@/schema/infraQuote.schema';

export type QuoteRequestPayload = Omit<FormState, 'ciclo'>;

export type QuoteRequestResponse = {
    success: boolean;
    message: string;
};

export type QuoteRequestError = {
    error: string;
};

export async function submitQuoteRequest(
    payload: QuoteRequestPayload,
): Promise<QuoteRequestResponse> {
    const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const data: QuoteRequestResponse | QuoteRequestError =
        await response.json();

    if (!response.ok) {
        const errorData = data as QuoteRequestError;
        throw new Error(errorData.error ?? 'Erro ao enviar orçamento');
    }

    return data as QuoteRequestResponse;
}
