import type { FC, ReactNode } from 'react';

import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Toaster } from "@/components/ui/toaster"

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">{children}</main>
        <Toaster />
      </div>
    </>
  );
};


export default MainLayout;