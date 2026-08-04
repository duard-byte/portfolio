"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { technologies } from "@/constants";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function TechStackSection() {
  return (
    <main className="mx-auto w-full max-w-260 px-0 py-6 sm:px-6 sm:py-0">
      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(4px)",
        }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        <Card className="overflow-hidden">
          <CardHeader className="gap-6">
            <div className="flex items-center gap-3">
              <Button
                nativeButton={false}
                variant="ghost"
                size="icon"
                aria-label="Go back to portfolio"
                render={<Link href="/" />}
              >
                <ChevronLeft className="size-5" />
              </Button>

              <div className="min-w-0">
                <CardTitle className="text-base font-bold tracking-widest sm:text-lg">
                  Technological Stack
                </CardTitle>

                <CardDescription className="">
                  Technologies and tools I use for Software Development
                </CardDescription>
              </div>
            </div>

            <div className="space-y-7">
              {technologies.map((section) => (
                <section
                  key={section.category}
                  aria-labelledby={`technology-${section.category}`}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <h2
                      id={`technology-${section.category}`}
                      className="shrink-0 text-sm font-semibold capitalize tracking-wide text-foreground"
                    >
                      {section.category}
                    </h2>

                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Button
                        key={item.language}
                        variant="outline"
                        className="h-9 gap-2 border-border/60 bg-muted/30 px-3 font-medium hover:bg-muted"
                      >
                        <Image
                          src={item.icon}
                          alt=""
                          width={19}
                          height={19}
                          sizes="19"
                          className="size-[19px] shrink-0 object-contain"
                        />

                        <span>{item.language}</span>
                      </Button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </main>
  );
}
