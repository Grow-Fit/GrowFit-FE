import React from 'react';
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";

export default function GoalLayout ({ children }: { children: React.ReactNode }) {
  return (
      <div>
        <Header />
        <main>
          {children}
        </main>
        <Navigation />
      </div>
  );
}
