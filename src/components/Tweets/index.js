import React from 'react'

import { userProfileName, userProfileNick } from '~/services/api'

import { avatar } from '~/assets/images/imagesLinks'

import {
  Container,
  Retweeted,
  TweetsContent,
  Avatar,
  Image,
  Content,
  Header,
  HeaderDetails,
  Name,
  Arroba,
  Span,
  Date,
  IconArrow,
  Description,
  ImageContent,
  IconsContent,
  IconType,
  IconBox,
  Paragraph,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
  BarChartIcon,
} from './styles'

export default function Tweets({
  text,
  image,
  retweet,
  date,
  comment,
  commentsActive,
  retweetQty,
  like,
  likeActive,
}) {
  return (
    <Container>
      {retweet && (
        <Retweeted>
          <RetweetIcon />
          Você retweetou
        </Retweeted>
      )}

      <TweetsContent>
        <Avatar>
          <Image src={avatar} alt={`Foto de ${userProfileName}`} />
        </Avatar>

        <Content>
          <Header>
            <HeaderDetails>
              <Name>{userProfileName}</Name>
              <Arroba>{userProfileNick}</Arroba>
              <Span>·</Span>
              <Date>{date}</Date>
            </HeaderDetails>

            <IconArrow />
          </Header>

          <Description>{text}</Description>

          {!!image && <ImageContent src={image} alt={text} />}

          <IconsContent>
            <IconType className={!!commentsActive ? 'active' : ''}>
              <IconBox className="icon-box">
                <CommentIcon />
              </IconBox>
              <Paragraph>{comment}</Paragraph>
            </IconType>

            <IconType
              className={`icon-retweet ${!!retweet ? 'active' : ''}`}
              typeIconBG="var(--retweet-hover)"
              typeIconTxt="var(--retweet)"
            >
              <IconBox className="icon-box">
                <RetweetIcon />
              </IconBox>
              <Paragraph>{retweetQty}</Paragraph>
            </IconType>

            <IconType
              className={!!likeActive ? 'active' : ''}
              typeIconBG="var(--like-hover)"
              typeIconTxt="var(--like)"
            >
              <IconBox className="icon-box">
                <LikeIcon />
              </IconBox>
              <Paragraph>{like}</Paragraph>
            </IconType>

            <IconType>
              <IconBox className="icon-box">
                <ShareIcon />
              </IconBox>
            </IconType>

            <IconType>
              <IconBox className="icon-box">
                <BarChartIcon />
              </IconBox>
            </IconType>
          </IconsContent>
        </Content>
      </TweetsContent>
    </Container>
  )
}
