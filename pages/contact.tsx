import { FC } from 'react';
import ContactForm from '../components/contact/ContactForm';
import Head from 'next/head';

const ContactPage: FC = () => {
  return (
    <>
      <Head>
        <title>Contact me!</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
