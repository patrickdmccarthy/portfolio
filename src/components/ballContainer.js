import React from "react"
import styled, {keyframes, css} from "styled-components"

const buttonDiameter = `150px`

const moveY = keyframes`
  from { transform: translateY(0); } to { transform: translateY(calc(100vh - ${buttonDiameter})); }
`

const moveX = keyframes`
  from { transform: translateX(0); } to { transform: translateX(calc(100vw - ${buttonDiameter})); }
`

const YContainer = styled.div`
  position: fixed;
  display: inline-block;
  z-index: 2;
  animation:  ${moveY} 6.2s linear 0s infinite alternate;
`

const XContainer = styled.div`
  position: fixed;
  display: inline-block;
  animation: ${moveX} 7.7s linear 0s infinite alternate;
  z-index: 2;
`


const Ball = styled.a`
  width: ${buttonDiameter};
  height: ${buttonDiameter};
  border-radius: 50%;
  background-color: #ffe000;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-align: center;
  filter: drop-shadow(2px 2px 2px #bbb);
  text-decoration: none;
  font-weight: 600;
  color: white;
  line-height: 1.4;

  :hover {
    text-decoration: underline;
  }
`

const BallContainer = ({isMobile}) => {
  return (
    <YContainer isMobile={isMobile}>
      <XContainer isMobile={isMobile}>
        <Ball isMobile={isMobile} href="mailto:patrick.d.mccarthy@gmail.com"><div>get in<br/>touch</div></Ball>
      </XContainer>
    </YContainer>
  )}

export default BallContainer
