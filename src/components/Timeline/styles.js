import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Tab = styled.div`
  padding: 15px 0 15px;
  width: 100%;
  color: var(--cyan-blue);
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: var(--twitter);
    background: var(--twitter-hover);
  }
  &.active {
    color: var(--twitter);
    border-bottom: 2px solid var(--twitter);
  }
`

const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export { Container, Nav, Tab, Tweets }
