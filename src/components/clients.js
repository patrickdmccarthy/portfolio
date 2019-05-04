import React, {useState} from "react"
import styled, {css} from "styled-components"
import isEqual from 'lodash.isEqual'
import flatten from 'lodash.flatten'

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
  margin-bottom: 2.5em;

  ${props => props.isMobile && css`
    font-size: 22px;
    margin-bottom: 50px;
  `}
`

const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const OuterRow = styled.div`
  display: flex;
  justify-content: space-around;

  input {
    max-width: 33%;
  }

`

const InnerContainer = styled.div`
  display: flex;

  input {
    max-width: 100%;
  }
`

const InnerText = styled.div`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px;

  h3 {
    font-size: 30px;
    margin-bottom: .4em;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 1em;
  }
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
  transition: opacity .4s ease-in-out;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }

  ${props => props.active && css`
    opacity: 1;
  `}

  ${props => props.isMobile && css`
    opacity: 1;
    margin: 0 auto 40px;
    max-width: 250px;
  `}
`

const clients = [
  [
    {
      id: 1,
      name: 'Herman Miller',
      project: 'A quirky interactive animation for a classic brand',
      technologies: 'React, CSS Animation',
      image: hermanMiller
    },
    {
      id: 2,
      name: 'Casper',
      project: 'An endlessly configurable landing page creator',
      technologies: 'React/Redux, Node.js, SSR, Contentful, CSS modules',
      image: casper,
    },
    {
      id: 3,
      name: 'Digital Mckinsey',
      project: 'Various Projects',
      technologies: 'React/Redux, Node.js, Next.js, Docker',
      image: digitalMckinsey,
    },
  ],
  [
    {
      id: 4,
      name: 'Foundwork',
      project: 'A social media platform for the contemporary art community ',
      technologies: 'React, Ruby on Rails, GraphQL, Contentful',
      image: foundwork,
    },
    {
      id: 5,
      name: 'Marley Spoon',
      project: 'User-facing systems for one of Europe’s leading meal kit startups',
      technologies: 'Backbone.js, Ruby on Rails',
      image: marleySpoon,
    },
  ],
  [
    {
      id: 6,
      name: 'Diane von Furstenburg',
      project: 'A full site redesign and modern ES rewrite',
      technologies: 'ES6, jQuery, Rollup, SASS',
      image: dvf,
    },
    {
      id: 7,
      name: 'Sanctuary Computer',
      project: 'Various Projects',
      technologies: 'React, CSS Animations, Shopify, Ruby on Rails',
      image: sanctuaryComputer,
    },
  ],
  [{
      id: 8,
      name: 'Care Of',
      project: 'A marketing microsite with style',
      technologies: 'React, Ruby on Rails, Contentful',
      image: careOf,
    },
    {
      id: 9,
      name: 'Human NYC',
      project: 'Various Projects',
      technologies: 'React/Redux, Ruby on Rails, , GraphQL, Contentful',
      image: humanNyc,
    },
    {
      id: 10,
      name: 'Klarna',
      project: 'Klarna Ident – A revolutionary identity platform for Germany',
      technologies: 'React/Redux, Node.js, AWS',
      image: klarna,
    },
  ],
]



const ClientButton = ({ image, name, onClick, active, isMobile }) => (
    <Logo type="image" src={image} alt={name} name={name} active={active} onMouseEnter={onClick} isMobile={isMobile}/>
)

const Clients = ({isMobile}) => {
  const [activeId, setActiveId] = useState(Math.floor(Math.random() * 10) + 1)
  const activeClient = flatten(clients).find(client => client.id === activeId)

  return (
    <Container>
      <HeaderCopy isMobile={isMobile}>
        Clients &amp; Collaborators:
      </HeaderCopy>
      <ClientsContainer>
        {isMobile ? flatten(clients).reverse().map(({id, image, name}, i) => (
            <ClientButton
              image={image}
              name={name}
              active={isEqual(activeId, id) }
              onClick={() => setActiveId(id)}
              isMobile={isMobile}
              key={id}
            />
         ))
        :
        <>
          <OuterRow>
            {clients[0].map(({id, image, name}, i) => (
              <ClientButton
                image={image}
                name={name}
                active={isEqual(activeId, id) }
                onClick={() => setActiveId(id)}
                key={id}
              />
           ))}
          </OuterRow>
          <InnerContainer>
            <InnerColumn>
            {clients[1].map(({id, image, name}, i) => (
              <ClientButton
                image={image}
                name={name}
                active={isEqual(activeId, id) }
                onClick={() => setActiveId(id)}
                key={id}
              />
             ))}
            </InnerColumn>
          <InnerContent>
            <InnerText>
              <h3>Project</h3>
              <p>{activeClient.project}</p>
              <h3>Technologies</h3>
              <p>{activeClient.technologies}</p>
            </InnerText>
          </InnerContent>
            <InnerColumn>
            {clients[2].map(({id, image, name}, i) => (
              <ClientButton
                image={image}
                name={name}
                active={isEqual(activeId, id) }
                onClick={() => setActiveId(id)}
                key={id}
              />

            ))}
          </InnerColumn>
          </InnerContainer>
          <OuterRow>
            {clients[3].map(({id, image, name}, i) => (
              <ClientButton
                image={image}
                name={name}
                active={isEqual(activeId, id) }
                onClick={() => setActiveId(id)}
                key={id}
              />

            ))}
          </OuterRow>
        </>
        }
      </ClientsContainer>
    </Container>
  )
}

export default Clients
