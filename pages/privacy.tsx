import { Title, Text, List, Anchor, Accordion } from '@mantine/core';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <Title>Privacy page</Title>
      <Text component="p">Last updated March 01, 2023</Text>
      <Text component="p">
        This privacy notice for HERACL Roman Khymych (<b>&#39;Company&#39;</b>,
        <b>&#39;we&#39;</b>, <b>&#39;us&#39;</b>, or <b>&#39;our&#39;)</b>,
        describes how and why we might collect, store, use, and/or share (
        <b>&#39;process&#39;</b>) your information when you use our services (
        <b>&#39;Services&#39;</b>), such as when you:
      </Text>
      <List>
        <List.Item>
          Visit our website at{' '}
          <Anchor component={Link} href="/">
            https://www.heracl.com
          </Anchor>
          , or any website of ours that links to this privacy notice
        </List.Item>
        <List.Item>
          Engage with us in other related ways, including any sales, marketing,
          or events
        </List.Item>
      </List>

      <Accordion>
        <Accordion.Item value="customization">
          <Accordion.Control>Summary of key points</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="flexibility">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="focus-ring">
          <Accordion.Control>No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
