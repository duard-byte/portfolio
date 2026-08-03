"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "@/components/ui/toast";
import {
  contactSchema,
  type ContactFormValues,
} from "@/schemas/contact.schema";
import { sendContactEmail } from "@/lib/email";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    try {
      await sendContactEmail(data);
      toast.add({
        title: "Message sent",
        description: "Thanks for reaching out. I’ll get back to you soon.",
        actionProps: {
          children: "Close",
          onClick() {
            toast.close();
          },
        },
      });

      form.reset();
    } catch (error) {
      toast.add({
        title: "Failed to send message",
        description: "Please try again.",
        actionProps: {
          children: "Close",
          onClick() {
            toast.close();
          },
        },
      });
      console.error("Failed to send contact email:", error);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <CardContent>
        <div className="flex flex-col gap-4">
          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="grid gap-2">
                <FieldLabel htmlFor="contact-email" className="text-sm">
                  Email
                </FieldLabel>

                <Input
                  {...field}
                  id="contact-email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* Message */}
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="grid gap-2 mb-4"
              >
                <FieldLabel htmlFor="contact-message" className="text-sm">
                  Message
                </FieldLabel>

                <Textarea
                  {...field}
                  id="contact-message"
                  placeholder="Type your message here"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          <span className="text-based">
            {form.formState.isSubmitting ? (
              <Loader className="animate-spin size-4" />
            ) : (
              "Send Message"
            )}
          </span>
        </Button>
      </CardFooter>
    </form>
  );
}
