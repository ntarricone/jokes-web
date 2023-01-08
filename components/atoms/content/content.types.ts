import { ReactNode } from 'react'
import { CSSProp } from 'styled-components'

type AlignItems =
  | 'baseline'
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-between'
  | 'stretch'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type TContent = {
  as?: any
  children?: ReactNode
  margin?: string
  gap?: string
  padding?: string
  align?: AlignItems
  justify?: JustifyContent
  minHeight?: string
  direction?: FlexDirection
  styles?: CSSProp
}
