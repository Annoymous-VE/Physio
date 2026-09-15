import React from 'react'

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  padding = 'md',
  onClick
}) => {
  const paddingStyles = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  }

  const hoverStyle = hover
    ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
    : ""

  const clickStyle = onClick ? "cursor-pointer" : ""

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm ${paddingStyles[padding]} ${hoverStyle} ${clickStyle} ${className}`}
    >
      {children}
    </div>
  )
}
