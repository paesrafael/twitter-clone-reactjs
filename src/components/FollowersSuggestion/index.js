import React from 'react'

import Button from '~/components/Button'

import {
  Container,
  FollowItem,
  Avatar,
  Image,
  FollowItemDetails,
  Name,
  Arroba,
  ButtonContent,
} from './styles'

export default function FollowersSuggestion({ avatar, name, arroba }) {
  return (
    <Container>
      <FollowItem>
        <Avatar>
          <Image src={avatar} alt={`Fotos de ${name}`} />
        </Avatar>

        <FollowItemDetails>
          <Name>{name}</Name>
          <Arroba>{arroba}</Arroba>
        </FollowItemDetails>

        <ButtonContent>
          <Button text="Seguir" outlined />
        </ButtonContent>
      </FollowItem>
    </Container>
  )
}
