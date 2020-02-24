import styled from 'styled-components'
import { rem } from '../../utils/converters'

export const StyledInput = styled.input`
    position: relative;
    display: block;
    max-width: 350px;
    padding: ${rem(15)};
    width: calc(100% - ${rem(20)});
    border: 1px solid #808080;
    border-radius: 0;
    font-weight: bold;
    -webkit-appearance: none;
`
