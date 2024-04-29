// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { WindowScrollProvider } from "./window-scroll.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="min-h-screen bg-background font-sans antialiased">
      <QueryClientProvider client={queryClient}>
        <WindowScrollProvider>{children}</WindowScrollProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
