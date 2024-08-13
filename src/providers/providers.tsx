"use client";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useMobileVh } from "kbr-react-hooks";
import { Toaster } from "react-hot-toast";
import { WindowScrollProvider } from "./window-scroll.context";

const queryClient = new QueryClient();
export function Providers({ children }: { children: React.ReactNode }) {
  useMobileVh();

  return (
    <NextUIProvider className="min-h-screen bg-background font-sans antialiased">
      <QueryClientProvider client={queryClient}>
        <WindowScrollProvider>
          {children}
          <Toaster />
        </WindowScrollProvider>
      </QueryClientProvider>
    </NextUIProvider>
  );
}
