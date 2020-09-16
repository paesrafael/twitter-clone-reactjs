import React from 'react'

import UserProfile from '~/components/UserProfile'

import { userProfileName } from '~/services/api'

import {
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
} from './styles'

export default function FeedMain() {
  return (
    <Container>
      <Header>
        <Button>
          <BackIcon />
        </Button>

        <ProfileInfo>
          <ProfileName>{userProfileName}</ProfileName>
          <ProfileTweets>800 Tweets</ProfileTweets>
        </ProfileInfo>
      </Header>

      <UserProfile />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  )
}
