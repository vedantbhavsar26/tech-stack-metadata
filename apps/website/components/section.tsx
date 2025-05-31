"use client";
import type { PropsWithChildren } from "react";
import React from "react";

export function Section(props: PropsWithChildren<{ id: string }>) {
  return <section id={props.id} className="mx-auto py-12 w-full">{props.children}</section>;
}
