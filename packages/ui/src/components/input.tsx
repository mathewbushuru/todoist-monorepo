import * as React from "react";

import { cn } from "../lib/utils";

export interface inputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, type, ...props }: inputProps) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-secondary",
        className
      )}
      {...props}
    />
  );
};
