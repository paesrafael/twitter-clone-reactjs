import React from 'react'

import { userProfileName, userProfileNick } from '~/services/api'

import Button from '~/components/Button'
import TwitterLogo from '~/components/TwitterLogo'

import { avatar } from '~/assets/images/imagesLinks'

import {
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
} from './styles'

export default function HeaderColumn() {
  return (
    <Container className="header-column">
      <Header>
        <Logo>
          <TwitterLogo />
        </Logo>

        <NavButtons>
          <ButtonContent>
            <ButtonItem>
              <HomeIcon />
              <Span>Página Inicial</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent>
            <ButtonItem>
              <HashIcon />
              <Span>Explorar</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent>
            <ButtonItem>
              <NotificationIcon />
              <Span>Notificações</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent>
            <ButtonItem>
              <EmailIcon />
              <Span>Mensagens</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent>
            <ButtonItem>
              <BookmarkIcon />
              <Span>Itens salvos</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent>
            <ButtonItem>
              <ListIcon />
              <Span>Listas</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent>
            <ButtonItem className="active">
              <PerfilIcon />
              <Span>Perfil</Span>
            </ButtonItem>
          </ButtonContent>

          <ButtonContent className="btn-more">
            <ButtonItem>
              <EllipsisHorizontalIcon />
              <Span>Mais</Span>
            </ButtonItem>
          </ButtonContent>
        </NavButtons>

        <Button text="Tweetar" logo />
      </Header>

      <Footer>
        <Avatar>
          <Image src={avatar} alt={`Foto de ${userProfileName}`} />
        </Avatar>

        <ProfileDetails>
          <ProfileName>{userProfileName}</ProfileName>
          <ProfileArroba>{userProfileNick}</ProfileArroba>
        </ProfileDetails>

        <ArrowDownIcon />
      </Footer>
    </Container>
  )
}
