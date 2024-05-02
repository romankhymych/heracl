import Link from 'next/link';
// import useStyles from './Logo.styles';
import LogoHeracl from './LogoHeracl';

export default function Logo() {
  // const { classes } = useStyles();

  return (
    <Link href="/" aria-label="Go to the home page">
      <LogoHeracl />
    </Link>
  );
}
