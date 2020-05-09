import React from "react"
import { Link } from "gatsby"

import { Layout } from "src/components/layout"
import SEO from "src/components/seo"
import * as UI from "src/components/UIKit/UI"
import { Callout } from "src/components/UIKit/Callout"

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <UI.HStack>
      <UI.VStack>
        <UI.Box>Hello</UI.Box>
        <UI.Box>Hello</UI.Box>
        <UI.Box>Hello</UI.Box>
      </UI.VStack>
      <Callout emoji={"‼️"}>CallOut</Callout>
      <UI.Block>
        <UI.ZStack>
          <UI.ZStackBox>
            <UI.Color color={"#00BB223F"} width={"150px"} height={"100px"} />
          </UI.ZStackBox>
          <UI.ZStackBox>
            <UI.Color color={"#00BB003F"} width={"110px"} height={"120px"} />
          </UI.ZStackBox>
        </UI.ZStack>
      </UI.Block>
    </UI.HStack>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
