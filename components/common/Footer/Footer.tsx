import {
  Anchor,
  Container,
  Footer as FooterCore,
  Group,
  Text,
} from '@mantine/core';
import Link from 'next/link';
import useStyles from './Footer.styles';

const links = [
  { link: '/privacy', label: 'Privacy Policy' },
  { link: '/terms', label: 'Terms of Use' },
];

export default function Footer() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} legacyBehavior>
      <Anchor<'a'> color="dimmed" sx={{ lineHeight: 1 }} size="sm">
        {link.label}
      </Anchor>
    </Link>
  ));

  return (
    <FooterCore height={60} className={classes.footer}>
      <Container className={classes.inner}>
        <Text>Copyright © 2023 Heracl. All rights reserved.</Text>

        <Group className={classes.links}>{items}</Group>
      </Container>
    </FooterCore>
  );
}
