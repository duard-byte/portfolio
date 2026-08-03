"use client";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { about, experiences } from "@/constants";
import { Briefcase, Notebook, User } from "lucide-react";
import { motion } from "framer-motion";
export function AboutSection() {
  return (
    <section className="mt-4 md:mt-6">
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
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
          {/* About */}
          <Card className="lg:col-span-2 overflow-hidden p-4">
            <CardTitle
              className="flex tracking-widest
          items-center gap-1.5 text-base font-bold text-left"
            >
              {/* <Notebook
              className="size-5
            shrink-0"
              // strokeWidth={2.5}
            /> */}
              <span>About Me</span>
            </CardTitle>

            <CardDescription className="space-y-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </CardDescription>
          </Card>

          {/* Experience */}
          <Card className="p-4">
            <CardTitle
              className="flex tracking-widest
          items-center gap-1.5 text-base font-bold text-left"
            >
              {/* <Briefcase
              className="size-5 
            shrink-0"
              // strokeWidth={2.2}
            /> */}
              <span>Experience</span>
            </CardTitle>
            <CardDescription className="space-y-2 mt-2">
              <div className="relative ml-2 border-l">
                {experiences.map((experience, index) => (
                  <div
                    key={`${experience.date}-${experience.work}`}
                    className="relative grid grid-cols-[3rem_1fr] gap-3 pb-10.5 pl-5 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <span
                      className={`absolute -left-1.25 top-0 size-2.5 rounded-full border ${
                        index === 0
                          ? "border-foreground bg-foreground"
                          : "border-border bg-background"
                      }`}
                    />

                    {/* Date */}
                    <span className="pt-0.5 text-xs text-muted-foreground">
                      {experience.date}
                    </span>

                    {/* Experience details */}
                    <div className="min-w-0">
                      <h3 className="sm:text-[15px] text-sm font-semibold leading-snug text-foreground">
                        {experience.work}
                      </h3>

                      {experience.company && (
                        <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
                          {experience.company}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardDescription>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
