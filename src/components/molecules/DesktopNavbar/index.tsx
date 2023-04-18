import React from 'react'

import { Button } from '@components/atoms/Button'
import { LinkText } from '@components/atoms/LinkText'

import { MenuContainer, MenuItem, NavbarContainer } from './styles'

interface DesktopNavbar {
  partnerButton?: boolean
}

export const DesktopNavbar: React.FC<DesktopNavbar> = ({
  partnerButton = true,
}) => {
  return (
    <NavbarContainer>
      <MenuContainer>
        <MenuItem>
          <LinkText content="Inicio" href="item1" color="gray_200" />
        </MenuItem>
        <MenuItem>
          <LinkText content="Sobre" href="item1" color="gray_200" />
        </MenuItem>
        <MenuItem>
          <LinkText content="Aplicativo" href="item1" color="gray_200" />
        </MenuItem>
        <MenuItem>
          <LinkText content="Soluções" href="item1" color="gray_200" />
        </MenuItem>
        <MenuItem>
          <LinkText content="Contato" href="item1" color="gray_200" />
        </MenuItem>
      </MenuContainer>

      {partnerButton && (
        <Button content="Seja um Parceiro" variant="secondary" />
      )}
    </NavbarContainer>
  )
}
