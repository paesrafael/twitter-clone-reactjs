import styled from 'styled-components'

const Container = styled.section`
  position: relative;
  display: none;

  @media (min-width: 1000px) {
    width: min(399px, 100%);
    display: flex;
    flex-direction: column;
  }
`

const GalleryContent = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 15px;
`

const ImageContent = styled.div`
  padding: 4px;
  display: inline-block;
  vertical-align: middle;
`

const ImageBackground = styled.div`
  width: 105px;
  height: 105px;
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => (props.image ? props.image : '')});
  cursor: pointer;

  @media (min-width: 990px) and (max-width: 1090px) {
    width: 92px;
    height: 92px;
  }
`

const Image = styled.img`
  display: none;
`

export { Container, GalleryContent, ImageContent, ImageBackground, Image }
