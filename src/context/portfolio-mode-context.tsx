"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type PortfolioMode = "software" | "embedded";

type PortfolioModeContextType = {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
};

const PortfolioModeContext = createContext<PortfolioModeContextType | null>(
  null,
);

export function PortfolioModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>("software");

  return (
    <PortfolioModeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);

  if (!context) {
    throw new Error(
      "usePortfolioMode must be used inside PortfolioModeProvider",
    );
  }

  return context;
}
