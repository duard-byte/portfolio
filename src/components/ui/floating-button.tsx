"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

type FloatingButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

export function FloatingButton({ onClick, isOpen }: FloatingButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            size="icon"
            variant="default"
            aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
            title={isOpen ? "Close chat" : "Open chat"}
            onClick={onClick}
            className={cn(
              "fixed right-5 bottom-5 z-50 inline-flex",
              "size-12 rounded-full",
              "border border-border/60",
              "shadow-lg shadow-black/10",
              "transition-all duration-200",
              "hover:-translate-y-0.5 hover:shadow-xl",
              "sm:right-7 sm:bottom-7",
            )}
          >
            <Image
              src="/profile/lancaster.png"
              alt=""
              width={28}
              height={28}
              sizes="28"
              className="size-7 shrink-0 object-contain dark:invert"
            />
            {!isOpen && (
              <span
                className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white"
                aria-label="1 unread message"
              >
                1
              </span>
            )}
          </Button>
        }
      ></TooltipTrigger>
      <TooltipContent>
        <p>Chat with Eduard</p>
      </TooltipContent>
    </Tooltip>
  );
}
