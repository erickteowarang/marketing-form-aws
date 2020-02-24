import styled, { css } from 'styled-components'
import { Label } from '../Typography'
import { rem } from '../../utils/converters'

export const StatusMessage = styled(Label)<{
  dark?: boolean
  status?: 'error' | 'information' | 'warning' | 'success'
}>`
  display: block;
  color: ${props =>
    props.dark ? props.theme.colors.warning : props.theme.colors.error};

  ${props =>
    props.status === 'warning' &&
    css`
      color: ${props.theme.colors.warning};
    `};

  ${props =>
    props.status === 'success' &&
    css`
      color: ${props.theme.colors.success};
    `};

  ${props =>
    props.status === 'information' &&
    css`
      color: ${props.theme.colors.information};
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
