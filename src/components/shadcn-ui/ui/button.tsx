import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/components/shadcn-ui/libs';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        chip: 'rounded-2xl px-4 py-[4.5px]',
      },
      // Chip
      chipVariant: {
        primary: 'border border-gray-300 bg-gray-50',
        secondary: 'border border-black bg-black text-white',
      },
      font: {
        'text-subTitle1': 'text-[28px] leading-[150%] font-semibold',
        'text-subTitle2': 'text-[24px] leading-[150%] font-semibold',
        'text-subTitle3': 'text-[20px] leading-[150%] font-semibold',
        'text-subTitle4': 'text-[16px] leading-[150%] font-semibold',
        'text-body1': 'text-[16px] leading-[150%] font-medium',
        'text-body2': 'text-[14px] leading-[150%] font-normal',
        'text-body3': 'text-[14px] leading-[150%] font-medium',
        'text-caption1': 'text-[14px] leading-[150%] font-semibold',
        'text-caption2': 'text-[13px] leading-[120%] font-semibold',
        'text-caption3': 'text-[13px] leading-[120%] font-medium',
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, chipVariant, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, chipVariant, font, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
