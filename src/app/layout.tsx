import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive 3D Website',
  description: 'Built with Next.js, React Three Fiber & Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
