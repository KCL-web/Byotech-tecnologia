import type { ContactFormData } from '@schema/contactForm';
import { api } from './api';

export const sendContactForm = async (data: ContactFormData) => {
    const response = await api.post('/contact', data);
    return response.data;
};
