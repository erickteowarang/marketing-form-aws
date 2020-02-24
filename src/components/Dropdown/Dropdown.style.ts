import styled from 'styled-components'
import Select from 'react-select'

import { rem } from '../../utils/converters'

export const StyledSelect = styled(Select)`
    max-width: 500px;
    width: calc(100% - ${rem(20)});
`