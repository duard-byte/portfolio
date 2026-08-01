"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
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
    <>
      <header
        className={cn(
          "fixed inset-x-0 z-50 transition-all duration-300",
          isScrolled ? "top-3 px-3 sm:px-5" : "top-0 px-0",
        )}
      >
        {/* Full width initially, constrained when scrolling */}
        <div
          className={cn(
            "mx-auto transition-[max-width] duration-300",
            isScrolled ? "max-w-282.5" : "max-w-none",
          )}
        >
          <nav
            aria-label="Primary navigation"
            className={cn(
              "transition-all duration-300",
              isScrolled
                ? [
                    "rounded-2xl",
                    "border border-border/60",
                    "bg-background/80",
                    "shadow-lg shadow-black/5",
                    "backdrop-blur-xl",
                  ]
                : [
                    "border-b border-border/50",
                    "bg-background/80",
                    "backdrop-blur-md",
                  ],
            )}
          >
            <div
              className={cn(
                "mx-auto flex items-center justify-between gap-4",
                "transition-all duration-300",
                isScrolled
                  ? "h-16 max-w-none px-3 sm:px-4"
                  : "h-20 max-w-7xl px-4 sm:px-6",
              )}
            >
              {/* Logo and name — Home link */}
              <Link
                href="/#home"
                aria-label="Raven Magbanua home"
                className={cn(
                  "group flex min-w-0 items-center rounded-xl",
                  "outline-none",
                  "focus-visible:ring-2 focus-visible:ring-ring",
                  "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isScrolled ? "gap-2.5" : "gap-3",
                )}
              >
                <span
                  className={cn(
                    "relative grid shrink-0 place-items-center overflow-hidden",
                    "rounded-xl border border-border/60",
                    "bg-muted/30 transition-all duration-300",
                    "group-hover:border-foreground/20",
                    "group-hover:bg-accent",
                    isScrolled ? "size-10" : "size-11 sm:size-12",
                  )}
                >
                  <Image
                    src="/file.svg"
                    alt=""
                    width={48}
                    height={48}
                    priority
                    className={cn(
                      "size-full object-contain p-1.5",
                      "transition-transform duration-300",
                      "group-hover:scale-105",
                      "dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]",
                    )}
                  />
                </span>

                <span className="flex min-w-0 flex-col leading-none">
                  <span
                    className={cn(
                      "truncate font-semibold tracking-[-0.03em]",
                      "text-foreground transition-all duration-300",
                      isScrolled
                        ? "text-sm sm:text-base"
                        : "text-base sm:text-lg",
                    )}
                  >
                    Raven{" "}
                    <span className="font-normal text-muted-foreground">
                      Magbanua
                    </span>
                  </span>

                  <span
                    className={cn(
                      "overflow-hidden whitespace-nowrap",
                      "text-[9px] font-medium uppercase",
                      "tracking-[0.2em] text-muted-foreground",
                      "transition-all duration-300",
                      isScrolled
                        ? "mt-0 max-h-0 opacity-0"
                        : "mt-1 max-h-4 opacity-100",
                    )}
                  >
                    Software · Embedded Systems
                  </span>
                </span>
              </Link>

              {/* Keeps the right action at the opposite side */}
              <div className="flex flex-1 justify-end">
                <Button
                  nativeButton={false}
                  render={<Link href="/#contact" />}
                  size="icon"
                  variant={"default"}
                  aria-label="Contact Raven"
                  title="Contact me"
                  className={cn(
                    "shrink-0 rounded-full",
                    // "border-border/70 bg-background/60",
                    // "shadow-sm backdrop-blur-sm",
                    // "transition-all duration-300",
                    // "hover:-translate-y-0.5",
                    // "hover:bg-accent hover:shadow-md",
                    isScrolled ? "size-9" : "size-10",
                  )}
                >
                  <Phone className={cn(isScrolled ? "size-3.5" : "size-4")} />
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Space occupied by the fixed navbar */}
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
