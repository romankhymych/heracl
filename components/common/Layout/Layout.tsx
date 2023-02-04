import { Footer, Header } from '@components/common';
import { AppShell, Container } from '@mantine/core';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      <Container>{children}</Container>
    </AppShell>
  );
}
