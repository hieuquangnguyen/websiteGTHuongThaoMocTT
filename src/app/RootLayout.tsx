import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
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
