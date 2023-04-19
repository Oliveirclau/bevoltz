import { LinkText } from '@components/atoms/LinkText'

import { MenuContainer, MenuItem, NavbarContainer } from './styles'

import { menu } from 'src/data/menu'

interface MobileNavbar {
  isOpen: boolean
}

export const MobileNavbar: React.FC<MobileNavbar> = ({ isOpen }) => {
  return (
    <NavbarContainer>
      {isOpen && (
        <MenuContainer>
          {menu.map(({ name, href }, index) => {
            return (
              <MenuItem key={index}>
                <LinkText content={name} href={href} color="gray_200" />
              </MenuItem>
            )
          })}
        </MenuContainer>
      )}
    </NavbarContainer>
  )
}
