"use client"

import * as React from "react";

import { cn } from "../lib/utils";

export interface inputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, type, ...props }: inputProps) => {
  return (
    <input
      type={type}
      className={cn(
        "ui-flex ui-h-10 ui-w-full ui-rounded-md ui-border ui-bg-background ui-px-3 ui-py-2 ui-text-sm focus-visible:ui-outline-secondary",
        className
      )}
      {...props}
    />
  );
};
