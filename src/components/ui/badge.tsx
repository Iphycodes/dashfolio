// src/components/ui/badge.tsx
import { motion } from 'framer-motion';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'border border-input',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: VariantProps<typeof badgeVariants>['variant'];
  animate?: boolean;
}

const Badge = ({ className, variant, animate = false, children, ...props }: BadgeProps) => {
  if (animate) {
    return (
      <motion.div
        className={cn(badgeVariants({ variant }), className)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  );
};

export { Badge, badgeVariants };
