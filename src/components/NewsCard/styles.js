import styled, { css } from 'styled-components'

const Container = styled.div`
  padding: 10px 15px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background: var(--white-light);
  }
`

const TextCSS = css`
  margin-bottom: 5px;
  color: var(--cyan-blue);
  font-size: 13px;
`

const Flexbox = styled.div`
  display: flex;
  align-items: center;
`

const Category = styled.div`
  ${TextCSS}
`

const Span = styled.span`
  margin: 0 5px 0 5px;
  ${TextCSS}
`

const Date = styled.div`
  ${TextCSS}
`

const PatternCSS = css`
  font-size: 15px;
`

const Title = styled.h3`
  ${PatternCSS}
  font-weight: bold;
`

const Description = styled.div`
  ${PatternCSS}
  color: var(--cyan-blue);
`

export { Container, Flexbox, Span, Category, Date, Title, Description }
