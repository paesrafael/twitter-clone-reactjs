import React from 'react'

import {
  Container,
  Flexbox,
  Category,
  Span,
  Date,
  Title,
  Description,
} from './styles'

export default function NewsCard({ category, date, title, description }) {
  return (
    <Container>
      <Flexbox>
        {!!category && <Category>{category}</Category>}
        {!!date && (
          <>
            <Span>·</Span>
            <Date>{date}</Date>
          </>
        )}
      </Flexbox>

      <Title>{title}</Title>

      <Description>{description}</Description>
    </Container>
  )
}
