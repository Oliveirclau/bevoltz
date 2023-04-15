import React from 'react'

import { TextContainer } from './styles'

import defaultTheme from '@styles/theme'

export interface TextProps {
  content: string
  color: keyof typeof defaultTheme.colors
  size?: keyof typeof defaultTheme.font.sizes
  weight?: keyof typeof defaultTheme.font.weights
}

export const Text: React.FC<TextProps> = ({ content, color, weight, size }) => {
  return (
    <TextContainer color={color} weight={weight} content={content} size={size}>
      {content}
    </TextContainer>
  )
}
