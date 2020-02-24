import styled from 'styled-components'
import { rem } from '../../utils/converters'

export const StyledInput = styled.input`
    position: relative;
    display: block;
    max-width: 350px;
    padding: ${rem(15)};
    width: calc(100% - ${rem(20)};
    border: none;
    border-radius: 0;
    background: #f0f0f0;
    color: #aaa;
    font-weight: bold;
    -webkit-appearance: none;
`
