"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { BadgeCheck, FileText, Mail, MapPin, User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { contact, role } from "@/constants";
import { usePortfolioMode } from "@/context/portfolio-mode-context";
import { resume } from "@/constants";

export function HeroSection() {
  const { mode } = usePortfolioMode();
  const currentRole = role[mode];

  return (
    <section className="w-full">
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
        <Card className="overflow-hidden">
          <CardHeader className="gap-0">
            <div className="flex min-w-0 flex-col gap-4 items-center sm:flex-row sm:items-start sm:gap-6">
              <div className="group relative size-42 shrink-0 overflow-hidden rounded-lg border border-border/60">
                <Image
                  src="/profile/raven.jpg"
                  alt="Engr. Raven C. Magbanua"
                  fill
                  sizes="168px"
                  priority
                  className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                />

                <Image
                  src="/profile/raven-dark.png"
                  alt="Engr. Raven C. Magbanua wearing sunglasses"
                  fill
                  sizes="168px"
                  className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              {/* DETAILS */}
              <div className="min-w-0 space-y-1.5">
                <CardTitle className="text-center text-lg font-bold tracking-wider sm:text-center md:text-2xl md:flex md:text-left ">
                  Raven
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    {"\u00a0"}
                    Magbanua
                    <BadgeCheck
                      aria-label="Verified profile"
                      className="size-5 shrink-0 fill-blue-600 text-white sm:size-6"
                    />
                  </span>
                </CardTitle>

                <CardDescription className="flex items-center gap-1.5 text-sm text-left mt-2 md:mt-0">
                  <MapPin className="size-4 shrink-0" />
                  <span className="">Masantol, Pampanga</span>
                </CardDescription>

                <p className="text-sm font-medium text-foreground sm:text-base">
                  Associate Software Engineer
                </p>

                <div className="flex items-center gap-2 pt-1 justify-evenly md:justify-start">
                  <Button
                    nativeButton={false}
                    render={<a href={resume} download />}
                  >
                    Download Resume
                  </Button>

                  <Button
                    variant="outline"
                    aria-label="Email Raven"
                    title="Send email"
                    className=" shrink-0"
                    nativeButton={false}
                    render={
                      <a
                        href={contact}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Image
                      src={"/socials/google-gmail.png"}
                      alt="
                                    gmail"
                      width={19}
                      height={19}
                      sizes="19"
                      className="shrink-0 size-3.5"
                    />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>

            <CardAction className="self-start hidden md:block">
              <ModeToggle />
            </CardAction>
          </CardHeader>
        </Card>
      </motion.div>
    </section>
  );
}
