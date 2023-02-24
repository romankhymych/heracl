import { AppShell, Container } from '@mantine/core';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppShell
      styles={(theme) => ({
        main: {
          backgroundColor: theme.colors.gray[1],
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        },
      })}
    >
      <Container>{children}</Container>
    </AppShell>
  );
}
