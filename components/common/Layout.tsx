import { FC } from "react";
import { AppShell } from "@mantine/core";
import { Header, Footer } from "@components/common";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <AppShell header={<Header />} footer={<Footer />}>
    {children}
  </AppShell>
);

export default Layout;
