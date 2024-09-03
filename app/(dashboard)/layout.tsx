import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
// import { ClerkProvider,} from "@clerk/nextjs";
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


import LeftSideBar from "@/components/layout/LeftSideBar";
import TopBar from "@/components/layout/TopBar";
import { ToasterProvider } from "@/lib/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trendicor - Admin Dashboard",
  description: "Admin dashboard to manage Trendicor's data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*<ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ToasterProvider />
          <div className="flex max-lg:flex-col text-grey-1">
            <LeftSideBar />
            <TopBar />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>*/
    <ClerkProvider>
      <html lang="en">
        <body>
        <ToasterProvider />
          <SignedOut>
            <div className="h-screen flex justify-center items-center">
              <SignIn routing="hash"/>
            </div>  
          </SignedOut>
          {/* <SignedIn>
            <UserButton /> 
          </SignedIn> */}
          <div className="flex max-lg:flex-col text-grey-1">
            <LeftSideBar />
            <TopBar />
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}