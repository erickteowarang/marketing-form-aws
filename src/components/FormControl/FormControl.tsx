import React, { ReactNode, ReactElement } from 'react'

import { 
    StyledFormControl,
    StatusMessage,
} from './FormControl.styles'

const FormControl = (
    children: ReactNode | ReactElement | ReactElement[] | any,
    error?: string,
    className?: string
) => {
    return (
        <StyledFormControl className={className}>
            {children}
            {error && <StatusMessage status="error">{error}</StatusMessage>}
        </StyledFormControl>
    )
}

export default FormControl