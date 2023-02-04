import {
  Anchor,
  Container,
  Footer as FooterCore,
  Group,
  Text,
} from '@mantine/core';
import useStyles from './Footer.styles';

const links = [
  { link: '/privacy', label: 'Privacy Policy' },
  { link: '/terms', label: 'Terms of Use' },
  { link: '/cookies', label: 'Cookies' },
];

export default function Footer() {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <FooterCore height={60} className={classes.footer}>
      <Container className={classes.inner}>
        <Text>Copyright © 2023 Heracl. All rights reserved.</Text>

        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <Text>Change Language</Text>
        </Group>
      </Container>
    </FooterCore>
  );
}
