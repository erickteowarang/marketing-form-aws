import React, { FC, ReactNode, ReactElement } from 'react'

import { 
    StyledFormControl,
    StatusMessage,
} from './FormControl.styles'

interface IFormControlProps {
    children: ReactNode | ReactElement | ReactElement[] | any,
    error?: string,
    className?: string
}

const FormControl: FC<IFormControlProps> = ({
    children,
    error,
    className,
}) => {
    return (
        <StyledFormControl className={className}>
            {children}
            {error && <StatusMessage status="error">{error}</StatusMessage>}
        </StyledFormControl>
    )
}

export default FormControl