"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ReservationContactForm.module.css";

interface FormValues {
  user_name: string;
  user_email: string;
  user_phone: string;
  user_date: string;
  user_time: string;
  user_quantity: string;
  message: string;
}

export default function ReservationContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailSent = () => {
    setEmailSent(true);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data: FormValues = {
      user_name: formData.get("user_name") as string,
      user_email: formData.get("user_email") as string,
      user_phone: formData.get("user_phone") as string,
      user_date: formData.get("user_date") as string,
      user_time: formData.get("user_time") as string,
      user_quantity: formData.get("user_quantity") as string,
      message: formData.get("message") as string,
    };

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE as string,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_FORM
      )
      .then(() => {
        handleEmailSent();
      });
  };

  return (
    <div className="container1">
      <div className={styles.reservationWrapper}>
        <div className={styles.reservation}>
          <form
            className={`${styles.form} ${emailSent ? styles.none : ""}`}
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className={`${styles.input}`}
              type="text"
              name="user_name"
              placeholder="Enter your full name"
            />
            <div>
              <input
                className={`${styles.input}`}
                type="email"
                name="user_email"
                placeholder="Email"
              />
              <input
                className={`${styles.input}`}
                type="tel"
                name="user_phone"
                placeholder="Phone number"
              />
            </div>
            <div>
              <input
                className={`${styles.input}`}
                type="date"
                name="user_date"
                placeholder="Date"
              />
              <input
                className={`${styles.input}`}
                type="time"
                name="user_time"
                placeholder="Time"
              />
            </div>
            <input
              className={`${styles.input}`}
              type="text"
              name="user_quantity"
              placeholder="Number of people"
            />
            <textarea
              className={`${styles.textArea} ${styles.input}`}
              name="message"
              placeholder="Any special requirements?"
            />
            <input
              className={` button1 ${styles.buttonSend}`}
              type="submit"
              value="Send"
            />
          </form>
          <div className={emailSent ? styles.formSent : styles.hide}>
            <h6> Thank you for your request</h6>
            <h5>Wait for our confirmation</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
