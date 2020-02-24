import React, { FC, Fragment } from 'react'

import { Label } from '../Typography'

import { StyledSelect } from './Dropdown.style'

interface IDropdownProps {
    id: string
    name: string
    label: string
    className?: string
    options: Array<{
        value: string,
        label: string,
    }>
}

const Dropdown: FC<IDropdownProps> = (props) => {
    const {
        id,
        name, 
        label,
        className,
        options,
    } = props

    return (
        <Fragment>
            <Label htmlFor={id || name} block={true}>{label}</Label>
            <StyledSelect
                id={id}
                name={name}
                options={options}
                className={className}
            />
        </Fragment>
    )
}

export default Dropdown