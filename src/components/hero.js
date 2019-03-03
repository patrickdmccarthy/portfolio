import React from "react"
import styled from "styled-components"

import monogram from "../images/monogram.svg"

const Container = styled.div`
  height: 90vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeaderCopy = styled.h1`
  margin-top: .5em;
  font-size: 51px;
  line-height: 1.4
`

const Hero = () => (
  <Container>
    <img src={monogram} alt={'Patrick McCarthy logo'} />
    <HeaderCopy>
      Patrick McCarthy is a freelance full‑stack developer based in Berlin
    </HeaderCopy>
  </Container>
)

export default Hero
