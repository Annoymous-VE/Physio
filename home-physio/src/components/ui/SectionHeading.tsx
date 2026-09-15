import React from 'react'

export interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  light?: boolean
  titleClassName?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
  titleClassName = '',
}) => {
  const alignStyle = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${alignStyle} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-5 h-px bg-teal-600 opacity-60" />
          <span className={`text-[11px] font-semibold tracking-[0.1em] uppercase ${light ? 'text-teal-300' : 'text-teal-700'}`}>
            {eyebrow}
          </span>
          <span className="w-5 h-px bg-teal-600 opacity-60" />
        </div>
      )}
      <h2
        className={`text-[1.85rem] sm:text-[2.35rem] md:text-[2.75rem] font-bold tracking-tight leading-[1.1] ${light ? 'text-white' : 'text-slate-900'} ${titleClassName}`}
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-[17px] leading-relaxed ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
