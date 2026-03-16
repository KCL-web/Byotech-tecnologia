import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
