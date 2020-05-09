import React from "react"
import { Link } from "gatsby"

import { Layout } from "src/components/layout"
import SEO from "src/components/seo"
import {
  VStack,
  HStack,
  Box,
  Color,
  ZStack,
  ZStackBox,
  Block,
} from "src/components/layoutbox"
import { Callout } from "src/components/UIKit/Callout"

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <HStack>
      <VStack>
        <Box>Hello</Box>
        <Box>Hello</Box>
        <Box>Hello</Box>
      </VStack>
      <Callout emoji={"‼️"}>CallOut</Callout>
      <Block>
        <ZStack>
          <ZStackBox>
            <Color color={"#00BB223F"} width={"150px"} height={"100px"} />
          </ZStackBox>
          <ZStackBox>
            <Color color={"#00BB003F"} width={"110px"} height={"120px"} />
          </ZStackBox>
        </ZStack>
      </Block>
    </HStack>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
