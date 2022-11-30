import { useState } from "react";
import {
  AppShell,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      }}
      header={
        <Header height={{ base: 50 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Heracl</Text>
          </div>
        </Header>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
    >
      <Text>Welcome to Heracl</Text>
    </AppShell>
  );
}
