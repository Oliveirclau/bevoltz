import Link, { LinkProps } from 'next/link'
import React from 'react'

import { TextProps } from '../Text'
import { LinkTextContainer } from './styles'

interface LinkTextProps extends TextProps, LinkProps {}

export const LinkText: React.FC<LinkTextProps> = ({
  content,
  color,
  weight,
  size,
  ...rest
}) => {
  return (
    <Link {...rest} target="_blank">
      <LinkTextContainer
        color={color}
        weight={weight}
        content={content}
        size={size}
      >
        {content}
      </LinkTextContainer>
    </Link>
  )
}
