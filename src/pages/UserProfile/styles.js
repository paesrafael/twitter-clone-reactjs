import styled from 'styled-components'

const Container = styled.section``

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`

export { Container, Wrapper }
