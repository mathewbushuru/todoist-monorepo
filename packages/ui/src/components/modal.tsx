import * as React from "react";
import * as ModalPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "../lib/utils";
import { buttonVariants } from "..";

const Modal = ModalPrimitive.Root;

const ModalTrigger = ModalPrimitive.Trigger;

const ModalPortal = ModalPrimitive.Portal;

const ModalOverlay = React.forwardRef<
    React.ElementRef<typeof ModalPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(
    ({className, ...props}, ref) => {
        return (
            <ModalPrimitive.Overlay
                className={cn(
                    "ui-fixed ui-inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:ui-fade-in-0 data-[state=closed]:fade-out-0",
                    className
                )}
                {...props}
                ref={ref}
            />
        )
    }
)

const ModalContent = React.forwardRef<
    React.ElementRef<typeof ModalPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(
    ({className, ...props}, ref) => {
        return (
            <ModalPortal>
                <ModalOverlay />
                <ModalPrimitive.Content
                    ref={ref}
                    className={cn(
                        "ui-fixed ui-left-[50%] ui-top-[50%] ui-z-50 ui-grid ui-w-[92%] ui-max-w-lg ui-translate-x-[-50%] ui-translate-y-[-50%] ui-gap-4 ui-bg-popover ui-p-6 ui-shadow-lg ui-rounded-lg ui-duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:ui-fade-in-0 data-[state=closed]:fade-out-0",
                        className
                    )}
                    {...props}
                />
            </ModalPortal>
        )
    }
)

const ModalHeader = ({
    className,
    ...props
}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div 
            className={cn(
                "ui-flex ui-flex-col ui-space-y-2 ui-text-center sm:ui-text-left",
                className
            )}
            {...props}
        />
    )
}

const ModalFooter = ({
    className,
    ...props
}:React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div 
            className={cn(
                "ui-flex ui-flex-col-reverse ui-gap-2 sm:ui-flex-row sm:ui-justify-end",
                className
            )}
            {...props}
        />
    )
}

const ModalTitle = React.forwardRef<
    React.ElementRef<typeof ModalPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(
    ({className, ...props}, ref) => {
        return (
            <ModalPrimitive.Title 
                ref={ref}
                className={cn("ui-text-lg ui-font-semibold", className)}
                {...props}
            />
        )
    }
)

const ModalDescription = React.forwardRef<
    React.ElementRef<typeof ModalPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof ModalPrimitive.Description>
>(
    ({className, ...props}, ref) => {
        return (
            <ModalPrimitive.Description
                ref={ref}
                className={cn("ui-text-sm ui-text-muted", className)}
                {...props}
            />
        )
    }
)

const ModalAction = React.forwardRef<
    React.ElementRef<typeof ModalPrimitive.Action>,
    React.ComponentPropsWithoutRef<typeof ModalPrimitive.Action>
>(
    ({className, ...props}, ref) => {
        return (
            <ModalPrimitive.Action
                ref={ref}
                className={cn(buttonVariants(), className)}
                {...props}
            />
        )
    }
)

const ModalCancel = React.forwardRef<
    React.ElementRef<typeof ModalPrimitive.Cancel>,
    React.ComponentPropsWithoutRef<typeof ModalPrimitive.Cancel>
>(
    ({className, ...props}, ref) => {
        return (
           <ModalPrimitive.Cancel
                ref={ref}
                className={cn(
                    buttonVariants({variant:"outline"}),
                    className
                )}
                {...props}
           />
        )
    }
)

export {
    Modal,
    ModalPortal,
    ModalOverlay,
    ModalTrigger,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalTitle,
    ModalDescription,
    ModalAction,
    ModalCancel
}


