import styled, { css } from 'styled-components'
import { Label } from '../Typography'
import { rem } from '../../utils/converters'

export const StatusMessage = styled(Label)<{
  dark?: boolean
  status?: 'error' | 'information' | 'warning' | 'success'
}>`
  display: block;

  ${props =>
    props.status === 'warning' &&
    css`
      color: yellow
    `};

  ${props =>
    props.status === 'success' &&
    css`
      color: green;
    `};

  ${props =>
    props.status === 'error' &&
    css`
        color: red;
    `};

  ${props =>
    props.status === 'information' &&
    css`
      color: black;
    `};
`

export const StyledFormControl = styled.div`
  display: block;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem(20)};
`
