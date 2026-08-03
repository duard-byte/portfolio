import emailjs from "@emailjs/browser";
import type { ContactFormValues } from "@/schemas/contact.schema";

export async function sendContactEmail(values: ContactFormValues) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS configuration is missing.");
  }

  return emailjs.send(
    serviceId,
    templateId,
    {
      email: values.email,
      message: values.message,
      time: new Date().toLocaleString(),
    },
    {
      publicKey,
    },
  );
}
