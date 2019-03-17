import React, {Fragment} from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
import BallContainer from "../components/ballContainer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Fragment>
    <BallContainer />
    <Layout>
      <SEO title="Patrick McCarthy" keywords={[`software`, `react`, `full-stack`, `node`, `developer`, `freelance`, `rails`]} />
      <Hero />
      <Clients />
    </Layout>
</Fragment>
)

export default IndexPage
