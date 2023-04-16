import { Button } from '@components/atoms/Button'
import { LinkText } from '@components/atoms/LinkText'

export default function Home() {
  return (
    <>
      <Button content="Voltar" variant="primary" />
      <LinkText
        color="gray_50"
        content="Clique Aqui"
        href="https://www.youtube.com/watch?v=Me6wvur4VvQ"
        size="medium"
      />
    </>
  )
}
