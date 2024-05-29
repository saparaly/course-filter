import { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'default' | 'secondary'
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  variant = 'default',
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      type={type}
      className={`btn btn-${variant} ${className}`}
    >
      <span className={'flex items-center leading-[18px] whitespace-nowrap'}>{children}</span>
    </button>
  )
}
