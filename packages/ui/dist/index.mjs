// src/components/button.tsx
import { jsxs } from "react/jsx-runtime";
function Button({ children }) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-green-800", children: [
    "UIbuttons- ",
    children
  ] });
}
export {
  Button
};
