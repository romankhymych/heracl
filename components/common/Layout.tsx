import { Footer, Header } from "@components/common";
import { AppShell } from "@mantine/core";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <AppShell header={<Header />} footer={<Footer />}>
    {children}
  </AppShell>
);

export default Layout;
