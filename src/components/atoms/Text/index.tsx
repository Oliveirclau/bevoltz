import React from 'react'

import { TextContainer } from './styles'

import defaultTheme from '@styles/theme'

export interface TextProps {
  content: string
  color: keyof typeof defaultTheme.colors
  size?: keyof typeof defaultTheme.font.sizes
  weight?: keyof typeof defaultTheme.font.weights
  maxWidth?: string
}

export const Text: React.FC<TextProps> = ({
  content,
  color,
  weight,
  size,
  maxWidth,
}) => {
  return (
    <TextContainer
      color={color}
      weight={weight}
      content={content}
      size={size}
      maxWidth={maxWidth}
    >
      {content}
    </TextContainer>
  )
}
