import styled from 'styled-components'

import { minMQ } from '../utils/mediaQueries'
import { rem } from '../utils/converters'

export const FormWrapper = styled.form`
    padding: ${rem(20)};

    ${minMQ.m`
        max-width: 500px;
        padding: 0;
        margin: ${rem(40)} auto;
    `}
`