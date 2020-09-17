import React from 'react'

import { Container, Title, Item, ButtonMore } from './styles'

export default function ListCard({ title, elements, buttonMore }) {
  return (
    <Container>
      <Title>{title}</Title>

      {elements.map((item, key) => (
        <Item key={key}>{item}</Item>
      ))}

      {buttonMore && <ButtonMore>Mostrar mais</ButtonMore>}
    </Container>
  )
}
