import styled from 'styled-components'

const Container = styled.aside`
  margin-bottom: 25px;
  border-radius: 15px;
  background: var(--secondary);
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  padding: 10px 15px;
`

const Item = styled.div``

const ButtonMore = styled.a`
  padding: 15px;
  color: var(--twitter);
  font-size: 15px;
  border-top: 1px solid var(--border);
  border-radius: 0 0 15px 15px;
  cursor: pointer;

  &:hover {
    background: var(--white-light);
  }
`

export { Container, Title, Item, ButtonMore }
