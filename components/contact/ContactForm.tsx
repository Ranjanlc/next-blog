import { FC, FormEvent, useEffect, useState } from 'react';
import classes from './ContactForm.module.css';
import Notification from '../ui/Notification';
import { FormData } from '../../interfaces/form';

const sendContactData = async (contactDetails: FormData) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Sth. went wrong');
};

const ContactForm: FC = () => {
  const [emailVal, setEmailVal] = useState<string>('');
  const [messageVal, setMessageVal] = useState<string>('');
  const [nameVal, setNameVal] = useState<string>('');
  const [requestStatus, setRequestStatus] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus('');
        setErrorMsg('');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();

    setRequestStatus('pending');
    try {
      await sendContactData({
        name: nameVal,
        message: messageVal,
        email: emailVal,
      });
      setRequestStatus('success');
      setEmailVal('');
      setMessageVal('');
      setNameVal('');
    } catch (err) {
      setErrorMsg(err.message);
      setRequestStatus('error');
    }
  };
  let notification: { status: string; title: string; message: string };
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message',
      message: 'Your message on its way',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message sent successfully',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: errorMsg,
    };
  }
  return (
    <section className={classes.contact}>
      <h1>How may I help you?</h1>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email"> Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name"> Your Name</label>
            <input
              type="text"
              name="name"
              value={nameVal}
              onChange={(e) => setNameVal(e.target.value)}
              id="name"
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message"> Your Message</label>
          <textarea
            name="message"
            value={messageVal}
            onChange={(e) => setMessageVal(e.target.value)}
            id="message"
            rows={5}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
