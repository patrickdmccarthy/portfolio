import React from "react"
import styled, {keyframes} from "styled-components"

const buttonDiameter = `200px`

const moveY = keyframes`
  from { transform: translateY(0); } to { transform: translateY(calc(100vh - ${buttonDiameter})); }
`

const moveX = keyframes`
  from { transform: translateX(0); } to { transform: translateX(calc(100vw - ${buttonDiameter})); }
`

const YContainer = styled.div`
  position: fixed;
  display: inline-block;
  animation: ${moveY} 10s linear 0s infinite alternate;
  z-index: 2;
`

const XContainer = styled.div`
  position: fixed;
  display: inline-block;
  animation: ${moveX} 10s linear 0s infinite alternate;
  z-index: 2;
`


const Ball = styled.a`
  width: ${buttonDiameter};
  height: ${buttonDiameter};
  border-radius: 50%;
  background-color: #fff760;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BallContainer = () => (
  <YContainer>
    <XContainer>
      <Ball href="mailto:patrick.d.mccarthy@gmail.com"><div>Get in touch</div></Ball>
    </XContainer>
  </YContainer>
)

export default BallContainer
