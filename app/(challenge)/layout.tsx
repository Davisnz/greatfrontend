import React from "react";

export default function challengesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      {/* <main className="flex min-h-screen flex-col items-center justify-center"></main> DISABLED FOR AUTONOMY */}
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
