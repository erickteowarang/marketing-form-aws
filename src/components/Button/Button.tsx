import React, { FC, memo } from 'react'
import { StyledButton } from './Button.styles'

interface IButtonProps {
  label?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: any) => void
}

const ButtonComponent: FC<IButtonProps> = ({
  type,
  onClick,
  className,
  label,
}) => (
  <StyledButton
    type={type}
    onClick={onClick}
    className={className}
  >
      {label}
  </StyledButton>
)

ButtonComponent.defaultProps = {
  type: 'button',
}

export default memo(ButtonComponent)