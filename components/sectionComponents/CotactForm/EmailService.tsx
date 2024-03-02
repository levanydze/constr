import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

interface FormFields {
  user_name: string;
  user_email: string;
  message: string;
}

export const sendEmail =
  (form: React.RefObject<HTMLFormElement>, handleEmailSent: () => void) =>
  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData: FormFields = {
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value,
      };

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_FORM
        )
        .then(
          (response: EmailJSResponseStatus) => {
            console.log("Email sent successfully:", response);
            handleEmailSent();
          },
          (error: any) => {
            console.error("Failed to send email:", error);
          }
        );
    }
  };
