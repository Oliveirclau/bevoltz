import Image from 'next/image'

import { Button } from '@components/atoms/Button'
import { Text } from '@components/atoms/Text'
import { DesktopNavbar } from '@components/molecules/DesktopNavbar'

import { FooterArea, FooterContainer } from './styles'

import logo from '@assets/logo.svg'
import { ArrowUp } from '@phosphor-icons/react'

export const Footer: React.FC = () => {
  function handleBackToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <FooterContainer>
      <FooterArea className="container-content">
        <Image src={logo} width={130} height={24} alt="Logo escrito beVoltz" />

        <DesktopNavbar partnerButton={false} />
      </FooterArea>
      <Text
        content="© 2023 beVoltz Technologies. Ltda. Todos os direitos reservados."
        size="xxsmall"
        color="gray_100"
        align="center"
      />

      <Button
        content="Voltar ao topo"
        variant="primary"
        icon={<ArrowUp />}
        className="backTop"
        onClick={handleBackToTop}
      />
    </FooterContainer>
  )
}
