import { Accordion, List, Text, Title } from '@mantine/core';
// import Link from 'next/link';

import en from '../locales/en.json';

export default function Privacy() {
  return (
    <>
      <Title>{en.privacy.title}</Title>
      <Text component="p">{en.privacy.lastUpdated}</Text>
      <Text component="p">{en.privacy.description}</Text>
      <List>
        {/* <Anchor component={Link} href="/">
          https://www.heracl.com
        </Anchor> */}
        {en.privacy.bullets.map((bullet, index) => (
          <List.Item key={index}>{bullet}</List.Item>
        ))}
      </List>
      <Text component="p">{en.privacy.readingNotice}</Text>
      <Accordion>
        <Accordion.Item value="summaryOfKeyPoints">
          <Accordion.Control>{en.privacy.summaryOfKeyPoints.title}</Accordion.Control>
          <Accordion.Panel>
            <Text component="p">{en.privacy.summaryOfKeyPoints.description}</Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.personalInformationProcessing.title}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.personalInformationProcessing.content}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.sensitivePersonalInformationProcessing.title}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.sensitivePersonalInformationProcessing.content}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.thirdPartyInformationReceiving.title}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.thirdPartyInformationReceiving.content}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.informationProcessingMethods.title}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.informationProcessingMethods.content}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.personalInformationSharing.title}
            </Text>
            <Text component="p">
              {en.privacy.summaryOfKeyPoints.personalInformationSharing.content}
            </Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.informationSecurity.title}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.informationSecurity.content}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.yourPrivacyRights.title}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.yourPrivacyRights.content}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.rightsExercise.title}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.rightsExercise.content}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.fullNoticeReview.title}</Text>
            <Text component="p">{en.privacy.summaryOfKeyPoints.fullNoticeReview.content}</Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="whatInformationDoWeCollect">
          <Accordion.Control>{en.privacy.whatInformationDoWeCollect.title}</Accordion.Control>
          <Accordion.Panel>
            <Text component="p">
              {en.privacy.whatInformationDoWeCollect.personalInformationYouDiscloseToUs}
            </Text>
            <Text component="p">{en.privacy.whatInformationDoWeCollect.inShort}</Text>
            <Text component="p">{en.privacy.whatInformationDoWeCollect.description}</Text>
            <Text component="p">
              {en.privacy.whatInformationDoWeCollect.personalInformationProvidedByYou.title}
            </Text>
            <Text component="p">
              {en.privacy.whatInformationDoWeCollect.personalInformationProvidedByYou.content}
            </Text>
            <List>
              {en.privacy.whatInformationDoWeCollect.bullets.map((bullet, index) => (
                <List.Item key={index}>{bullet}</List.Item>
              ))}
            </List>
            <Text component="p">
              {en.privacy.whatInformationDoWeCollect.sensitiveInformation.title}
            </Text>
            <Text component="p">
              {en.privacy.whatInformationDoWeCollect.sensitiveInformation.content}
            </Text>
            <Text component="p">
              {en.privacy.whatInformationDoWeCollect.allPersonalInformation}
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="Rest">
          <Accordion.Control>Rest info</Accordion.Control>
          <Accordion.Panel>
            <Text component="p">
              HOW DO WE PROCESS YOUR INFORMATION? In Short: We process your information to provide,
              improve, and administer our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your information for other
              purposes with your consent. We process your personal information for a variety of
              reasons, depending on how you interact with our Services, including: To save or
              protect an individual&apos;s vital interest. We may process your information when
              necessary to save or protect an individual&apos;s vital interest, such as to prevent
              harm.
              https://app.termly.io/dashboard/website/5c488eba-fc38-4cd6-b199-ae07564ef961/privacy-policy
              2/6 26/02/2023, 23:57 Termly 3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR
              INFORMATION? In Short: We only process your personal information when we believe it is
              necessary and we have a valid legal reason (i.e. legal basis) to do so under
              applicable law, like with your consent, to comply with laws, to provide you with
              services to enter into or fulfil our contractual obligations, to protect your rights,
              or to fulfil our legitimate business interests. If you are located in the EU or UK,
              this section applies to you. The General Data Protection Regulation (GDPR) and UK GDPR
              require us to explain the valid legal bases we rely on in order to process your
              personal information. As such, we may rely on the following legal bases to process
              your personal information: Consent. We may process your information if you have given
              us permission (i.e. consent) to use your personal information for a specific purpose.
              You can withdraw your consent at any time. Click here to learn more. Legal
              Obligations. We may process your information where we believe it is necessary for
              compliance with our legal obligations, such as to cooperate with a law enforcement
              body or regulatory agency, exercise or defend our legal rights, or disclose your
              information as evidence in litigation in which we are involved. Vital Interests. We
              may process your information where we believe it is necessary to protect your vital
              interests or the vital interests of a third party, such as situations involving
              potential threats to the safety of any person. If you are located in Canada, this
              section applies to you. We may process your information if you have given us specific
              permission (i.e. express consent) to use your personal information for a specific
              purpose, or in situations where your permission can be inferred (i.e. implied
              consent). You can withdraw your consent at any time. Click here to learn more. In some
              exceptional cases, we may be legally permitted under applicable law to process your
              information without your consent, including, for example: If collection is clearly in
              the interests of an individual and consent cannot be obtained in a timely way For
              investigations and fraud detection and prevention For business transactions provided
              certain conditions are met If it is contained in a witness statement and the
              collection is necessary to assess, process, or settle an insurance claim For
              identifying injured, ill, or deceased persons and communicating with next of kin If we
              have reasonable grounds to believe an individual has been, is, or may be victim of
              financial abuse If it is reasonable to expect collection and use with consent would
              compromise the availability or the accuracy of the information and the collection is
              reasonable for purposes related to investigating a breach of an agreement or a
              contravention of the laws of Canada or a province If disclosure is required to comply
              with a subpoena, warrant, court order, or rules of the court relating to the
              production of records If it was produced by an individual in the course of their
              employment, business, or profession and the collection is consistent with the purposes
              for which the information was produced If the collection is solely for journalistic,
              artistic, or literary purposes If the information is publicly available and is
              specified by the regulations 4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL
              INFORMATION?
              https://app.termly.io/dashboard/website/5c488eba-fc38-4cd6-b199-ae07564ef961/privacy-policy
              3/6 26/02/2023, 23:57 Termly In Short: We may share information in specific situations
              described in this section and/or with the following third parties. We may need to
              share your personal information in the following situations: Business Transfers. We
              may share or transfer your information in connection with, or during negotiations of,
              any merger, sale of company assets, financing, or acquisition of all or a portion of
              our business to another company. 5. HOW LONG DO WE KEEP YOUR INFORMATION? In Short: We
              keep your information for as long as necessary to fulfil the purposes outlined in this
              privacy notice unless otherwise required by law. We will only keep your personal
              information for as long as it is necessary for the purposes set out in this privacy
              notice, unless a longer retention period is required or permitted by law (such as tax,
              accounting, or other legal requirements). When we have no ongoing legitimate business
              need to process your personal information, we will either delete or anonymise such
              information, or, if this is not possible (for example, because your personal
              information has been stored in backup archives), then we will securely store your
              personal information and isolate it from any further processing until deletion is
              possible. 6. HOW DO WE KEEP YOUR INFORMATION SAFE? In Short: We aim to protect your
              personal information through a system of organisational and technical security
              measures. We have implemented appropriate and reasonable technical and organisational
              security measures designed to protect the security of any personal information we
              process. However, despite our safeguards and efforts to secure your information, no
              electronic transmission over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
              cybercriminals, or other unauthorised third parties will not be able to defeat our
              security and improperly collect, access, steal, or modify your information. Although
              we will do our best to protect your personal information, transmission of personal
              information to and from our Services is at your own risk. You should only access the
              Services within a secure environment. 7. DO WE COLLECT INFORMATION FROM MINORS? In
              Short: We do not knowingly collect data from or market to children under 18 years of
              age. We do not knowingly solicit data from or market to children under 18 years of
              age. By using the Services, you represent that you are at least 18 or that you are the
              parent or guardian of such a minor and consent to such minor dependent’s use of the
              Services. If we learn that personal information from users less than 18 years of age
              has been collected, we will deactivate the account and take reasonable measures to
              promptly delete such data from our records. If you become aware of any data we may
              have collected from children under age 18, please contact us at privacy@heracl.com. 8.
              WHAT ARE YOUR PRIVACY RIGHTS? In Short: In some regions, such as the European Economic
              Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater
              access to and control over your personal information. You may review, change, or
              terminate your account at any time. In some regions (like the EEA, UK, and Canada),
              you have certain rights under applicable data protection laws. These may include the
              right (i) to request access and obtain a copy of your personal information, (ii) to
              request rectification or erasure; (iii) to restrict the processing of your personal
              information; and (iv) if applicable, to data portability. In certain circumstances,
              you may also have the right to object to the processing of your personal information.
              You can make such a request by contacting us by using the contact details provided in
              the section &apos;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&apos; below.
              https://app.termly.io/dashboard/website/5c488eba-fc38-4cd6-b199-ae07564ef961/privacy-policy
              4/6 26/02/2023, 23:57 Termly We will consider and act upon any request in accordance
              with applicable data protection laws. If you are located in the EEA or UK and you
              believe we are unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory authority. You can find
              their contact details here:
              https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm. If you
              are located in Switzerland, the contact details for the data protection authorities
              are available here: https://www.edoeb.admin.ch/edoeb/en/home.html. Withdrawing your
              consent: If we are relying on your consent to process your personal information, which
              may be express and/or implied consent depending on the applicable law, you have the
              right to withdraw your consent at any time. You can withdraw your consent at any time
              by contacting us by using the contact details provided in the section &apos;HOW CAN
              YOU CONTACT US ABOUT THIS NOTICE?&apos; below. However, please note that this will not
              affect the lawfulness of the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information conducted in
              reliance on lawful processing grounds other than consent. If you have questions or
              comments about your privacy rights, you may email us at privacy@heracl.com. 9.
              CONTROLS FOR DO-NOT-TRACK FEATURES Most web browsers and some mobile operating systems
              and mobile applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting
              you can activate to signal your privacy preference not to have data about your online
              browsing activities monitored and collected. At this stage no uniform technology
              standard for recognising and implementing DNT signals has been finalised. As such, we
              do not currently respond to DNT browser signals or any other mechanism that
              automatically communicates your choice not to be tracked online. If a standard for
              online tracking is adopted that we must follow in the future, we will inform you about
              that practice in a revised version of this privacy notice. 10. DO CALIFORNIA RESIDENTS
              HAVE SPECIFIC PRIVACY RIGHTS? In Short: Yes, if you are a resident of California, you
              are granted specific rights regarding access to your personal information. California
              Civil Code Section 1798.83, also known as the &apos;Shine The Light&apos; law, permits
              our users who are California residents to request and obtain from us, once a year and
              free of charge, information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the names and addresses
              of all third parties with which we shared personal information in the immediately
              preceding calendar year. If you are a California resident and would like to make such
              a request, please submit your request in writing to us using the contact information
              provided below. If you are under 18 years of age, reside in California, and have a
              registered account with Services, you have the right to request removal of unwanted
              data that you publicly post on the Services. To request removal of such data, please
              contact us using the contact information provided below and include the email address
              associated with your account and a statement that you reside in California. We will
              make sure the data is not publicly displayed on the Services, but please be aware that
              the data may not be completely or comprehensively removed from all our systems (e.g.
              backups, etc.). 11. DO WE MAKE UPDATES TO THIS NOTICE? In Short: Yes, we will update
              this notice as necessary to stay compliant with relevant laws.
              https://app.termly.io/dashboard/website/5c488eba-fc38-4cd6-b199-ae07564ef961/privacy-policy
              5/6 26/02/2023, 23:57 Termly We may update this privacy notice from time to time. The
              updated version will be indicated by an updated &apos;Revised&apos; date and the
              updated version will be effective as soon as it is accessible. If we make material
              changes to this privacy notice, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification. We encourage you to
              review this privacy notice frequently to be informed of how we are protecting your
              information. 12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? If you have questions or
              comments about this notice, you may email us at privacy@heracl.com or by post to:
              HERACL Roman Khymych Krynicka 3 Gdansk, Pomeranian 80-393 Poland 13. HOW CAN YOU
              REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? Based on the applicable laws
              of your country, you may have the right to request access to the personal information
              we collect from you, change that information, or delete it. To request to review,
              update, or delete your personal information, please submit a request form by clicking
              here.
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
