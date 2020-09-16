import styled, { css } from 'styled-components'

import {
  HomeCircle,
  Hash,
  Notifications,
  Mail,
  Bookmark,
  FileList2,
  User,
  EllipsisHorizontalCircle,
  ArrowIosDownwardOutline,
} from '~/assets/icons'

const Container = styled.header`
  display: none;

  @media (min-width: 500px) {
    position: sticky;
    top: 0;
    left: 0;
    padding: 15px;
    max-height: 100vh;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  .logo-icon {
    padding: 10px 10px 5px 10px;
  }
  .logo-icon p {
    display: none;
  }
  .logo-icon svg {
    width: 1.5em;
    height: 1.5em;
    fill: var(--white);
  }

  @media (min-width: 1280px) {
    width: 275px;

    .logo-icon {
      padding: 15px;
      width: 90%;
      text-align: center;
    }
    .logo-icon p {
      display: block;
    }
    .logo-icon svg {
      display: none;
    }
  }
`

const Logo = styled.div`
  width: 100%;
  display: block;
`

const NavButtons = styled.div`
  width: 100%;
  display: block;
`

const ButtonContent = styled.div`
  margin: 5px 0;
  cursor: pointer;

  &.btn-more {
    margin-bottom: 15px;
  }
`

const ButtonItem = styled.span`
  padding: 15px;
  border-radius: 99999px;
  display: inline-block;
  flex-shrink: 0;

  &:hover {
    background: var(--twitter-hover);

    span {
      color: var(--twitter);
    }

    svg {
      path,
      circle,
      polyline {
        color: var(--twitter);
      }
    }
  }

  &.active {
    span {
      color: var(--twitter);
    }

    svg {
      fill: var(--twitter);
    }
  }
`

const Span = styled.span`
  display: none;

  @media (min-width: 1280px) {
    margin-left: 20px;
    font-size: 19px;
    font-weight: bold;
    display: inline-block;
    vertical-align: top;
  }
`

const IconCSS = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
`

const HomeIcon = styled(HomeCircle)`
  ${IconCSS}
`

const HashIcon = styled(Hash)`
  ${IconCSS}
`

const NotificationIcon = styled(Notifications)`
  ${IconCSS}
`

const EmailIcon = styled(Mail)`
  ${IconCSS}
`

const BookmarkIcon = styled(Bookmark)`
  ${IconCSS}
`

const ListIcon = styled(FileList2)`
  ${IconCSS}
`

const PerfilIcon = styled(User)`
  ${IconCSS}
`

const EllipsisHorizontalIcon = styled(EllipsisHorizontalCircle)`
  ${IconCSS}
`

const Footer = styled.footer`
  padding: 5px;
  border-radius: 99999px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: var(--twitter-hover);
  }

  @media (min-width: 1280px) {
    padding: 10px;
    margin-top: 40px;
  }

  svg {
    display: none;

    @media (min-width: 1280px) {
      display: inline-block;
    }
  }
`

const Avatar = styled.div`
  width: max(49px, min(49px, 22vw));
  height: max(49px, min(49px, 22vw));
  border: 3.75px solid var(--primary);
  border-radius: 50%;
  background: var(--cyan-blue);
  flex-shrink: 0;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  flex-shrink: 0;
`

const ProfileDetails = styled.div`
  margin-left: 15px;
  width: 100%;
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`

const ProfileName = styled.h2`
  font-size: 15px;
  font-weight: bold;
  line-height: 1.3125;
`

const ProfileArroba = styled.span`
  color: var(--cyan-blue);
  font-size: 13px;
  font-weight: 400;
`

const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  ${IconCSS}
`

export {
  Container,
  Header,
  Logo,
  NavButtons,
  ButtonContent,
  ButtonItem,
  Span,
  HomeIcon,
  HashIcon,
  NotificationIcon,
  EmailIcon,
  BookmarkIcon,
  ListIcon,
  PerfilIcon,
  EllipsisHorizontalIcon,
  Footer,
  Avatar,
  Image,
  ProfileDetails,
  ProfileName,
  ProfileArroba,
  ArrowDownIcon,
}
