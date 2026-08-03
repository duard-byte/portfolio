"use client";

import { useState } from "react";
import { Chatbot } from "@/components/chatbot";
import { FloatingButton } from "@/components/ui/floating-button";

export function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Chatbot onClose={() => setIsOpen(false)} />}

      <FloatingButton
        isOpen={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      />
    </>
  );
}
