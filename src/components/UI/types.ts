import { type PropsWithChildren, type ComponentPropsWithoutRef, type ElementType, ReactNode } from "react"

export type InputT = {
  id: string
  label: string
} & ComponentPropsWithoutRef<'input'>
// ComponentPropsWithoutRef<'input'> gives all input props types automatically, so we dont have to specify them one by one
// we specify only those we need
// we can do this for any html tag
// if we will use refs, we can use the equivalent ComponentPropsWithRef<'htmlTag'>

export type Button = {
  el?: 'button'
} & ComponentPropsWithoutRef<'button'>

export type Anchor = {
  el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

export type ButtonT = PropsWithChildren<Button | Anchor>

export type ContainerT<T extends ElementType> = {
  // we are creating a generic type, because we dont know in advance what we will receive
  // we know T will be an element, type for html elements is ElementType, that's why we use extends
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>