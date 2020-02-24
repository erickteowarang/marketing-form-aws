import React, { Fragment } from 'react'

import { Label } from '../Typography'

import { ITextFieldProps } from './TextField.types'
import { StyledInput } from './TextField.styles'

const TextField = (props: ITextFieldProps) => {
    const {
        id,
        name,
        onChange,
        onBlur,
        value,
        className,
        placeholder,
        label,
    } = props

    return (
        <Fragment>
            <Label htmlFor={id || name}>{label}</Label>
            <StyledInput
                id={id}
                name={name}
                type="text"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={className}
                placeholder={placeholder}
            />
        </Fragment>
    )
}

export default TextField