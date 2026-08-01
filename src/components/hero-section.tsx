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

export function HeroSection() {
  return (
    <section className="w-full">
      <Card className="overflow-hidden">
        <CardHeader className="gap-0">
          <div className="flex min-w-0 flex-col gap-4 items-center sm:flex-row sm:items-start sm:gap-6">
            <div className="relative size-42 shrink-0 overflow-hidden rounded-lg border border-border/60  ">
              {/* Profile */}
              <Image
                // src="/profile/me.png"
                src="/profile/1.jpg"
                alt="Engr. Raven C. Magbanua"
                fill
                priority
                className="object-contain"
              />
            </div>
            {/* DETAILS */}
            <div className="min-w-0 space-y-1.5">
              <CardTitle className="text-center text-lg font-bold tracking-wider sm:text-center md:text-2xl md:flex md:text-left ">
                Engr. Raven C.
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
                  render={
                    <a href="/resume/Raven_Magbanua_Resume2026.pdf" download />
                  }
                >
                  <FileText className="size-4" />
                  Download Resume
                </Button>

                <Button variant="outline">
                  <Mail className="size-4" />
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
    </section>
  );
}
