import styled from "@emotion/styled"

export type MarginProps = {
  marginAll?: string
  marginTop?: string
  marginRight?: string
  marginLeft?: string
  marginBottom?: string
}

export type PaddingProps = {
  paddingAll?: string
  paddingTop?: string
  paddingRight?: string
  paddingLeft?: string
  paddingBottom?: string
}

export type SizingProps = {
  width?: string
  height?: string

  maxWidth?: string
  maxHeight?: string

  minWidth?: string
  minHeight?: string
}

export interface BoxProps extends PaddingProps, MarginProps, SizingProps {
  flexShrink?: number
  flexGrow?: number
  flexBasis?: string

  relative?: boolean

  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch"
}

export const Box = styled.div`
  display: block;

  position: ${(props: BoxProps) => (props.relative && "relative") || ""};

  width: ${(props: BoxProps) => props.width || ""};
  height: ${(props: BoxProps) => props.height || ""};

  min-width: ${(props: BoxProps) => props.minWidth || ""};
  min-height: ${(props: BoxProps) => props.minHeight || ""};

  max-width: ${(props: BoxProps) => props.maxWidth || ""};
  max-height: ${(props: BoxProps) => props.maxHeight || ""};

  flex-shrink: ${(props: BoxProps) => props.flexShrink || 0};
  flex-grow: ${(props: BoxProps) => props.flexGrow || 0};
  flex-basis: ${(props: BoxProps) => props.flexBasis || ""};

  align-self: ${(props: FlexBoxProps) => props.alignSelf || ""};

  padding: ${(props: BoxProps) => {
    const fallbackValue: string = props.paddingAll || "0"
    return `${props.paddingTop || fallbackValue} ${
      props.paddingRight || fallbackValue
    } ${props.paddingBottom || fallbackValue} ${
      props.paddingLeft || fallbackValue
    }`
  }};

  margin: ${(props: BoxProps) => {
    const fallbackValue: string = props.marginAll || "0"
    return `${props.marginTop || fallbackValue} ${
      props.marginRight || fallbackValue
    } ${props.marginBottom || fallbackValue} ${
      props.marginLeft || fallbackValue
    }`
  }};
`

export interface FlexBoxProps extends BoxProps {
  alignContent?:
    | "flex-start"
    | "end"
    | "center"
    | "space-between"
    | "around"
    | "stretch"
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"

  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "around"
  flexWrap?: "wrap" | "no-wrap"
  direction?: "row" | "column"
}

type AbsoluteBoxProps = {
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export const AbsoluteBox = styled.div`
  position: absolute;
  top: ${(props: AbsoluteBoxProps) => props.top || ""};
  right: ${(props: AbsoluteBoxProps) => props.right || ""};
  bottom: ${(props: AbsoluteBoxProps) => props.bottom || ""};
  left: ${(props: AbsoluteBoxProps) => props.left || ""};
`

type StackProps = {
  alignContent?:
    | "flex-start"
    | "end"
    | "center"
    | "space-between"
    | "around"
    | "stretch"
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch"

  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "around"
  flexWrap?: "wrap" | "nowrap"
}

const StackBase = styled.div(
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

export const HStack = styled(StackBase)({
  flexDirection: "row",
})

export const VStack = styled(StackBase)({
  flexDirection: "column",
})
