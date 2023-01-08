import styled from 'styled-components'
import { TText } from './text.types'

export const StyledText = styled.p<TText>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  text-align: ${({ align }) => align};
  font-style: ${({ italic }) => italic && 'italic'};
  font-weight: ${({ bold }) => (bold ? '700' : '')};
  margin: ${({ margin }) => margin};
  ${({ styles }) => styles}
`
