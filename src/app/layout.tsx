import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HƯƠNG THẢO MỘC',
  description: 'Hương Thảo Dược, Natural incense, Nhang Tự Nhiên, Hương Thảo Mộc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <>{children}</>
        <>
          <div id="modal-root"></div>
        </>
      </body>
    </html>
  );
}
