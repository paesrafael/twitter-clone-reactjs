import styled from 'styled-components'

import { Search, ArrowIosDownwardOutline } from '~/assets/icons'

const Container = styled.section`
  position: relative;
  display: none;

  @media (min-width: 1000px) {
    width: min(399px, 100%);
    display: flex;
    flex-direction: column;
  }
`

const SearchWrapper = styled.div`
  position: fixed;
  top: 0;
  padding: 10px;
  width: min(399px, 100%);
  background: var(--primary);
  z-index: 3;

  &.input-focus {
    .search-content {
      border-color: var(--twitter);
      background: transparent;

      svg {
        fill: var(--twitter);
      }
    }
  }
`

const SearchContent = styled.div`
  padding: 5px;
  border: 1px solid var(--search);
  border-radius: 99999px;
  background: var(--search);
  display: flex;

  svg {
    margin: 0 10px;
  }
`

const SearchIcon = styled(Search)`
  width: 30px;
  height: 30px;
  fill: var(--cyan-blue);
`

const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;

  ::placeholder {
    color: var(--cyan-blue);
  }
`

const SidebarContent = styled.div`
  padding: 65px 25px;
`

const Footer = styled.div``

const Nav = styled.nav``

const Span = styled.span`
  margin-right: 10px;
  color: var(--cyan-blue);
  font-size: 13px;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.twitt {
    margin-top: 5px;
    display: block;
    cursor: default;

    &:hover {
      text-decoration: none;
    }
  }
`

const More = styled.div`
  display: inline-block;
  vertical-align: middle;

  span {
    margin: 0;
  }
`

const Arrow = styled(ArrowIosDownwardOutline)`
  width: 20px;
  height: 20px;
  fill: var(--cyan-blue);
`

export {
  Container,
  SearchWrapper,
  SearchContent,
  SearchIcon,
  SearchInput,
  SidebarContent,
  Footer,
  Nav,
  Span,
  More,
  Arrow,
}
