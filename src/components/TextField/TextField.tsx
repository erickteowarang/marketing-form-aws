import React, { FC, Fragment } from 'react'

import { Label } from '../Typography'

import { ITextFieldProps } from './TextField.types'
import { StyledInput } from './TextField.styles'

const TextField: FC<ITextFieldProps> = (props) => {
    const {
        id,
        name,
        onChange,
        onBlur,
        value,
        className,
        placeholder,
        label,
        optional,
    } = props

    return (
        <Fragment>
            <Label htmlFor={id || name} block={true}>
                {label}
                {optional && ' - optional'}
            </Label>
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