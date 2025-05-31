"use client";
import { BaseSidebar } from "@/components/baseSidebar";
import { MobileSidebar } from "@/components/mobileSidebar";
import React from "react";

export function Sidebar(props: { id: string }) {
  return (
    <div className="bg-primary/5 md:max-w-sm" aria-label="Documentation sidebar">
      <BaseSidebar id={props.id} />
      <MobileSidebar id={props.id} />
    </div>
  );
}
