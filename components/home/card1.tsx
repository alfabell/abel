"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function Card1() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Abel Algodzilla"
        revealText="Gue Ganteng Fuck boy"
      >
        <TextRevealCardTitle>
          Tentang gue
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Gue sangat amat fuck boy
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
