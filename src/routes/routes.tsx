import { Layout } from '@/components/layout/Layout';
import ContactPage from '@/pages/Contato/Contato.module';
import Home from '@/pages/Home/Home';
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
                        <Route path="/suporte" element={<ContactPage />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}
