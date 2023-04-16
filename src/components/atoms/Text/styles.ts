import styled from 'styled-components'
import { css } from 'styled-components'

import { TextProps } from '../Text'

export const TextContainer = styled('p')<TextProps>`
  ${({
    color,
    weight = 'medium',
    size = 'xsmall',
    maxWidth = '100%',
    theme,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
    max-width: ${maxWidth};
  `}
`
