// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { WindowScrollProvider } from "./window-scroll.context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="min-h-screen bg-background font-sans antialiased">
      <WindowScrollProvider>{children}</WindowScrollProvider>
    </NextUIProvider>
  );
}
