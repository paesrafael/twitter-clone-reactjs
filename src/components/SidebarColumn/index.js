import React, { useState } from 'react'

import StickyBox from 'react-sticky-box'

import GalleryImage from '~/components/GalleryImage'
import ListCard from '~/components/ListCard'
import FollowersSuggestion from '~/components/FollowersSuggestion'
import NewsCard from '~/components/NewsCard'

import {
  avatar,
  bannerImage,
  netflixUIClone,
  twitterUIClone,
} from '~/assets/images/imagesLinks'

import {
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
} from './styles'

export default function SidebarColumn() {
  const [inputFocus, setInputFocus] = useState(false)

  function handleInputFocus() {
    setInputFocus(true)
  }

  function handleInputOnBlur() {
    setInputFocus(false)
  }

  return (
    <Container>
      <SearchWrapper className={inputFocus ? 'input-focus' : ''}>
        <SearchContent className="search-content">
          <SearchIcon />
          <SearchInput
            placeholder="Buscar no Twitter"
            onFocus={handleInputFocus}
            onBlur={handleInputOnBlur}
          />
        </SearchContent>
      </SearchWrapper>

      <StickyBox>
        <SidebarContent>
          <GalleryImage
            images={[
              { image: twitterUIClone, alt: 'UI Clone do Twitter' },
              {
                image: bannerImage,
                alt: 'Robotização de Backoffice é na POINTEC',
              },
              {
                image: netflixUIClone,
                alt: 'Robotização de Backoffice é na POINTEC',
              },
              { image: netflixUIClone, alt: 'UI Clone da Netflix' },
              { image: twitterUIClone, alt: 'UI Clone do Twitter' },
              {
                image: bannerImage,
                alt: 'Robotização de Backoffice é na POINTEC',
              },
            ]}
          />

          <ListCard
            title="Talvez você curta"
            elements={[
              <FollowersSuggestion
                avatar={avatar}
                name="Rafael Paes"
                arroba="@paesrfael"
              />,

              <FollowersSuggestion
                avatar={avatar}
                name="Rafa Paes"
                arroba="@paesrfael"
              />,
            ]}
            buttonMore
          />

          <ListCard
            title="O que está acontecendo"
            elements={[
              <NewsCard
                category="Tecnologia"
                date="15 de Setembro"
                title="Precisando de um Site?"
                description="A tecnologia está aí, sua empresa acompanha? Faça já o seu site com a POINTEC"
              />,

              <NewsCard
                title="Robotização de Backoffice"
                description="Robotize seu Backoffice com a POINTEC"
              />,

              <NewsCard
                title="Conhece o React Native Template POINTEC Basic?"
                description="Visite meu Github e procure esse projeto."
              />,

              <NewsCard
                title="Posso usar o React em qualquer projeto?"
                description="Sem dúvidas, mas, vale avaliar o projeto e escolher a Stack adequada."
              />,
            ]}
            buttonMore
          />

          <Footer>
            <Nav>
              <Span>Termos</Span>
              <Span>Política de Privacidade</Span>
              <Span>Cookies</Span>
              <Span>Informaçãoes de anúncios</Span>

              <More>
                <Span>Mais</Span>
                <Arrow />
              </More>

              <Span className="twitt">© 2020 Twitter, Inc.</Span>
            </Nav>
          </Footer>
        </SidebarContent>
      </StickyBox>
    </Container>
  )
}
