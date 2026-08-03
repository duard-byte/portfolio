"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Tabs value="light">
        <TabsList>
          <TabsTrigger
            value="light"
            className="px-1"
            disabled
            aria-label="Light theme"
          >
            <Sun className="size-4" />
          </TabsTrigger>

          <TabsTrigger
            value="dark"
            className="px-1"
            disabled
            aria-label="Dark theme"
          >
            <Moon className="size-4" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <Tabs
      value={currentTheme}
      onValueChange={(value) => {
        setTheme(value);
      }}
    >
      <TabsList>
        <TabsTrigger
          value="light"
          className="px-1"
          aria-label="Use light theme"
        >
          <Sun className="size-4" />
        </TabsTrigger>

        <TabsTrigger value="dark" className="px-1" aria-label="Use dark theme">
          <Moon className="size-4" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

//FIXME: Upgrade soon
// "use client";

// import { useEffect, useState } from "react";
// import { Code2, Cpu, Moon, Settings, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { usePortfolioMode } from "@/context/portfolio-mode-context";

// export function ModeToggle() {
//   const [mounted, setMounted] = useState(false);

//   const { resolvedTheme, setTheme } = useTheme();
//   const { mode, setMode } = usePortfolioMode();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   /*
//    * Always provide Tabs with a value.
//    *
//    * Before mounting, use "sun" so the server render and the
//    * initial client render are identical.
//    */
//   const currentTheme = mounted && resolvedTheme === "dark" ? "moon" : "sun";

//   return (
//     <div className="flex items-center gap-1">
//       {/* Theme */}
//       <Tabs
//         value={currentTheme}
//         onValueChange={(value) => {
//           if (!mounted) return;

//           setTheme(value === "moon" ? "dark" : "light");
//         }}
//       >
//         <TabsList>
//           <TabsTrigger
//             value="sun"
//             className="px-1"
//             aria-label="Use light theme"
//           >
//             <Sun className="size-4" />
//           </TabsTrigger>

//           <TabsTrigger
//             value="moon"
//             className="px-1"
//             aria-label="Use dark theme"
//           >
//             <Moon className="size-4" />
//           </TabsTrigger>
//         </TabsList>
//       </Tabs>

//       {/* Portfolio Mode */}
//       <DropdownMenu>
//         <DropdownMenuTrigger
//           render={
//             <Button
//               variant="ghost"
//               size="icon"
//               aria-label="Change portfolio mode"
//             />
//           }
//         >
//           <Settings className="size-4" />
//         </DropdownMenuTrigger>

//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setMode("software")}>
//             <Code2 className="size-4" />
//             <span>Software</span>

//             {mode === "software" && (
//               <DropdownMenuShortcut className="flex items-center">
//                 <span
//                   className="inline-block size-2 shrink-0 rounded-full bg-emerald-500"
//                   aria-label="Active"
//                 />
//               </DropdownMenuShortcut>
//             )}
//           </DropdownMenuItem>

//           <DropdownMenuItem onClick={() => setMode("embedded")}>
//             <Cpu className="size-4" />
//             <span>Embedded</span>

//             {mode === "embedded" && (
//               <DropdownMenuShortcut className="flex items-center">
//                 <span
//                   className="inline-block size-2 shrink-0 rounded-full bg-emerald-500"
//                   aria-label="Active"
//                 />
//               </DropdownMenuShortcut>
//             )}
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }
