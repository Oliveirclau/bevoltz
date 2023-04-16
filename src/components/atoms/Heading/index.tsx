import React from 'react'

import { HeadingContainer } from './styles'

import defaultTheme from '@styles/theme'

export interface HeadingProps {
  content: string
  color: keyof typeof defaultTheme.colors
  size?: keyof typeof defaultTheme.font.sizes
  weight?: keyof typeof defaultTheme.font.weights
  level: 1 | 2 | 3 | 4 | 5 | 6
  maxWidth?: string
}

export const Heading: React.FC<HeadingProps> = ({
  content,
  level,
  color,
  weight,
  size,
  maxWidth,
}) => {
  return (
    <HeadingContainer
      level={level}
      color={color}
      weight={weight}
      content={content}
      size={size}
      maxWidth={maxWidth}
    >
      {content}
    </HeadingContainer>
  )
}
