import type { Metadata } from "next";
import "./globals.css";
import { notoFont } from "@/app/ui/fonts";
import '@ant-design/v5-patch-for-react-19';

export const metadata: Metadata = {
  title: "Chat AI",
  description: "Chat AI application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoFont.className}`}>
        {children}

        {/* <div className="credits" data-gfe-screenshot-exclude="true">
          A challenge by{" "}
          <a
            href="https://www.greatfrontend.com/projects?ref=challenges"
            target="_blank"
            rel="noopener noreferrer"
          >
            GreatFrontEnd Projects
          </a>
          . Built by
          <a
            href="https://www.greatfrontend.com/projects/u/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}Coolkid!playcode
          </a>
          .
        </div> */}
      </body>
    </html>
  );
}
