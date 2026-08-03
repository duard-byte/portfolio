"use client";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { certificates, projects } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { GitBranchPlus, GitMerge } from "lucide-react";
import { motion } from "framer-motion";
export function ShowCaseSection() {
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
          {/* Recent Projects */}
          <Card className="overflow-hidden p-4 lg:col-span-2">
            <CardTitle className="flex items-center gap-1.5 text-left text-base font-bold tracking-widest">
              Recent Projects
            </CardTitle>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
              {projects.map((section) => (
                <Card key={section.name} className="gap-0 overflow-hidden py-0">
                  {/* Project Content */}
                  <div className="p-4">
                    <CardTitle className="text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                      {section.name}
                    </CardTitle>

                    <CardDescription className="mt-1">
                      <p className="line-clamp-3">{section.description}</p>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {section.language.slice(0, 3).map((language) => (
                          <Badge key={language} variant="secondary">
                            {language}
                          </Badge>
                        ))}

                        {section.language.length > 3 && (
                          <Badge variant="outline">
                            +{section.language.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardDescription>
                  </div>

                  {/* Project Footer */}
                  <CardFooter className="border-t p-2 flex justify-between">
                    <Button
                      variant="default"
                      className="gap-2 px-2 font-medium "
                      nativeButton={false}
                      render={
                        <a
                          href={section.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <Image
                        src="/socials/github-light.png"
                        alt="Github"
                        width={18}
                        height={18}
                        sizes="18"
                        className="shrink-0 dark:invert"
                      />

                      <span>Github</span>
                    </Button>
                    {section.live && (
                      <Badge
                        variant="secondary"
                        render={
                          <a
                            href={section.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        className="gap-1.5"
                      >
                        <span className="inline-block size-2 shrink-0 rounded-full bg-emerald-500" />
                        Live now
                      </Badge>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Card>

          {/* Certificates */}
          <Card className="overflow-hidden p-4">
            <CardTitle className="text-left text-base font-bold tracking-widest">
              Recent Certificates
            </CardTitle>

            <CardDescription className="space-y-2">
              {certificates.slice(0, 4).map((section, index) => (
                <div key={section.title}>
                  <div className="">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="line-clamp-2 text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                        {section.title}
                      </CardTitle>

                      <span className="shrink-0 text-xs text-muted-foreground">
                        {section.date}
                      </span>
                    </div>

                    <p className="mt-1 line-clamp-1 text-xs text-muted-foreground mb-4">
                      {section.company}
                    </p>
                  </div>

                  {index !== certificates.slice(0, 4).length - 1 && (
                    <Separator />
                  )}
                </div>
              ))}
            </CardDescription>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
