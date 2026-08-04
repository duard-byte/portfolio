"use client";

import { Button } from "@/components/ui/button";
import { contact } from "@/constants";
import { cn } from "@/lib/utils";
import { BadgeCheck, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-6 z-50 px-3 transition-all duration-300 sm:px-7",
        isScrolled
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0",
      )}
    >
      <div className="mx-auto max-w-xl sm:max-w-2xl md:max-w-180 lg:max-w-260">
        <nav
          aria-label="Primary navigation"
          className={cn(
            "rounded-2xl",
            "border border-border/60",
            "bg-background",
            "shadow-lg shadow-black/5",
            "backdrop-blur-xl",
          )}
        >
          <div className="mx-auto flex h-18 items-center justify-between gap-4 px-3 sm:px-4">
            {/* Logo + Name */}
            <Link
              href="/#home"
              aria-label="Raven Magbanua home"
              className={cn(
                "group flex min-w-0 items-center gap-2.5 rounded-xl",
                "outline-none",
                "focus-visible:ring-2 focus-visible:ring-ring",
                "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              )}
            >
              <span
                className={cn(
                  "relative grid size-10 shrink-0 place-items-center overflow-hidden",
                  "rounded-xl border border-border/60",
                  "bg-muted/30",
                  "transition-colors duration-300",
                  "group-hover:border-foreground/20",
                  "group-hover:bg-accent",
                )}
              >
                <Image
                  src="/profile/r.png"
                  alt=""
                  width={48}
                  height={48}
                  sizes="48"
                  priority
                  className={cn(
                    "size-full object-contain p-1.5",
                    "transition-transform duration-300",
                    "group-hover:scale-105",
                    "dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] dark:invert",
                  )}
                />
              </span>

              <span className="flex min-w-0 flex-col">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wider text-foreground sm:text-base">
                  <span className="truncate">Raven Magbanua</span>

                  <BadgeCheck
                    aria-label="Verified profile"
                    className="size-4.5 shrink-0 fill-blue-600 text-white"
                  />
                </span>

                <span className="text-xs text-muted-foreground">
                  Associate Software Engineer
                </span>
              </span>
            </Link>
            {/* Contact */}
            <div className="flex flex-1 justify-end">
              <Button
                nativeButton={false}
                render={<Link href={contact} />}
                variant="default"
                aria-label="Contact Raven"
                title="Contact me"
                className=" shrink-0"
              >
                <Image
                  src={"/socials/google-gmail.png"}
                  alt="
                gmail"
                  width={19}
                  height={19}
                  sizes="19"
                  className="shrink-0 size-3.5"
                />
                Email Me
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
