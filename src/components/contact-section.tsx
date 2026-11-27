"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { socials } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { ContactForm } from "./form/contact-form";

export function ContactSection() {
  return (
    <section className="mt-4 mb-15 md:mt-6 md:mb-10">
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(4px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        <div className="grid grid-cols-1 gap-4 mb-3 md:grid-cols-3">
          <Card className="min-w-0 md:col-span-1">
            <CardHeader>
              <CardTitle className="text-left text-base font-bold tracking-widest mb-1">
                Let's Connect
              </CardTitle>
              <CardDescription>
                Have a project, opportunity, or idea in mind? Feel free to send
                me a message.
              </CardDescription>
            </CardHeader>
            <ContactForm />
          </Card>
          {/* Map */}
          <Card className="min-w-0 self-start gap-0 overflow-hidden p-0 md:col-span-2">
            <div className="relative h-65 w-full sm:h-72 overflow-hidden">
              <iframe
                title="Map location"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=Alauli&maptype=satellite&zoom=14"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Socials */}
            <CardFooter className="flex items-center justify-end gap-2 p-3">
              {socials.map((section) => (
                <Tooltip key={section.name}>
                  <TooltipTrigger>
                    <Button
                      variant="outline"
                      size="icon"
                      nativeButton={false}
                      render={
                        <a
                          href={section.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      className="border-border/60 bg-muted/30 hover:bg-muted"
                    >
                      <Image
                        src={section.icon}
                        alt={section.name}
                        width={28}
                        height={28}
                        sizes="28"
                        className={`shrink-0 object-contain ${
                          section.name === "facebook"
                            ? "rounded-lg"
                            : "rounded-md"
                        }`}
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="capitalize">{section.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
