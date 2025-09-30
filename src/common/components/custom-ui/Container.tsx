import { cn } from '@/lib/utils';
import * as React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'xl', ...props }, ref) => {
    const sizes = {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-[1440px]',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-screen',
    };

    return (
      <div
        ref={ref}
        className={cn('mx-auto w-full px-6 py-10 2xl:px-0', sizes[size], className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';
