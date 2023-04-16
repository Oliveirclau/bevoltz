import Image from 'next/image'

import { Button } from '@components/atoms/Button'
import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'
import { Header } from '@components/organisms/Header'

import introBannerDireita from '@assets/intro-banner-direita.png'
import introBannerEsquerda from '@assets/intro-banner-esquerda.png'
import introBanner from '@assets/intro-banner.png'
import {
  ImageBox,
  InfoArea,
  InfoBoxText,
  InfoContainer,
  IntroContainer,
  Separator,
  TextBox,
} from '@styles/pages/Intro/styles'

export default function Home() {
  return (
    <>
      <Header />

      <IntroContainer>
        <TextBox className="full-container-content">
          <Heading
            content="Abasteça seu veículo elétrico com facilidade e rapidez, onde quer que vá."
            color="gray_300"
            size="xxlarge"
            level={1}
            maxWidth="973px"
            mobileSize="large"
          />

          <Text
            content="Aprimoramos a experiência de carregamento, combinando design intuitivo, tecnologia de ponta e um compromisso inabalável com a sustentabilidade."
            color="gray_100"
            size="xsmall"
            mobileSize="xxsmall"
            maxWidth="708px"
          />

          <Button content="Conheça a beVoltz" variant="primary" />
        </TextBox>

        <ImageBox>
          <Image
            src={introBannerEsquerda}
            width={200}
            height={400}
            alt="Carro eletrico carregando"
          />
          <Image
            src={introBanner}
            width={1200}
            height={400}
            alt="Carro eletrico carregando"
          />
          <Image
            src={introBannerDireita}
            width={200}
            height={400}
            alt="Carro eletrico carregando"
          />
        </ImageBox>
      </IntroContainer>

      <InfoContainer className="container-content">
        <InfoArea>
          <Heading
            content="Conectando motoristas e estações de carregamento em uma rede global unificada."
            color="gray_300"
            size="large"
            level={1}
            maxWidth="520px"
            mobileSize="small"
          />

          <InfoBoxText>
            <Separator></Separator>
            <Text
              content="Descubra a eficiência sem precedentes no carregamento de veículos elétricos através da plataforma beVoltz, projetada para atender às demandas de um mundo em constante evolução."
              color="gray_100"
              size="xsmall"
              mobileSize="xxsmall"
              maxWidth="534px"
              lineHeight={160}
            />
          </InfoBoxText>
        </InfoArea>
      </InfoContainer>
    </>
  )
}
