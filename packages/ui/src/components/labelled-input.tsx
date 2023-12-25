"use client"

import * as React from "react";

import { cn } from "../lib/utils";

export interface labelledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  inputContent: string;
  onInputContentChange: React.Dispatch<React.SetStateAction<string>>;
  hasError?: boolean;
  containerClassname?: string;
  labelClassname?: string;
  inputClassname?: string;
}

export const LabelledInput = ({
  label,
  containerClassname,
  labelClassname,
  inputClassname,
  inputContent,
  onInputContentChange,
  hasError = false,
  ...props
}: labelledInputProps) => {
  return (
    <div>
      <div
        className={cn(
          "ui-grid ui-gap-1 ui-rounded-lg ui-px-3 ui-py-2 ui-border ",
          containerClassname,
          !hasError && "focus-within:ui-border-secondary-foreground",
          hasError && "ui-border-primary focus-within:ui-border-primary"
        )}
      >
        <label className={cn("ui-text-sm ui-text-foreground", labelClassname)}>
          {label}
        </label>
        <input
          className={cn(
            "ui-h-7 focus-visible:ui-outline-none ui-font-bold ui-text-foreground placeholder:ui-font-normal",
            inputClassname
          )}
          value={inputContent}
          onChange={(e) => onInputContentChange(e.target.value)}
          {...props}
        />
      </div>
      {hasError && (
        <div className="ui-mt-2 ui-flex ui-gap-1 ui-items-center ui-text-xs ui-text-primary ui-font-light">
          <CautionIcon /> Please enter a valid {label.toLowerCase()}.
        </div>
      )}
    </div>
  );
};

function CautionIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8C13.5 4.96243 11.0376 2.5 8 2.5ZM1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8ZM8.66667 10.3333C8.66667 10.7015 8.36819 11 8 11C7.63181 11 7.33333 10.7015 7.33333 10.3333C7.33333 9.96514 7.63181 9.66667 8 9.66667C8.36819 9.66667 8.66667 9.96514 8.66667 10.3333ZM8.65766 5.65766C8.65766 5.29445 8.36322 5 8 5C7.99087 5.00008 7.98631 5.00013 7.98175 5.00025C7.97719 5.00038 7.97263 5.00059 7.96352 5.00101C7.60086 5.02116 7.3232 5.33149 7.34335 5.69415L7.50077 8.52774C7.53575 9.15742 8.46425 9.15742 8.49923 8.52774L8.65665 5.69415C8.65707 5.68503 8.65728 5.68047 8.65741 5.67591C8.65754 5.67135 8.65758 5.66679 8.65766 5.65766Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
