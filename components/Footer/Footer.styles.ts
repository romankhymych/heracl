import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  footer: {
    position: 'relative',
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));
