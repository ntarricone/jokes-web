import styled from 'styled-components'
import { TContent } from './content.types'

export const StyledText = styled.div<TContent>`
  display: flex;
  margin: ${({ margin }) => margin};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};
  ${({ styles }) => styles}
`
