import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-semibold focus:outline-none transition-all flex items-center justify-center gap-2",
  {
    compoundVariants: [
      {
        circular: true,
        className: "rounded-full",
        size: "default",
      },
      {
        circular: true,
        className: "!p-2 rounded-full",
        size: "icon",
      },
    ],
    defaultVariants: {
      circular: true,
      size: "default",
      variant: "default",
    },
    variants: {
      circular: {
        false: "rounded",
        true: "rounded-full",
      },
      size: {
        default: "px-4 py-2",
        icon: "p-2",
        lg: "px-6 py-3 text-lg",
        sm: "px-3 py-1 text-sm",
      },
      variant: {
        clear: "bg-transparent text-inherit hover:bg-transparent active:bg-transparent",
        default: "bg-navy-700 text-white hover:bg-navy-500 active:bg-navy-800",
        gold: "bg-gold-500 text-white hover:bg-gold-300 active:bg-gold-700",
        secondary:
          "bg-white text-gray-700 hover:bg-gray-100 active:bg-gray-300 border border-gray-800",
      },
    },
  },
);

const Button = React.forwardRef<
  React.ComponentRef<"button">,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
      circular?: boolean;
      icon?: React.ReactNode;
      iconPosition?: "left" | "right";
      children?: React.ReactNode;
    }
>(
  (
    {
      asChild = false,
      children,
      circular,
      className,
      icon,
      iconPosition = "left",
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const buttonSize = !children && icon ? "icon" : size;

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ circular, className, size: buttonSize, variant }))}
        style={{ cursor: "pointer" }}
        {...props}
      >
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
