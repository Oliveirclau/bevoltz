import styled from 'styled-components'
import { css } from 'styled-components'

import { HeadingProps } from '../Heading'

export const HeadingContainer = styled('h1').attrs<HeadingProps>(
  ({ level }) => ({
    as: `h${level}`,
  }),
)<HeadingProps>`
  ${({
    color,
    weight = 'bold',
    size = 'medium',
    maxWidth = '100%',
    mobileSize = size,
    theme,
  }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
    font-weight: ${theme.font.weights[weight]};
    max-width: ${maxWidth};
    line-height: 120%;

    @media (max-width: 1000px) {
      font-size: ${theme.font.sizes[mobileSize]};
    }
  `}
`
