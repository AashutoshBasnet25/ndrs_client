import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nepal Disaster Response System',
  description: 'A comprehensive platform for managing disaster response operations in Nepal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-background p-0 md:p-4">
            <main className="container mx-auto bg-white/80 rounded-lg shadow-lg overflow-hidden">
              <nav>
                <Navbar />
              </nav>
              <section 
                className="min-h-[calc(100vh-4rem)] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/background.png')" }}
              >
                {children}
              </section>
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}