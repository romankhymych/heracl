import { FC } from "react";
import { Header as HeaderCore, Text } from "@mantine/core";

const Header: FC = () => (
  <HeaderCore
    height={50}
    style={{ display: "flex", alignItems: "center" }}
    p="md"
  >
    <Text>Heracl</Text>
  </HeaderCore>
);

export default Header;
