import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  isLoading?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = [
    'inline-flex items-center justify-center font-semibold',
    'rounded-xl transition-all duration-200',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    'select-none cursor-pointer',
    'relative overflow-hidden',
  ].join(' ')

  const sizeStyles: Record<string, string> = {
    sm: 'px-4 py-2 text-[13px] gap-1.5',
    md: 'px-5 py-2.5 text-[14px] gap-2',
    lg: 'px-7 py-3.5 text-[15px] gap-2.5',
  }

  const variantStyles: Record<string, string> = {
    primary: [
      'bg-teal-700 text-white border border-teal-700',
      'hover:bg-teal-800 hover:-translate-y-px hover:shadow-md hover:shadow-teal-900/20',
      'active:translate-y-0 active:shadow-none',
      'focus-visible:ring-teal-500',
    ].join(' '),
    secondary: [
      'bg-slate-900 text-white border border-slate-900',
      'hover:bg-slate-800 hover:-translate-y-px hover:shadow-md',
      'active:translate-y-0',
      'focus-visible:ring-slate-700',
    ].join(' '),
    outline: [
      'bg-transparent text-slate-800 border border-slate-300',
      'hover:border-teal-600 hover:text-teal-800 hover:bg-teal-50/60',
      'active:scale-[0.99]',
      'focus-visible:ring-teal-500',
    ].join(' '),
    ghost: [
      'bg-transparent text-slate-600 border border-transparent',
      'hover:bg-slate-100 hover:text-slate-900',
      'focus-visible:ring-slate-400',
    ].join(' '),
    danger: [
      'bg-rose-600 text-white border border-rose-600',
      'hover:bg-rose-700',
      'focus-visible:ring-rose-500',
    ].join(' '),
  }

  const widthStyle = fullWidth ? 'w-full' : ''

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {icon && iconPosition === 'left' && (
            <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
              {icon}
            </span>
          )}
          <span>{children}</span>
          {icon && iconPosition === 'right' && (
            <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              {icon}
            </span>
          )}
        </>
      )}
    </button>
  )
}
