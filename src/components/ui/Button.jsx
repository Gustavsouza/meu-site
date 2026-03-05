import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary:
        'bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:from-purple-700 hover:to-purple-900 focus:ring-purple-600 shadow-lg hover:shadow-xl hover:scale-105',
      secondary:
        'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50 focus:ring-purple-600',
      outline:
        'bg-transparent text-gray-700 border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 focus:ring-purple-600',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
