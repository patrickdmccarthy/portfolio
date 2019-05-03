import React from "react"
import styled, {keyframes, css} from "styled-components"
import withSizes from 'react-sizes'

const buttonDiameter = `180px`

const moveY = keyframes`
  from { transform: translateY(0); } to { transform: translateY(calc(100vh - ${buttonDiameter})); }
`

const moveX = keyframes`
  from { transform: translateX(0); } to { transform: translateX(calc(100vw - ${buttonDiameter})); }
`

const YContainer = styled.div`
  position: fixed;
  display: inline-block;
  animation: ${moveY} 5s linear 0s infinite alternate;
  z-index: 2;

  ${props => props.isMobile && css`
    animation: ${moveY} 3s linear 0s infinite alternate;
  `}
`

const XContainer = styled.div`
  position: fixed;
  display: inline-block;
  animation: ${moveX} 8s linear 0s infinite alternate;
  z-index: 2;

  ${props => props.isMobile && css`
    animation: ${moveX} 6s linear 0s infinite alternate;
  `}
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
  font-weight: 900;
  font-style: italic;
  color: white;

  ${props => props.isMobile && css`
    font-size: 24px;

    width: 150px;
    height: 150px;
  `}
`

const BallContainer = ({isMobile}) => (
  <YContainer isMobile={isMobile}>
    <XContainer isMobile={isMobile}>
      <Ball isMobile={isMobile} href="mailto:patrick.d.mccarthy@gmail.com"><div>Let's Work<br/>Together</div></Ball>
    </XContainer>
  </YContainer>
)


const mapSizesToProps = sizes => ({
  isMobile: withSizes.isMobile(sizes),
})

export default withSizes(mapSizesToProps)(BallContainer)
