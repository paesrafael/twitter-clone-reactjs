import styled, { css } from 'styled-components'

import {
  ArrowLeft,
  HomeCircle,
  Search,
  Notifications,
  Email,
} from '~/assets/icons'

const Container = styled.main`
  width: min(600px, 100%);
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    border-width: 0 1px 0 1px;
    border-color: var(--outline);
    border-style: solid;
  }

  @media (min-width: 1600px) {
    width: min(715px, 100%);
  }
`

const Header = styled.div`
  position: sticky;
  top: 0;
  padding: 8px 0 9px 13px;
  text-align: left;
  border-bottom: 1px solid var(--outline);
  background: var(--primary);
  display: flex;
  align-items: center;
  z-index: 99;
`

const Button = styled.button`
  padding: 8px;
  border-radius: 50%;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: var(--twitter-hover);
  }
`

const BackIcon = styled(ArrowLeft)`
  width: 25px;
  height: 25px;
  fill: var(--twitter);
`

const ProfileInfo = styled.div`
  margin-left: 15px;
  display: block;
`

const ProfileName = styled.h2`
  font-size: 19px;
  font-weight: 800;
  line-height: 1.3125;
`

const ProfileTweets = styled.span`
  color: var(--cyan-blue);
  font-size: 13px;
  font-weight: 400;
`

const BottomMenu = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10px min(45px, max(10vw, 10px));
  width: 100%;
  border-top: 1px solid var(--outline);
  background: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  @media (min-width: 500px) {
    display: none;
  }
`

const IconCSS = css`
  width: 30px;
  height: 30px;
  fill: var(--cyan-blue);
  cursor: pointer;

  &:hover,
  &.active {
    fill: var(--twitter);
  }
`

const HomeIcon = styled(HomeCircle)`
  ${IconCSS};
`

const SearchIcon = styled(Search)`
  ${IconCSS};
`

const BellIcon = styled(Notifications)`
  ${IconCSS};
`

const EmailIcon = styled(Email)`
  ${IconCSS};
`

export {
  Container,
  Header,
  Button,
  BackIcon,
  ProfileInfo,
  ProfileName,
  ProfileTweets,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
}
