import { FC } from 'react'
import { StyledText } from './content.styles'
import { TContent } from './content.types'

export const Content: FC<TContent> = ({
  as = 'div',
  gap,
  children,
  align,
  justify,
  margin,
  minHeight,
  direction,
  padding,
  styles,
}) => (
  <StyledText
    as={as}
    gap={gap}
    align={align}
    justify={justify}
    minHeight={minHeight}
    margin={margin}
    padding={padding}
    direction={direction}
    styles={styles}
  >
    {children}
  </StyledText>
)
