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
import { useState } from 'react';
import useStyles, { HEADER_HEIGHT } from './Header.styles';

const links = [
  { link: '/about', label: 'About' },
  { link: '/products', label: 'Products' },
  { link: '/contact', label: 'Contact' },
];

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <HeaderCore height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
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
