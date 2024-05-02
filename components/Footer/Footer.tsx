import { Anchor, Container, Group, Text } from '@mantine/core';
import Link from 'next/link';
import useStyles from './Footer.styles';

const links = [
  { link: '/privacy', label: 'Privacy Policy' },
  { link: '/terms', label: 'Terms of Use' },
];

export default function Footer() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor
      component={Link}
      // color="dimmed"
      // sx={{ lineHeight: 1 }}
      size="sm"
      key={link.label}
      href={link.link}
    >
      {link.label}
    </Anchor>
  ));

  return (
    // <FooterCore height={60} className={classes.footer}>
    <Container className={classes.inner}>
      <Text>Copyright © 2024 Heracl. All rights reserved.</Text>

      <Group className={classes.links}>{items}</Group>
    </Container>
    // </FooterCore>
  );
}
