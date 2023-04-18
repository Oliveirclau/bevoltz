import Image from 'next/image'

import { Button } from '@components/atoms/Button'
import { Heading } from '@components/atoms/Heading'
import { InputSelect } from '@components/atoms/Input'
import { Text } from '@components/atoms/Text'
import { StationCard } from '@components/molecules/StationCard'
import { TitleSection } from '@components/molecules/TitleSection'
import { Header } from '@components/organisms/Header'

import appleStore from '@assets/apple-store.svg'
import googlePlay from '@assets/google-play.svg'
import introBannerDireita from '@assets/intro-banner-direita.png'
import introBannerEsquerda from '@assets/intro-banner-esquerda.png'
import introBanner from '@assets/intro-banner.png'
import iphone from '@assets/iphone.png'
import journeySvg from '@assets/jorney.svg'
import map from '@assets/map.png'
import {
  AppArea,
  AppContainer,
  AppTextBox,
  AppTextImage,
  ImageBox,
  InfoArea,
  InfoBoxText,
  InfoContainer,
  IntroContainer,
  JourneyArea,
  JourneyContainer,
  Separator,
  StationArea,
  StationContainer,
  StationFilter,
  StationMap,
  StationMapBox,
  StationSearch,
  StoreIcons,
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
            align="center"
            mobilePadding={true}
          />

          <Text
            content="Aprimoramos a experiência de carregamento, combinando design intuitivo, tecnologia de ponta e um compromisso inabalável com a sustentabilidade."
            color="gray_100"
            size="xsmall"
            mobileSize="xxsmall"
            maxWidth="708px"
            align="center"
            mobilePadding={true}
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
            mobileSize="medium"
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

      <JourneyContainer>
        <JourneyArea>
          <TitleSection
            title="Reserve, Abasteça, Pague"
            subtitle="Aprimoramos a experiência de carregamento, combinando design intuitivo, tecnologia de ponta e um compromisso inabalável com a sustentabilidade."
            subtitleWidth="647px"
          />

          <Image src={journeySvg} width={100} height={100} alt="jornadinha" />
        </JourneyArea>
      </JourneyContainer>

      <StationContainer className="container-content">
        <StationArea>
          <TitleSection
            title="Mais de 200 estações espalhadas por 52 cidades no Brasil"
            titleWidth="693px"
            subtitle="Selecione a cidade e categoria e veja as estações disponiveis para recarga
          mais próxima da sua região"
            subtitleWidth="647px"
          />

          <StationSearch>
            <InputSelect
              label="Cidade:"
              options={['São Paulo', 'Rio de janeiro', 'Minas Gerais']}
            />
            <InputSelect
              label="Categoria:"
              options={['Estacionamento', 'Farmácia', 'Shopping']}
            />
          </StationSearch>

          <StationMapBox>
            <StationFilter>
              <StationCard />
              <StationCard />
              <StationCard />
            </StationFilter>
            <StationMap>
              <Image src={map} width={695} height={413} alt="map" />
            </StationMap>
          </StationMapBox>
        </StationArea>
      </StationContainer>

      <AppContainer>
        <AppArea className="container-content">
          <AppTextBox>
            <Heading
              content="O aplicativo beVoltz está disponivel nas principais plataformas"
              color="black"
              size="xlarge"
              level={2}
              maxWidth="630px"
              mobileSize="large"
              mobilePadding={true}
            />

            <StoreIcons>
              <Image
                src={appleStore}
                width={178.56}
                height={54.71}
                alt="ícone apple store"
              />
              <Image
                src={googlePlay}
                width={178.56}
                height={54.71}
                alt="ícone google play"
              />
            </StoreIcons>
          </AppTextBox>

          <AppTextImage>
            <Image src={iphone} width={406.17} height={829} alt="Iphone" />
          </AppTextImage>
        </AppArea>
      </AppContainer>
    </>
  )
}
