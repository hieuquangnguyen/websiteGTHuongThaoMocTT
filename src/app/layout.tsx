import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'THẢO MỘC HƯƠNG T&T',
  description:
    'Hương Thảo Dược, Natural incense, Nhang Tự Nhiên, Hương Thảo Mộc, Thảo Mộc Hương, huong tu nhien, hương sạch, nhang sạch',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <>{children}</>
        <>
          <div id="modal-root"></div>
        </>
        <Analytics />
      </body>
    </html>
  );
}
