// import { Logo } from '../Logo/Logo';
import {
  Anchor,
  Burger,
  Container,
  Group,
  // Header as HeaderCore,
  Paper,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import useStyles from './Header.styles';

export const HEADER_HEIGHT = 52;

const links = [
  { link: '/about', label: 'About' },
  { link: '/products', label: 'Products' },
  { link: '/contact', label: 'Contact' },
];

export default function Header() {
  const [opened, { close, toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor component={Link} className={classes.link} key={link.label} href={link.link}>
      {link.label}
    </Anchor>
  ));

  return (
    // <HeaderCore height={HEADER_HEIGHT} className={classes.header}>
    <Container className={classes.container}>
      {/* <Logo /> */}
      {/* <Group spacing={5} className={classes.links}>
          {items}
        </Group> */}

      <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

      <Transition transition="pop-top-right" mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles} onClick={close}>
            {items}
          </Paper>
        )}
      </Transition>
    </Container>
    // </HeaderCore>
  );
}
