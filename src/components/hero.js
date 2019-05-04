import React from 'react';
import styled from "styled-components"

import monogram from "../images/monogram.svg"

const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 42px);
`

const HeaderCopy = styled.h1`
  margin-top: .5em;
  line-height: 1.4;
  font-family: "Inter var", san-serif;
  font-weight: 400;
  font-size: 24px;
`

const HighlightText = styled.span`
  font-weight: 500;
  color: #00f;
  font-size: 27px;
`

const Hero = ({isTablet, isMobile}) => (
   <Container isMobile={isMobile}>
    <img src={monogram} alt={'Patrick McCarthy logo'} />
    <HeaderCopy isMobile={isMobile} isTablet={isTablet}>
      {`Patrick McCarthy is a `}
      <br/> <HighlightText isMobile={isMobile} isTablet={isTablet} >freelance software developer</HighlightText>
      <br/>{`based in Berlin`}
    </HeaderCopy>
  </Container>
)

export default Hero
