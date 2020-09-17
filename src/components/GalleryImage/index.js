import React from 'react'

import {
  Container,
  GalleryContent,
  ImageContent,
  ImageBackground,
  Image,
} from './styles'

export default function GalleryImage({ images }) {
  return (
    <Container>
      <GalleryContent>
        {images.map((item, key) => (
          <ImageContent key={key}>
            <ImageBackground image={item.image} />
            <Image src={item.image} alt={item.alt} />
          </ImageContent>
        ))}
      </GalleryContent>
    </Container>
  )
}
