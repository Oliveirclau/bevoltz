import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

export default function Home() {
  return (
    <>
      <Heading
        content="Abasteça seu veículo elétrico com facilidade e rapidez, onde quer que vá."
        level={1}
        color="gray_100"
        size="huge"
      />

      <Text
        content="Aprimoramos a experiência de carregamento, combinando design intuitivo, tecnologia de ponta e um compromisso inabalável com a sustentabilidade."
        color="gray_100"
        size="xsmall"
      />
    </>
  )
}
