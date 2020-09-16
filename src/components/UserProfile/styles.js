import styled, { css } from 'styled-components'

import { LocationOn, Link, Calendar } from '~/assets/icons'

const DisplayFlex = css`
  display: flex;
  justify-content: start;
  align-items: center;
`

const DisplayInlineBlock = css`
  display: inline-block;
  vertical-align: middle;
`

const Container = styled.section`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

const Banner = styled.div`
  width: 100%;
  height: min(33vw, 199px);
  background: var(--twitter);
  flex-shrink: 0;
`

const BannerImage = styled.img`
  width: 100%;
  height: min(33vw, 199px);
  flex-shrink: 0;
`

const Avatar = styled.div`
  margin-top: -18%;
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));
  border: 3.75px solid var(--primary);
  border-radius: 50%;
  background: var(--cyan-blue);
  z-index: 3;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const UserProfileDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`

const UserProfileDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const UserProfileName = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const UserProfileArroba = styled.span`
  color: var(--cyan-blue);
  font-size: 15px;
`

const UserProfileDescription = styled.span`
  margin: 10px 0 10px 0;
  font-size: 15px;
  font-weight: 400;
`

const UserProfileHeaderItems = styled.div`
  ${DisplayFlex}
`

const Span = styled.div`
  margin: 0 5px 0 0;
  color: var(--cyan-blue);

  &.url {
    color: var(--twitter);
  }
`

const LinkURL = styled.a`
  color: var(--twitter);
`

const IconCSS = css`
  width: 20px;
  height: 20px;
  color: var(--cyan-blue);
  fill: var(--cyan-blue);
`

const LocationIcon = styled(LocationOn)`
  ${IconCSS}
`
const URLicon = styled(Link)`
  ${IconCSS}
`
const CalenderIcon = styled(Calendar)`
  ${IconCSS}
`

const UserProfileFollowage = styled.div`
  margin-top: 10px;
  ${DisplayFlex}

  .margin-right {
    margin-right: 20px;
  }
`

const Number = styled.span`
  font-weight: bold;
  ${DisplayInlineBlock}
`

const TextFollowing = styled.span`
  padding-left: 5px;
  color: var(--cyan-blue);
  ${DisplayInlineBlock}
`

const TextFollowers = styled.span`
  padding-left: 5px;
  color: var(--cyan-blue);
  ${DisplayInlineBlock}
`

export {
  Container,
  Banner,
  BannerImage,
  Avatar,
  Image,
  UserProfileDetails,
  UserProfileDetailHeader,
  UserProfileName,
  UserProfileArroba,
  UserProfileDescription,
  UserProfileHeaderItems,
  Span,
  LinkURL,
  LocationIcon,
  URLicon,
  CalenderIcon,
  UserProfileFollowage,
  Number,
  TextFollowing,
  TextFollowers,
}
