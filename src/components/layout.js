import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto 0;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
          <main>{children}</main>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
