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
  GraduationCap,
  SlidersHorizontal,
  TableOfContents,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { education, technologies } from "@/constants";

export function SkillsSection() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 ">
        <Card className="lg:col-span-2 p-4 overflow-hidden">
          {/* About */}
          <CardTitle
            className="flex tracking-widest
            items-center gap-1.5 font-bold text-base text-left"
          >
            {/* <SlidersHorizontal
              className="size-5 
            shrink-0"
              // strokeWidth={2.2}
            /> */}
            <span>Techology Stack</span>
          </CardTitle>
          <CardDescription className="space-y-2">
            {technologies.map((section) => (
              <div key={section.category} className="pb-3">
                <h3 className="mb-2 text-sm font-semibold capitalize tracking-wide text-muted-foreground">
                  {section.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <Button
                      key={item.language}
                      variant={"outline"}
                      // size="sm"
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
              </div>
            ))}
          </CardDescription>
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
                  className="relative grid grid-cols-[5.5rem_1fr] gap-3 pb-8 pl-5 last:pb-0"
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
                    <h3 className="text-sm font-semibold leading-snug text-foreground">
                      {item.program}
                    </h3>

                    {item.school && (
                      <p className="text-xs text-muted-foreground">
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
    </section>
  );
}
