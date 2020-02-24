import { ChangeEvent } from 'react'

export interface ITextFieldProps {
    id: string
    name: string
    label: string
    optional?: boolean
    className?: string
    placeholder?: string
    value: string
    onBlur?: (e: ChangeEvent) => void
    onChange?: (e: ChangeEvent) => void
    onFocus?: (e: ChangeEvent) => void
}