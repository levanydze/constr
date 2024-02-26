"use client";
import React, { useRef, useState } from "react";
import { sendEmail } from "./EmailService";
import styles from "./ContactForm.module.css";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const onSubmit = sendEmail(form, handleEmailSent);

  return (
    <>
      <div className={styles.formHead}>
        <h2>Contact Us</h2>
        <h3>For Better Experience</h3>
        <p className="twoLines"></p>
      </div>
      <form
        className={`${styles.form} ${emailSent ? styles.none : ""}`}
        ref={form}
        onSubmit={onSubmit}
      >
        <div className={styles.smallInputs}>
          <input
            className={`${styles.input} ${styles.miniInput}`}
            type="text"
            name="user_name"
            placeholder="Enter your full name"
          />
          <input
            className={`${styles.input} ${styles.miniInput}`}
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>

        <textarea
          className={`${styles.textArea} ${styles.input}`}
          name="message"
          placeholder="Your message here"
        />

        <input
          className={`button1 ${styles.buttonSend}`}
          type="submit"
          value="Send"
        />
      </form>
      <div className={emailSent ? styles.formSent : styles.hide}>
        <h6> Thank you for your message</h6>
      </div>
    </>
  );
};

export default ContactForm;
