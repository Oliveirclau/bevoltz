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
    max-width: 100%;
  }

  @media (max-width: 1000px) {
    img {
      height: auto;
    }

    & > *:nth-child(1) {
      display: none;
    }

    & > *:nth-child(2) {
      color: green;
    }

    & > *:nth-child(3) {
      display: none;
    }
  }
`

export const InfoContainer = styled('div')``

export const InfoArea = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 15rem;
  margin-bottom: 15rem;
  height: 247px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const InfoBoxText = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  gap: 30px;
`

export const Separator = styled('div')`
  ${({ theme }) => css`
    display: block;
    width: 5px;
    height: 129px;
    background-color: ${theme.colors.gray_100};
  `}
`
