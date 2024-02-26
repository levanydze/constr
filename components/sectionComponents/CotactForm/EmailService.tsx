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
          "service_u6gjg6s",
          "template_jsv5qfx",
          form.current,
          "y8nREYl_1OCsl1rBw"
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
