import React from "react"
import { Wrapper, HStack, Color, ZStack, ZStackBox, Box } from "./layoutbox"

type CalloutProps = {
  emoji: string | "⚠️"
  children: any
}

export const Callout = (props: CalloutProps) => {
  return (
    <Wrapper>
      <ZStack>
        <ZStackBox>
          <Color
            color={"#F5F7F9"}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </ZStackBox>
        <ZStackBox>
          <HStack>
            <Color color={"#ff00FF"} width={"4px"} />
            <HStack
              paddingTop={"10px"}
              paddingBottom={"10px"}
              paddingLeft={"10px"}
              paddingRight={"10px"}
            >
              <Box>{props.emoji}</Box>
              <Box>{props.children}</Box>
            </HStack>
          </HStack>
        </ZStackBox>
      </ZStack>
    </Wrapper>
  )
}
