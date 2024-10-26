import { forwardRef } from 'react';
import { ButtonProps as BaseButtonProps, Button, cn } from '@nextui-org/react';

export interface ButtonProps extends BaseButtonProps {
  className?: string;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        variant='bordered'
        color='primary'
        ref={ref}
        className={cn(
          'h-9 rounded border px-4 text-sm font-bold leading-[22px] shadow-btn',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
