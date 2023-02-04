import Link from 'next/link';

import HeraclLogo from './HeraclLogo';
import useStyles from './Logo.styles';

export default function Logo() {
  const { classes } = useStyles();

  return (
    <Link href="/" className={classes.logo} aria-label="Go to the home page">
      <HeraclLogo />
    </Link>
  );
}
