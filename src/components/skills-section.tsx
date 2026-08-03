"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronDown,
  ChevronRight,
  GraduationCap,
  SlidersHorizontal,
  TableOfContents,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Image from "next/image";
import { education, technologies } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export function SkillsSection() {
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
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 ">
          <Card className="overflow-hidden lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-1.5 text-left text-base font-bold tracking-widest">
                <span>Technology Stack</span>
              </CardTitle>

              <CardAction>
                <Button
                  nativeButton={false}
                  variant="ghost"
                  size="sm"
                  render={<Link href="/techstack" />}
                  className="gap-1 text-xs text-muted-foreground"
                >
                  View all
                  <ChevronRight className="size-3.5" />
                </Button>
              </CardAction>

              <CardDescription className="col-span-full w-full space-y-4">
                {technologies.slice(0, 3).map((section) => {
                  const visibleItems = section.items.slice(0, 5);
                  const hiddenItems = section.items.slice(5);
                  const hasMore = hiddenItems.length > 0;

                  return (
                    <Collapsible
                      key={section.category}
                      className="group/collapsible w-full"
                    >
                      <div className="mb-2 flex min-h-8 w-full items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold capitalize tracking-wide text-muted-foreground">
                          {section.category}
                        </h3>

                        {hasMore ? (
                          <CollapsibleTrigger
                            render={
                              <Button
                                variant="ghost"
                                size="icon"
                                aria-label={`Show more ${section.category} technologies`}
                              />
                            }
                          >
                            <ChevronDown className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </CollapsibleTrigger>
                        ) : (
                          <div className="size-8 shrink-0" aria-hidden="true" />
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {visibleItems.map((item) => (
                          <Button
                            key={item.language}
                            variant="outline"
                            className="gap-2 border-border/60 bg-muted/30 px-2 font-medium hover:bg-muted"
                          >
                            <Image
                              src={item.icon}
                              alt={item.language}
                              width={19}
                              height={19}
                              sizes="19"
                              className="shrink-0"
                            />

                            <span>{item.language}</span>
                          </Button>
                        ))}
                      </div>

                      {hasMore && (
                        <CollapsibleContent>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {hiddenItems.map((item) => (
                              <Button
                                key={item.language}
                                variant="outline"
                                className="gap-2 border-border/60 bg-muted/30 px-2 font-medium hover:bg-muted"
                              >
                                <Image
                                  src={item.icon}
                                  alt={item.language}
                                  width={19}
                                  height={19}
                                  className="shrink-0"
                                />

                                <span>{item.language}</span>
                              </Button>
                            ))}
                          </div>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  );
                })}
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="p-4">
            {/* Experience */}
            <CardTitle
              className="flex tracking-widest
            items-center gap-1.5 font-bold text-base text-left"
            >
              {/* <GraduationCap
              className="size-6
              shrink-0"
              // strokeWidth={2.2}
              /> */}
              <span>Education</span>
            </CardTitle>
            <CardDescription className="space-y-2">
              <div className="relative ml-2 border-l border-border">
                {education.map((item, index) => (
                  <div
                    key={`${item.year}-${item.program}`}
                    className="relative grid grid-cols-[5.5rem_1fr] gap-3 pb-15 pl-5 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <span
                      className={`absolute -left-1.25 top-0 size-2.5 rounded-full border ${
                        index === 0
                          ? "border-foreground bg-foreground"
                          : "border-border bg-background"
                      }`}
                    />

                    {/* Year */}
                    <span className="text-xs font-sm text-muted-foreground">
                      {item.year}
                    </span>

                    {/* Education Details */}
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                        {item.program}
                      </h3>

                      {item.school && (
                        <p className="text-[13.5px] text-muted-foreground">
                          {item.school}
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
