import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

import { StationCardContainer, StationCategory, StationData } from './styles'

export const StationCard: React.FC = () => {
  return (
    <StationCardContainer>
      <Heading content="Estação #1" level={5} size="xsmall" color="gray_300" />
      <StationCategory>
        <Heading
          content="Categoria:"
          level={5}
          size="xxsmall"
          color="gray_300"
        />

        <Text content="Estacionamento" size="xxsmall" color="gray_100" />
      </StationCategory>

      <StationData>
        <Text content="Seg à Sexta 9h - 18h " size="xxsmall" color="gray_100" />
        <Text
          content="Av. Lins de Vasconcelos, 1222 - Aclimação, São Paulo"
          size="xxsmall"
          color="gray_100"
        />
        <Text content="(11) 3385-8010" size="xxsmall" color="gray_100" />
      </StationData>
    </StationCardContainer>
  )
}
