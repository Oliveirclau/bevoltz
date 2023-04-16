import styled from 'styled-components'
import { css } from 'styled-components'

import { TextProps } from '../Text'

export const LinkTextContainer = styled('p')<TextProps>`
  ${({ color, weight = 'medium', size = 'xsmall', theme }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
  `}
`
