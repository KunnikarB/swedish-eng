import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Svenska App 🇸🇪',
  description: 'Learn Swedish with cards, games and practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 suppressHydrationWarning">
        <Navbar />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
