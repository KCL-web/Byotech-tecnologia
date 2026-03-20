import { Layout } from '@/components/layout/Layout';
import ContactPage from '@/pages/Contato/Contato.module';
import Home from '@/pages/Home/Home';
import QuoteRequest from '@/pages/Orcamento/QuoteRequest';
import Services from '@/pages/Servicos/Services';
import Sobre from '@/pages/Sobre/Sobre';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/servicos" element={<Services />} />
                        <Route path="/suporte" element={<ContactPage />} />
                        <Route path="/plano" element={<QuoteRequest />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}
