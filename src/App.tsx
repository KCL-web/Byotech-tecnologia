import CookiesBanner from './components/CookiesBanner/CookiesBanner';
import { LanguageProvider } from './i18n/LanguageProvider';
import AppRoutes from './routes/routes';

function App() {
    return (
        <>
            <LanguageProvider>
                <AppRoutes />
                <CookiesBanner />
            </LanguageProvider>
        </>
    );
}

export default App;
