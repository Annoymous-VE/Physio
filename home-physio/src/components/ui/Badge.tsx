import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'teal' | 'slate' | 'amber' | 'rose' | 'emerald' | 'outline'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  icon,
  className = ''
}) => {
  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-medium gap-1",
    md: "px-3 py-1 text-xs sm:text-sm font-medium gap-1.5"
  }

  const variantStyles = {
    teal: "bg-teal-50 text-teal-800 border border-teal-200/80",
    emerald: "bg-emerald-50 text-emerald-800 border border-emerald-200",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    rose: "bg-rose-50 text-rose-800 border border-rose-200",
    outline: "bg-white text-slate-700 border border-slate-300"
  }

  return (
    <span className={`inline-flex items-center rounded-full ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  )
}
