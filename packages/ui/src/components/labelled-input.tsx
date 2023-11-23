import * as React from "react";

import { cn } from "../lib/utils";

export interface labelledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  containerClassname?: string;
  labelClassname?: string;
  inputClassname?: string;
}

export const LabelledInput = ({
  label,
  containerClassname,
  labelClassname,
  inputClassname,
  ...props
}: labelledInputProps) => {
  return (
    <div
      className={cn(
        "ui-grid ui-gap-1 ui-rounded-lg ui-px-3 ui-py-2 ui-border",
        containerClassname
      )}
    >
      <label className={cn("ui-text-sm ui-text-foreground", labelClassname)}>
        {label}
      </label>
      <input
        className={cn("ui-h-7 ui-outline-none ui-font-bold placeholder:ui-font-normal", inputClassname)}
        {...props}
      />
    </div>
  );
};
