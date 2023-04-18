import styled from 'styled-components'

export const FooterContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
  padding-top: 80px;
  padding-bottom: 20px;
  position: relative;

  .backTop {
    position: absolute;
    top: -20px;
  }
`

export const FooterArea = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: transparent;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`
