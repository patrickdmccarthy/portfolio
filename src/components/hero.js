import React, { useState, useEffect, useRef } from 'react';
import styled, {css} from "styled-components"
import withSizes from 'react-sizes'

import monogram from "../images/monogram.svg"

const Container = styled.div`
  height: calc(100vh - 85px);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${props => props.isMobile && css`
    height: calc(100vh - 42px);
  `}
`

const HeaderCopy = styled.h1`
  margin-top: .5em;
  font-size: 48px;
  line-height: 1.4;
  font-family: "Inter var", san-serif;
  font-weight: 400;

  ${props => props.isTablet && css`
    font-size: 34px;
  `}

  ${props => props.isMobile && css`
    font-size: 24px;
  `}
`

const HighlightText = styled.span`
  transition: color .2s ease-in-out;
  font-weight: 500;
  font-size: 50px;
  color: #00f;

  ${props => props.isTablet && css`
    font-size: 38px;
  `}

  ${props => props.isMobile && css`
    font-size: 27px;
  `}
`

const colors = [`#FE7f7f`, `#72bf4e`, `#5386EF`]

const Hero = ({isTablet, isMobile}) => {

  return (<Container isMobile={isMobile}>
    <img src={monogram} alt={'Patrick McCarthy logo'} />
    <HeaderCopy isMobile={isMobile} isTablet={isTablet}>
      Patrick McCarthy is a <br/> <HighlightText isMobile={isMobile} isTablet={isTablet} >freelance software developer</HighlightText> <br/> based in Berlin
    </HeaderCopy>
  </Container>)
}

const mapSizesToProps = sizes => ({
  isMobile: withSizes.isMobile(sizes),
  isTablet: withSizes.isTablet(sizes),
})

export default withSizes(mapSizesToProps)(Hero)
