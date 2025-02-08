import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0E78F9",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const AppLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
           
            socialButtonsVariant: "blockButton",
          },
          variables: {
            colorText: "#FFF",
            colorPrimary: "#0E78F9",
            colorBackground: "#34495e",
            colorInputBackground: "#566573",
            colorInputText: "#FFF",
            
          },
          elements: {
            socialButtonsBlockButton: {
              backgroundColor: "#FFFFFF", // Set background to white
              color: "#000", // Ensure text is visible
            },
          }
        }}
      >
        <body className={cn("bg-[#17202a]", inter.className)}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
};

export default AppLayout;
