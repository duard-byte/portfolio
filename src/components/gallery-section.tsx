"use client";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Marquee } from "@/components/ui/marquee";
import { gallery } from "@/constants";
import { useEffect, useState } from "react";

export function GallerySection() {
  const [randomGallery, setRandomGallery] = useState(gallery);
  useEffect(() => {
    const shuffled = [...gallery];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setRandomGallery(shuffled);
  }, []);
  return (
    <section className="mt-6">
      <Card className="overflow-hidden p-4">
        <CardTitle className="text-left text-base font-bold tracking-widest mb-1">
          Gallery
        </CardTitle>

        <CardDescription>
          <Marquee>
            {randomGallery.map((section, index) => (
              <Tooltip key={`${section.image}-${index}`}>
                <TooltipTrigger
                  render={<div className="w-64 shrink-0 cursor-pointer" />}
                >
                  <AspectRatio
                    ratio={6 / 5}
                    className="overflow-hidden rounded-md bg-muted"
                  >
                    <Image
                      src={section.image}
                      alt={section.caption}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </AspectRatio>
                </TooltipTrigger>

                <TooltipContent>
                  <p>{section.caption}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </Marquee>
        </CardDescription>
      </Card>
    </section>
  );
}
