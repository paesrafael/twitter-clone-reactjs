import React from 'react'

import FeedMain from '~/components/FeedMain'
import HeaderColumn from '~/components/HeaderColumn'
import SidebarColumn from '~/components/SidebarColumn'

import { Container, Wrapper } from './styles'

export default function UserProfile() {
  return (
    <Container>
      <Wrapper>
        <HeaderColumn />

        <FeedMain />

        <SidebarColumn />
      </Wrapper>
    </Container>
  )
}
