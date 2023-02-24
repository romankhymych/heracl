import { Logo } from '@components/common';
import { Text, Title } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Logo />
      <Title
        style={{
          fontSize: '3rem',
          marginTop: '1rem',
        }}
      >
        We&apos;ll be back.
      </Title>
      <Text fz="xl" color="gray.7">
        We&apos;re busy updating the Heracl page for you and will be back soon.
      </Text>
    </>
  );
}
