import styled, { css } from 'styled-components'

import {
  Chat,
  Retweet,
  FavoriteBorder,
  ShareAlternative,
  BarChart,
  ArrowIosDownwardOutline,
} from '~/assets/icons'

const DisplayFlex = css`
  display: flex;
  align-items: center;
`

const IconCSS = css`
  width: 1.3em;
  height: 1.3em;
  fill: var(--cyan-blue);
`

const Container = styled.article`
  padding: 10px 15px 0;
  border-bottom: 1px solid var(--outline);
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background: var(--secondary);
  }

  @media (max-width: 768px) {
    padding: 10px 10px 0;
  }
`

const Retweeted = styled.div`
  margin-top: 5px;
  color: var(--cyan-blue);
  font-size: 13px;
  display: flex;
  align-items: center;

  svg {
    margin: 0 10px 0 25px;
    font-size: 19px;
  }
`

const TweetsContent = styled.div`
  display: flex;
`

const Avatar = styled.div`
  margin-top: 5px;
  width: max(49px, min(49px, 30vw));
  height: max(49px, min(49px, 30vw));
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

const Content = styled.div`
  margin-left: 10px;
  width: 100%;
`

const Header = styled.div`
  ${DisplayFlex}
  white-space: nowrap;
  justify-content: space-between;

  svg {
    padding: 5px;
    font-size: 22px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      fill: var(--twitter);
      background: var(--twitter-hover);
    }
  }
`

const HeaderDetails = styled.div``

const Name = styled.span`
  color: var(--white);
  font-size: 15px;
  font-weight: bold;
`

const ColorCyan15 = css`
  color: var(--cyan-blue);
  font-size: 15px;
`

const NowRap = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Arroba = styled.span`
  margin-left: 5px;
  ${ColorCyan15}
  ${NowRap}
`

const Span = styled.span`
  margin: 0 5px 0 5px;
  ${ColorCyan15}
`

const Date = styled.time`
  ${ColorCyan15}
  ${NowRap}
`

const IconArrow = styled(ArrowIosDownwardOutline)`
  ${IconCSS}
`

const Description = styled.p`
  margin: 5px 0 10px;
  font-size: 15px;
`

const ImageContent = styled.img`
  width: 100%;
  /* height: min(204px, max(175px, 40vw)); */
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 95%;
  }
`

const IconsContent = styled.div`
  margin: 5px 0;
  ${DisplayFlex}
  justify-content: space-between;
`

const IconType = styled.div`
  ${DisplayFlex}
  flex-wrap: wrap;

  &:hover,
  &.active {
    cursor: pointer;
    p {
      color: ${(props) =>
        props.typeIconTxt ? props.typeIconTxt : 'var(--twitter)'};
    }

    svg {
      fill: ${(props) =>
        props.typeIconTxt ? props.typeIconTxt : 'var(--twitter)'};
    }

    .icon-box {
      border-radius: 50px;
      background: ${(props) =>
        props.typeIconBG ? props.typeIconBG : 'var(--twitter-hover)'};
    }
  }

  &.active {
    .icon-box {
      background: transparent;
    }

    &:hover {
      .icon-box {
        background: ${(props) =>
          props.typeIconBG ? props.typeIconBG : 'var(--twitter-hover)'};
      }
    }
  }

  &.icon-retweet {
    .icon-box {
      padding: 5px;
    }
  }
`

const IconBox = styled.span`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Paragraph = styled.p`
  margin-left: 5px;
  color: var(--cyan-blue);
  font-size: 13px;
`

const CommentIcon = styled(Chat)`
  ${IconCSS}
`

const RetweetIcon = styled(Retweet)`
  ${IconCSS}
  font-size: 22px;
`

const LikeIcon = styled(FavoriteBorder)`
  ${IconCSS}
`

const ShareIcon = styled(ShareAlternative)`
  ${IconCSS}
`

const BarChartIcon = styled(BarChart)`
  ${IconCSS}
`

export {
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
}
