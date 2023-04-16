import styled, { css } from 'styled-components'

export const IntroContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(100.83deg, #f7f9f8 6.32%, #edeef0 71.74%);
  `}
`

export const TextBox = styled('div')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 6rem 0px;

  h1,
  p {
    text-align: center;
  }
`

export const ImageBox = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;

  img {
    flex: 1;
  }
`
