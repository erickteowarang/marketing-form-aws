import styled from 'styled-components'
import { rem } from '../../utils/converters'

export const StyledButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    padding: ${rem(15)} ${rem(40)};
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    outline: none;
    position: relative;
    border: 3px solid #27C229;
    border-radius: 2px;
    background: #27C229;
    color: white;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;

    &:hover,
    &:active {
        color: #27C229;
	    background: #fff;
    }
`
