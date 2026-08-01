"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certificates, projects } from "@/constants";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export function ShowCaseSection() {
  return (
    <section className="mt-4">
      <div className="grid grid-cols-1 item-start gap-4 lg:grid-cols-3">
        {/* Recent Projects */}
        <Card className="lg:col-span-2 p-4 overflow-hidden">
          <CardTitle
            className="flex tracking-widest
          items-center gap-1.5 text-base font-bold text-left"
          >
            Recent Projects
          </CardTitle>
          <CardDescription className="grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2 space-y-1 mt-1">
            {projects.map((section) => (
              <Card key={section.name} className="h-full overflow-hidden p-4">
                <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                  {/* GitHub Logo */}
                  <Image
                    src="/icons/dev/github.png"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="shrink-0"
                  />

                  {/* Project Details */}
                  <div className="min-w-0">
                    <CardTitle className="text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                      {section.name}
                    </CardTitle>

                    <CardDescription className="mt-1 line-clamp-4">
                      {section.description}
                    </CardDescription>
                    {/* <Badge className="mt-1">{section.language}</Badge> */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {section.language.slice(0, 3).map((language) => (
                        <Badge key={language} variant="secondary">
                          {language}
                        </Badge>
                      ))}

                      {section.language.length > 3 && (
                        <Badge variant="outline">
                          +{section.language.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardDescription>
        </Card>

        {/* Certificates */}
        <Card className=" p-4 overflow-hidden">
          <CardTitle
            className="flex tracking-widest
          items-center gap-1.5 text-base font-bold text-left"
          >
            Recent Certificates
          </CardTitle>
          <CardDescription className="grid gap-3">
            {certificates.slice(0, 3).map((section) => (
              <Card key={section.title} className="overflow-hidden p-4">
                <div className="grid grid-cols-[auto_1fr] items-start gap-4">
                  {/* Company Logo */}
                  <Image
                    src={section.logo}
                    alt={section.company}
                    width={50}
                    height={50}
                    className="shrink-0 rounded-md object-contain"
                  />

                  {/* Certificate Details */}
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                        {section.company}
                      </CardTitle>

                      <span className="shrink-0 text-xs text-muted-foreground">
                        {section.date}
                      </span>
                    </div>

                    <CardDescription className="mt-1 line-clamp-4">
                      {section.title}
                    </CardDescription>
                  </div>
                </div>
              </Card>
            ))}
          </CardDescription>
        </Card>
      </div>
    </section>
  );
}
