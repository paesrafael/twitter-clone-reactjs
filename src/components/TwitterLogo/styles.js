import styled from 'styled-components'

const Container = styled.span`
  padding: 13px 10px 5px 10px;
  border-radius: 100%;
  display: inline-block;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: var(--twitter-hover);
  }

  svg {
    width: 40px;
    height: 40px;
    fill: var(--white);
  }
`

export { Container }
