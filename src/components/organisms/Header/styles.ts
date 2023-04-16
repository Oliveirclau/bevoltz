import styled, { css } from 'styled-components'

export const HeaderContainer = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.gray_50};
    padding-top: 80px;
    padding-bottom: 40px;

    display: flex;
    flex-direction: column;
  `}
`

export const HeaderArea = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    background-color: ${theme.colors.gray_50};
  `}
`

export const IconHamburger = styled('div')`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`
