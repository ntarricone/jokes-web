import { CSSProp } from 'styled-components'

export type TText = {
  as?: any
  children: string
  margin?: string
  align?: 'center' | 'left' | 'right'
  color?: string
  size?: string
  bold?: boolean
  italic?: boolean
  className?: string
  styles?: CSSProp
}
