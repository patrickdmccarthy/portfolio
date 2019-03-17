import React, {useState} from "react"
import styled, {css} from "styled-components"
import Tilt from 'react-tilt'
import isEqual from 'lodash.isEqual'

import hermanMiller from "../images/herman_miller.svg"
import casper from "../images/casper.svg"
import digitalMckinsey from "../images/digital_mckinsey.svg"
import dvf from "../images/dvf.svg"
import foundwork from "../images/foundwork.svg"
import careOf from "../images/care_of.svg"
import humanNyc from "../images/human_nyc.svg"
import klarna from "../images/klarna.svg"
import marleySpoon from "../images/marley_spoon.svg"
import sanctuaryComputer from "../images/sanctuary_computer.svg"

const Container = styled.div`
  text-align: center;
`

const HeaderCopy = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 2.5em
`

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const OuterRow = styled.div`
  display: flex;
  justify-content: space-around;

`

const InnerContainer = styled.div`
  display: flex;
`

const InnerText = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const InnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;

  &:first-child {
    align-items: flex-start;
  }

  &:last-child {
    align-items: flex-end;
  }
`
const InnerContent = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
`

const Logo = styled.input`
  transition: opacity .2s ease-in-out;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }

  ${props => props.active && css`
    opacity: 1;
  `}
`

const clients = [
  [
    {
      name: 'Herman Miller',
      project: 'hm',
      technologies: 'react',
      image: hermanMiller
    },
    {
      name: 'Casper',
      project: '',
      technologies: '',
      image: casper,
    },
    {
      name: 'Digital Mckinsey',
      project: 'dm',
      technologies: 'node',
      image: digitalMckinsey,
    },
  ],
  [
    {
      name: 'Foundwork',
      project: 'fw',
      technologies: 'ruby',
      image: foundwork,
    },
    {
      name: 'Marley Spoon',
      project: 'ms',
      technologies: 'backbone',
      image: marleySpoon,
    },
    ,
  ],
  [
    {
      name: 'Diane von Furstenburg',
      project: 'dvf',
      technologies: 'as',
      image: dvf,
    },
    {
      name: 'Sanctuary Computer',
      project: 'sc',
      technologies: 'sdfds',
      image: sanctuaryComputer,
    },
  ],
  [{
      name: 'Care Of',
      project: 'ca',
      technologies: 'react',
      image: careOf,
    },
    {
      name: 'Human NYC',
      project: 'human',
      technologies: 'react',
      image: humanNyc,
    },
    {
      name: 'Klarna',
      project: 'kl',
      technologies: 'node',
      image: klarna,
    },
  ],
]



const ClientButton = ({ image, name, onClick, active }) => (
  <Tilt >
    <Logo type="image" src={image} name={name} active={active} onClick={onClick}/>
  </Tilt>
)

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(`${[0][0]}`)

  return (
    <Container>
      <HeaderCopy>
        Clients &amp; Collaborators
      </HeaderCopy>
      <ClientsContainer>
        <OuterRow>
          {clients[0].map(({image, name}, i) => (
            <ClientButton
              image={image}
              name={name}
              active={isEqual(`${activeIndex}`, `[0][${i}]`) }
              onClick={() => setActiveIndex(`[0][${i}]`)}
            />
          ))}
        </OuterRow>
        <InnerContainer>
          <InnerColumn>
          {clients[1].map(({image, name}, i) => (
            <ClientButton
              image={image}
              name={name}
              active={isEqual(`${activeIndex}`, `[1][${i}]`) }
              onClick={() => setActiveIndex(`[1][${i}]`)}
            />
          ))}
          </InnerColumn>
        <InnerContent>
        <InnerText>
          some text here
        </InnerText>
        </InnerContent>
          <InnerColumn>
          {clients[2].map(({image, name}, i) => (
            <ClientButton
              image={image}
              name={name}
              active={isEqual(`${activeIndex}`, `[2][${i}]`) }
              onClick={() => setActiveIndex(`[2][${i}]`)}
            />

          ))}
          </InnerColumn>
        </InnerContainer>
        <OuterRow>
          {clients[3].map(({image, name}, i) => (
            <ClientButton
              image={image}
              name={name}
              active={isEqual(`${activeIndex}`, `[3][${i}]`) }
              onClick={() => setActiveIndex(`[3][${i}]`)}
            />

          ))}
        </OuterRow>
      </ClientsContainer>
    </Container>
  )
}

export default Clients
