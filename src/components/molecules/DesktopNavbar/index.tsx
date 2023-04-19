import React from 'react'

import { Button } from '@components/atoms/Button'
import { LinkText } from '@components/atoms/LinkText'

import { MenuContainer, MenuItem, NavbarContainer } from './styles'

import { menu } from 'src/data/menu'

interface DesktopNavbar {
  partnerButton?: boolean
}

export const DesktopNavbar: React.FC<DesktopNavbar> = ({
  partnerButton = true,
}) => {
  return (
    <NavbarContainer>
      <MenuContainer>
        {menu.map(({ name, href }, index) => {
          return (
            <MenuItem key={index}>
              <LinkText content={name} href={href} color="gray_200" />
            </MenuItem>
          )
        })}
      </MenuContainer>

      {partnerButton && (
        <Button content="Seja um Parceiro" variant="secondary" />
      )}
    </NavbarContainer>
  )
}
