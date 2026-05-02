import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning'
  className?: string
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-primary/10 text-primary': variant === 'primary',
          'bg-accent/10 text-accent': variant === 'secondary',
          'bg-green-100 text-green-800': variant === 'success',
          'bg-highlight/10 text-highlight': variant === 'warning',
        },
        className
      )}
    >
      {children}
    </span>
  )
}