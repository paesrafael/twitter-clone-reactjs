import styled from 'styled-components'

const Container = styled.div`
  padding: 10px 15px 10px 15px;
  border: ${(props) => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  border-radius: 25px;
  background: ${(props) => (props.outlined ? 'transparent' : 'var(--twitter)')};
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.outlined ? 'var(--twitter-hover)' : 'var(--twitter-light-hover)'};
  }
`

const Text = styled.p`
  color: ${(props) => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  font-size: 15px;
  font-weight: bold;
`

export { Container, Text }
