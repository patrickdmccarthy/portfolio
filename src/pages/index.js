import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Patrick McCarthy" keywords={[`software`, `react`, `full-stack`, `node`, `developer`, `freelance`, `rails`]} />
    <Hero />
    <Clients />
  </Layout>
)

export default IndexPage
