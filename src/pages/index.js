import React, {Fragment} from "react"
import withSizes from 'react-sizes'

import Layout from "../components/layout"
import Hero from "../components/hero"
import Clients from "../components/clients"
import BallContainer from "../components/ballContainer"
import SEO from "../components/seo"

const IndexPage = ({isMobile, isTablet}) => (
  <Fragment>
    <BallContainer isMobile={isMobile} isTablet={isTablet} />
    <Layout isMobile={isMobile} isTablet={isTablet} >
      <SEO title="Patrick McCarthy" keywords={[`software`, `react`, `full-stack`, `node`, `developer`, `freelance`, `rails`, `ruby`]} />
      <Hero isMobile={isMobile} isTablet={isTablet} />
      <Clients isMobile={isMobile} isTablet={isTablet} />
    </Layout>
</Fragment>
)

const mapSizesToProps = sizes => ({
  isMobile: withSizes.isMobile(sizes),
  isTablet: withSizes.isTablet(sizes),
})

export default withSizes(mapSizesToProps)(IndexPage)
