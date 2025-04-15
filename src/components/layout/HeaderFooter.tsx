"use client";

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface HeaderFooterProps {
  children: ReactNode;
}

const HeaderFooter = ({ children }: HeaderFooterProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HeaderFooter;