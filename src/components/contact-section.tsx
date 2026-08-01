"use client";

import {
  Card,
  CardAction,
  CardContent,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { socials } from "@/constants";
import Image from "next/image";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="mt-6 mb-15 md:mb-10">
      <div className="grid grid-cols-1 gap-4 mb-3 md:grid-cols-3">
        <Card className="min-w-0 md:col-span-1">
          <CardHeader>
            <CardTitle className="text-left text-base font-bold tracking-widest mb-1">
              Let's Connect
            </CardTitle>
          </CardHeader>
          <form>
            <CardContent>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>

                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>

                {/* Message */}
                <div className="grid gap-2 mb-4">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>

                  <Textarea id="message" name="message" required />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button type="submit" size={"lg"} className="w-full">
                <Send className="size-4" />
                <span className="text-based">Send Message</span>
              </Button>
            </CardFooter>
          </form>
        </Card>
        {/* Map */}
        <Card className="min-w-0 self-start gap-0 overflow-hidden p-0 md:col-span-2">
          <div className="relative h-65 w-full sm:h-61.5 overflow-hidden">
            <iframe
              title="Map location"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=Bagang%20mAS&amp;maptype=satellite&amp;zoom=14"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Socials */}
          <CardFooter className="flex items-center justify-end gap-2 p-3.5">
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
    </section>
  );
}
