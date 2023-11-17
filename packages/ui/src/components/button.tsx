import React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return <div className="bg-green-800">UIbuttons- {children}</div>;
}
