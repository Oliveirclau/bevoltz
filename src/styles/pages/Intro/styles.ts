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
`

export const ImageBox = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;

  img {
    flex: 1;
    max-width: 100%;
  }

  @media (max-width: 1580px) {
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

export const JourneyContainer = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_50};
  `}
`

export const JourneyArea = styled('div')`
  max-width: 1200px;
  margin: 0 auto;
  padding: 130px 0px;
  display: flex;
  flex-direction: column;
  gap: 130px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1440px) {
    max-width: 100%;
  }
`

export const StationContainer = styled('div')`
  padding: 132px 0px;
`

export const StationArea = styled('div')`
  padding: 132px 0px;
`

export const StationSearch = styled('div')`
  display: flex;
  margin-top: 90px;

  gap: 35px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const StationMapBox = styled('div')`
  display: flex;
  margin-top: 30px;
  gap: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const StationMap = styled('div')`
  flex: 1.8;
  height: 400px;

  img {
    width: 100%;
  }
`

export const StationFilter = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  height: 400px;
  overflow-y: scroll;
  padding-right: 20px;
`
