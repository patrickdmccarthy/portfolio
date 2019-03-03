import React from "react"
import styled from "styled-components"

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
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`

const clients = [
  [
    {
      name: 'Herman Miller',
      project: '',
      technologies: '',
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
      project: '',
      technologies: '',
      image: digitalMckinsey,
    },
  ],
  [
    {
      name: 'Foundwork',
      project: '',
      technologies: '',
      image: foundwork,
    },
    {
      name: 'Marley Spoon',
      project: '',
      technologies: '',
      image: marleySpoon,
    },
    ,
  ],
  [
    {
      name: 'Diane von Furstenburg',
      project: '',
      technologies: '',
      image: dvf,
    },
    {
      name: 'Sanctuary Computer',
      project: '',
      technologies: '',
      image: sanctuaryComputer,
    },
  ],
  [{
      name: 'Care Of',
      project: '',
      technologies: '',
      image: careOf,
    },
    {
      name: 'Human NYC',
      project: '',
      technologies: '',
      image: humanNyc,
    },
    {
      name: 'Klarna',
      project: '',
      technologies: '',
      image: klarna,
    },
  ],
]

const Clients = () => (
  <Container>
    <HeaderCopy>
      Clients &amp; Collaborators
    </HeaderCopy>
    <ClientsContainer>
      <OuterRow>
        {clients[0].map(({image, name}) => (
          <Logo type="image" src={image} name={name} />

        ))}
      </OuterRow>
      <InnerContainer>
        <InnerColumn>
        {clients[1].map(({image, name}) => (
          <Logo type="image" src={image} name={name} />
        ))}
        </InnerColumn>
      <InnerContent>
      <InnerText>
        some text here
      </InnerText>
      </InnerContent>
        <InnerColumn>
        {clients[2].map(({image, name}) => (
          <Logo type="image" src={image} name={name} />
        ))}
        </InnerColumn>
      </InnerContainer>
      <OuterRow>
        {clients[3].map(({image, name}) => (
          <Logo type="image" src={image} name={name} />
        ))}
      </OuterRow>
    </ClientsContainer>
  </Container>
)

export default Clients
