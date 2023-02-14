import React from 'react';
import ReactQueryWrapper from '@/app/ReactQueryWrapper';
import Recoil from '@/app/Recoil';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Homepage</Link>
        </nav>
        <Recoil>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </Recoil>
      </body>
    </html>
  );
}
