import { Logo } from '@components/common';
import {
  Burger,
  Container,
  Group,
  Header as HeaderCore,
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
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} legacyBehavior>
      <a className={classes.link}>{link.label}</a>
    </Link>
  ));

  return (
    <HeaderCore height={HEADER_HEIGHT} className={classes.header}>
      <Container className={classes.container}>
        <Logo />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </HeaderCore>
  );
}
