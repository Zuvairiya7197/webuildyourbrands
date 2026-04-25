import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:translate-y-0 disabled:scale-100 disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--button-gradient)] bg-[length:100%_100%] text-primary-foreground shadow-[0_12px_34px_rgba(53,92,255,0.32),0_0_24px_rgba(239,47,255,0.22)] hover:brightness-110 hover:saturate-150 hover:shadow-[0_18px_48px_rgba(22,216,255,0.28),0_0_34px_rgba(239,47,255,0.42)] active:brightness-95",
        outline:
          "border border-[#7c3cff]/45 bg-[#00001F]/35 text-foreground shadow-[inset_0_0_24px_rgba(22,216,255,0.05)] backdrop-blur-md hover:border-[#16d8ff]/60 hover:bg-[#120044]/55 hover:shadow-[0_0_28px_rgba(22,216,255,0.18)]",
        ghost: "text-foreground hover:bg-[#16d8ff]/10 hover:text-white"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4",
        lg: "h-12 px-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
