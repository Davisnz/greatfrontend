import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GreatFrontEnd - Challenge #1",
  description: "Create a Design Card",
  icons: {
    icon: "/images/testimonialCard/favicon.ico",
  },
};

export default function TestimonialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="testimonial-cardbg flex min-h-screen flex-col items-center justify-center">
      {children}
      <div className="credits" data-gfe-screenshot-exclude="true">
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href="https://www.greatfrontend.com/projects/u/davisnz"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Davisnz
        </a>
        .
      </div>
    </main>
  );
}
