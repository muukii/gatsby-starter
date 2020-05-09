import React from "react"
import styled from "@emotion/styled"
import * as CSS from "csstype"

export interface MarginProps {
  marginTop?: CSS.MarginTopProperty<string | 0>
  marginRight?: CSS.MarginRightProperty<string | 0>
  marginLeft?: CSS.MarginLeftProperty<string | 0>
  marginBottom?: CSS.MarginBottomProperty<string | 0>
}

export type PaddingProps = {
  paddingTop?: CSS.PaddingTopProperty<string | 0>
  paddingRight?: CSS.PaddingRightProperty<string | 0>
  paddingLeft?: CSS.PaddingLeftProperty<string | 0>
  paddingBottom?: CSS.PaddingBottomProperty<string | 0>
}

export type SizingProps = {
  width?: CSS.WidthProperty<string | 0> | CSS.WidthProperty<string | 0>[]
  height?: CSS.HeightProperty<string | 0> | CSS.HeightProperty<string | 0>[]

  maxWidth?: CSS.WidthProperty<string | 0> | CSS.WidthProperty<string | 0>[]
  maxHeight?: CSS.HeightProperty<string | 0> | CSS.HeightProperty<string | 0>[]

  minWidth?: CSS.WidthProperty<string | 0> | CSS.WidthProperty<string | 0>[]
  minHeight?: CSS.HeightProperty<string | 0> | CSS.HeightProperty<string | 0>[]
}

type StackProps = {
  alignContent?: CSS.AlignContentProperty | CSS.AlignContentProperty[]
  alignItems?: CSS.AlignItemsProperty | CSS.AlignItemsProperty[]

  justifyContent?: CSS.JustifyContentProperty | CSS.JustifyContentProperty[]
  flexWrap?: CSS.FlexWrapProperty
}

type ElementProps = {
  flexShrink?: number
  flexGrow?: number
  flexBasis?: string
  relative?: boolean

  alignSelf?: CSS.AlignSelfProperty | CSS.AlignSelfProperty[]
} & PaddingProps &
  MarginProps &
  SizingProps

export const Box = styled.div(
  {
    display: "block",
    position: "relative",
    wordSpacing: -1,
  },
  (props: ElementProps) => ({
    // position: props.relative,

    width: props.width,
    height: props.height,

    minWidth: props.minWidth,
    minHeight: props.minHeight,

    maxWidth: props.maxWidth,
    maxHeight: props.maxHeight,

    flexShrink: props.flexShrink,
    flexGrow: props.flexGrow,
    flexBasis: props.flexBasis,

    alignSelf: props.alignSelf,

    paddingTop: props.paddingTop,
    paddingRight: props.paddingRight,
    paddingLeft: props.paddingLeft,
    paddingBottom: props.paddingBottom,

    marginTop: props.marginTop,
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
    marginBottom: props.marginBottom,
  })
)

const StackBase = styled(Box)(
  {
    display: "flex",
  },
  (props: StackProps) => ({
    alignItems: props.alignItems ?? "stretch",
    justifyContent: props.justifyContent ?? "flex-start",
    flexWrap: props.flexWrap ?? "nowrap",
    alignContent: props.alignContent ?? "center",
  })
)

export const AbsoluteBox = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

const ZStackInner = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr",
})

export const Block = styled(Box)({
  display: "block",
})

export const ZStack = (props: ElementProps & { children: any }) => (
  <Wrapper {...props}>
    <ZStackInner>{props.children}</ZStackInner>
  </Wrapper>
)

export const ZStackBox = styled(Box)({
  display: "block",
  gridRowStart: 1,
  gridColumnStart: 1,
})

export const HStack = styled(StackBase)({
  flexDirection: "row",
})

export const VStack = styled(StackBase)({
  flexDirection: "column",
})

export const Wrapper = styled(Box)()

export const Color = styled(Box)({}, ({ color }: { color: string }) => ({
  backgroundColor: color,
}))
