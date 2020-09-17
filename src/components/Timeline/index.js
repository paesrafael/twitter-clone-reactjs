import React from 'react'

import Tweet from '~/components/Tweets'

import { bannerImage, netflixUIClone } from '~/assets/images/imagesLinks'

import { Container, Nav, Tab, Tweets } from './styles'

export default function Timeline() {
  return (
    <Container>
      <Nav>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets e respostas</Tab>
        <Tab>Mídia</Tab>
        <Tab>Curtidas</Tab>
      </Nav>

      <Tweets>
        <Tweet
          text="O que você achou desse UI Clone?"
          date="20 min"
          like="5 mil"
          likeActive
        />

        <Tweet
          text="UI Clone é divertido :)"
          image={netflixUIClone}
          date="1 hora"
          comment="50"
          commentsActive
          retweetQty="300"
          like="500"
        />

        <Tweet
          text="Robotização de Backoffice é na POINTEC"
          image={bannerImage}
          date="13 de Setembro"
          comment="100"
          retweetQty="200"
          like="1 mil"
          retweet
        />

        <Tweet
          text="Desenvolvimento de sites é na POINTEC"
          date="13 de Setembro"
          comment="500"
          retweetQty="500"
          like="2 mil"
        />

        <Tweet
          text="Visite o site da POINTEC www.pointec.dev"
          date="13 de Setembro"
          comment="600"
          retweetQty="700"
          like="3 mil"
        />
      </Tweets>
    </Container>
  )
}
