import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import React from 'react';
import { VariantProps } from 'class-variance-authority';

declare const buttonVariants: (props?: {
    variant?: "default" | "ghost" | "link";
    size?: "default" | "sm" | "lg";
} & class_variance_authority_types.ClassProp) => string;
interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare function Button({ className, variant, size, ...props }: buttonProps): react_jsx_runtime.JSX.Element;

declare function Logo(): react_jsx_runtime.JSX.Element;

export { Button, Logo, type buttonProps, buttonVariants };
