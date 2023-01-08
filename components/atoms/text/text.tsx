import { FC } from 'react'
import { StyledText } from './text.styles'
import { TText } from './text.types'

export const Text: FC<TText> = ({
  as = 'p',
  bold,
  children,
  color,
  align,
  italic,
  margin,
  size = '1rem',
  className,
  styles,
}) => (
  <StyledText
    as={as}
    bold={bold}
    align={align}
    color={color}
    italic={italic}
    margin={margin}
    size={size}
    className={className}
    styles={styles}
  >
    {children}
  </StyledText>
)
