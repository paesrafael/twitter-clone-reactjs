import React from 'react'

import {
  userProfileName,
  userProfileNick,
  userProfileWork,
} from '~/services/api'

import Button from '~/components/Button'
import Timeline from '~/components/Timeline'

import { avatar, bannerImage } from '~/assets/images/imagesLinks'

import {
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
} from './styles'

export default function UserProfile() {
  return (
    <Container>
      <Banner>
        <BannerImage
          src={bannerImage}
          alt={`Banner da capa do perfil de ${userProfileName}`}
        />
      </Banner>

      <UserProfileDetails>
        <UserProfileDetailHeader>
          <Avatar>
            <Image src={avatar} alt={`Foto de ${userProfileName}`} />
          </Avatar>

          <Button outlined text="Editar perfil" />
        </UserProfileDetailHeader>

        <UserProfileName>{userProfileName}</UserProfileName>
        <UserProfileArroba>{userProfileNick}</UserProfileArroba>
        <UserProfileDescription>{userProfileWork}</UserProfileDescription>

        <UserProfileHeaderItems>
          <Span>
            <LocationIcon />
            Brasil
          </Span>

          <Span className="url">
            <URLicon />
            <LinkURL href="//pointec.dev" target="_blank">
              pointec.dev
            </LinkURL>
          </Span>

          <Span>
            <CalenderIcon />
            Ingressou em 2017
          </Span>
        </UserProfileHeaderItems>

        <UserProfileFollowage>
          <Span className="margin-right">
            <Number>200</Number>
            <TextFollowing>Seguindo</TextFollowing>
          </Span>

          <Span>
            <Number>200</Number>
            <TextFollowers>Seguidores</TextFollowers>
          </Span>
        </UserProfileFollowage>
      </UserProfileDetails>

      <Timeline />
    </Container>
  )
}
