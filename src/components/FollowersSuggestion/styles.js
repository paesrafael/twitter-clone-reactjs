import styled, { css } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const PaddingBorder = css`
  padding: 10px 15px;
  border-top: 1px solid var(--border);
`

const FollowItem = styled.div`
  ${PaddingBorder}
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: var(--white-light);
  }
`

const Avatar = styled.div`
  width: max(49px, min(49px, 22vw));
  height: max(49px, min(49px, 22vw));
  border: 3.75px solid var(--primary);
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

const FollowItemDetails = styled.div`
  padding: 0 15px;
  width: 100%;
`

const Name = styled.span`
  font-size: 15px;
  font-weight: bold;
  display: block;
`

const Arroba = styled.span`
  color: var(--cyan-blue);
  font-size: 15px;
  display: block;
`

const ButtonContent = styled.div`
  div {
    text-align: center;
  }
`

export {
  Container,
  FollowItem,
  Avatar,
  Image,
  FollowItemDetails,
  Name,
  Arroba,
  ButtonContent,
}
