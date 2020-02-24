import React, { ReactNode, ReactElement } from 'react'

import { 
    StyledFormControl,
    StatusMessage,
} from './FormControl.styles'

const FormControl = (props: {
    children: ReactNode | ReactElement | ReactElement[] | any,
    error?: string,
    className?: string
}) => {
    const { className, error, children } = props
    
    return (
        <StyledFormControl className={className}>
            {children}
            {error && <StatusMessage status="error">{error}</StatusMessage>}
        </StyledFormControl>
    )
}

export default FormControl