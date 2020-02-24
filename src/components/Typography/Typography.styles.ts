import styled from 'styled-components'
import { minMQ } from '../../utils/mediaQueries'
import { rem } from '../../utils/converters'

export const H2 = styled.h2`
  white-space: pre-line;
  margin: 0;
  font-weight: 300;
  font-size: ${rem(30)};
  line-height: ${rem(40)};

  ${minMQ.l`
    font-size: ${rem(40)};
    line-height: ${rem(60)};
  `};
`

export const H3 = styled.h3`
  white-space: pre-line;
  margin: 0;
  font-weight: 300;
  font-size: ${rem(30)};
  line-height: ${rem(40)};
`

export const H4 = styled.h4`
  white-space: pre-line;
  margin: 0;
  font-weight: normal;
  font-size: ${rem(20)};
  line-height: ${rem(32)};
`

export const H5 = styled.h5`
  white-space: pre-line;
  margin: 0;
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(28)};
`

export const Text = styled.p<{
  ignoreMargin?: boolean
}>`
  white-space: pre-line;
  margin-bottom: ${props => (props.ignoreMargin ? 0 : rem(32))};
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: ${rem(32)};
`

export const NoBottomText = styled.p<{
  ignoreMargin?: boolean
}>`
  margin-bottom: 0;
  font-weight: normal;
  font-size: ${rem(16)};
  line-height: ${rem(32)};
`

export const SmallText = styled(Text)`
  font-weight: normal;
  font-size: ${rem(14)};
  line-height: ${rem(26)};
`

export const Label = styled.label<{
  block?: boolean
}>`
  font-weight: 500;
  display: ${props => (props.block ? 'block' : 'inline')};
  font-size: ${rem(12)};
  line-height: ${rem(20)};
  letter-spacing: 1px;
`

export const Strikethrough = styled(Text)`
  text-decoration: line-through;
`

export const Bold = styled.strong`
  font-weight: 500;
`

export const Italics = styled.em`
  font-style: italic;
`

export const Underline = styled.u`
  text-decoration: underline;
`