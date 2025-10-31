'use client';

import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'electric' | 'emerald' | 'emerald-white' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  loadingText?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  variant = 'electric',
  size = 'md',
  fullWidth = true,
  loading = false,
  loadingText = 'Завантаження...',
  disabled,
  children,
  className,
  ...props
}) => {
  const styles: Record<ButtonVariant, any> = {
    electric: {
      base: 'text-skoda-emerald-green bg-skoda-electric-green border-skoda-electric-green',
      hover:
        'hover:bg-skoda-emerald-green hover:text-skoda-electric-green hover:border-skoda-electric-green',
      active: 'active:bg-skoda-emerald-green active:text-skoda-electric-green',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-skoda-electric-green focus:ring-offset-2',
    },
    emerald: {
      base: 'text-skoda-electric-green bg-skoda-emerald-green border-skoda-emerald-green',
      hover:
        'hover:bg-skoda-electric-green hover:text-skoda-emerald-green hover:border-skoda-electric-green',
      active: 'active:bg-skoda-electric-green active:text-skoda-emerald-green',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-skoda-emerald-green focus:ring-offset-2',
    },
    'emerald-white': {
      base: 'text-skoda-white bg-skoda-emerald-green border-skoda-emerald-green',
      hover:
        'hover:bg-skoda-white hover:text-skoda-emerald-green hover:border-skoda-electric-green',
      active: 'active:bg-skoda-white active:text-skoda-emerald-green',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-skoda-emerald-green focus:ring-offset-2',
    },
    outline: {
      base: 'text-skoda-emerald-green bg-transparent border-skoda-emerald-green',
      hover: 'hover:bg-skoda-emerald-green hover:text-white',
      active:
        'active:bg-skoda-electric-green active:text-skoda-emerald-green active:border-skoda-electric-green',
      focus:
        'focus:outline-none focus:ring-2 focus:ring-skoda-emerald-green focus:ring-offset-2',
    },
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center border-2 font-bold rounded-3xl transition-all duration-200 ease-in-out transform',
    fullWidth ? 'w-full' : 'w-auto',
    sizes[size],
    styles[variant].base,
    !disabled && !loading && styles[variant].hover,
    !disabled && !loading && styles[variant].active,
    !disabled && !loading && styles[variant].focus,
    disabled || loading
      ? 'opacity-50 cursor-not-allowed hover:scale-100 active:scale-100'
      : 'cursor-pointer hover:scale-105 active:scale-95',
    className
  );

  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-live={loading ? 'polite' : undefined}
      className={baseClasses}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className='animate-spin -ml-1 mr-2 h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
