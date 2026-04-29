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
          "border border-white/15 bg-[image:var(--button-gradient)] text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-4px_0_rgba(0,0,31,0.34),0_10px_0_rgba(0,0,31,0.34),0_14px_24px_rgba(0,0,31,0.26)] hover:-translate-y-1 hover:brightness-110 hover:saturate-125 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-4px_0_rgba(0,0,31,0.3),0_14px_0_rgba(0,0,31,0.32),0_24px_42px_rgba(23,70,216,0.34),0_0_34px_rgba(124,60,255,0.32)] active:translate-y-1 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_0_rgba(0,0,31,0.38),0_6px_0_rgba(0,0,31,0.36),0_10px_18px_rgba(0,0,31,0.24)]",
        outline:
          "border border-white/75 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_28px_rgba(255,255,255,0.03)] backdrop-blur-xl hover:border-white hover:bg-white hover:text-[#00001F] hover:shadow-[0_16px_34px_rgba(255,255,255,0.12)]"
      },
      size: {
        default: "h-11 px-5",
        lg: "h-12 px-6",
        icon: "h-10 w-10 p-0"
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
