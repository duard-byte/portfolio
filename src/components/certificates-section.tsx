"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { certificates } from "@/constants";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type CertificateFilter =
  | "all"
  | "cisco"
  | "icpep"
  | "dict"
  | "psu"
  | "ust"
  | "psite"
  | "mrsp"
  | "analytics-vidhya";

const certificateCompanies: Record<
  Exclude<CertificateFilter, "all">,
  string
> = {
  cisco: "Cisco Networking Academy",
  icpep: "Institute of Computer Engineers of the Philippines",
  dict: "Department of Information and Communication Technology",
  psu: "Pampanga State University",
  ust: "University of Santo Tomas",
  psite: "Philippine Society of Information Technology Educators",
  mrsp: "MRSP Pampanga Student Chapter",
  "analytics-vidhya": "Analytics Vidhya",
};

export function CertificatesGallerySection() {
  const [activeTab, setActiveTab] = useState<CertificateFilter>("all");

  const filteredCertificates = certificates
    .filter((certificate) => certificate.image !== "/")
    .filter((certificate) => {
      if (activeTab === "all") {
        return true;
      }

      return certificate.company === certificateCompanies[activeTab];
    })
    .sort((a, b) => Number(b.date) - Number(a.date));

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
        <Card className="w-full overflow-hidden p-4">
          <div className="flex items-start justify-between gap-3">
            <CardTitle
              className="flex tracking-widest
            items-center gap-1.5 font-bold text-base text-left"
            >
              Certificates
            </CardTitle>

            <span className="hidden md:block">
              <Tabs
                value={activeTab}
                onValueChange={(value) =>
                  setActiveTab(value as CertificateFilter)
                }
                className=""
              >
                <TabsList>
                  <TabsTrigger className="px-2" value="all">
                    All
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="cisco">
                    Cisco
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="icpep">
                    ICpEP
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="psu">
                    PSU
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="dict">
                    DICT
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="ust">
                    UST
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="psite">
                    PSITE
                  </TabsTrigger>
                  <TabsTrigger className="px-2" value="analytics-vidhya">
                    Analytics Vidhya
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </span>
          </div>

          {/* Carousel */}
          <div className="w-full pb-4">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {filteredCertificates.map((section, index) => (
                  <CarouselItem
                    key={`${section.company}-${section.title}`}
                    className="basis-full md:basis-1/3 lg:basis-1/4"
                  >
                    <motion.div
                      key={`${activeTab}-${section.company}-${section.title}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                      className="h-full"
                    >
                      <Dialog>
                        <DialogTrigger
                          render={
                            <button
                              type="button"
                              className="h-full w-full cursor-pointer text-left"
                            />
                          }
                        >
                          <Card className="h-full gap-0 overflow-hidden py-0">
                            {/* Certificate Image */}
                            {/* <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                            <Image
                              src={section.image}
                              alt={`${section.title} certificate`}
                              fill
                              className="object-contain object-top"
                            />
                          </div> */}
                            <div className="relative aspect-4/3 w-full overflow-hidden bg-muted">
                              <Image
                                src={section.image}
                                alt={`${section.title} certificate`}
                                fill
                                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                                className="object-cover"
                              />
                            </div>

                            {/* Certificate Details */}
                            <CardFooter className="flex flex-1 flex-col items-start gap-1 p-4">
                              <CardTitle className="line-clamp-1 text-sm font-semibold leading-snug text-foreground sm:text-[15px]">
                                {section.company}
                              </CardTitle>

                              <CardDescription className="min-h-10 line-clamp-2 text-sm leading-5">
                                {section.title}
                              </CardDescription>

                              <span className="mt-auto pt-1 text-xs text-muted-foreground">
                                {section.date}
                              </span>
                            </CardFooter>
                          </Card>
                        </DialogTrigger>

                        {/* Full Certificate */}
                        <DialogContent className="sm:max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{section.title}</DialogTitle>

                            <DialogDescription>
                              {section.company} · {section.date}
                            </DialogDescription>
                          </DialogHeader>

                          {/* Full Image */}
                          <div className="relative aspect-4/3 w-full overflow-hidden rounded-md border bg-muted">
                            <Image
                              src={section.image}
                              alt={`${section.title} certificate`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                            />
                          </div>

                          <DialogFooter>
                            <DialogClose
                              render={<Button variant="outline">Cancel</Button>}
                            />
                            <Button
                              nativeButton={false}
                              render={
                                <a
                                  href={section.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                />
                              }
                            >
                              Learn More
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-2 z-10 dark:border-border dark:bg-muted dark:text-foreground dark:hover:bg-accent" />
              <CarouselNext className="right-2 z-10 dark:border-border dark:bg-muted dark:text-foreground dark:hover:bg-accent" />
            </Carousel>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
