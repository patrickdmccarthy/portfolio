import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components"

import monogram from "../images/monogram.svg"

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

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

const HighlightText = styled.span`
  transition: color .2s ease-in-out;
`

const colors = [`#e96666`, `#5386EF`, `#72bf4e`]

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  useInterval(() => {
    setActiveIndex(activeIndex === colors.length - 1 ? 0 : activeIndex + 1);
  }, 3000)

  return (<Container>
    <img src={monogram} alt={'Patrick McCarthy logo'} />
    <HeaderCopy>
      Patrick McCarthy is a <HighlightText style={{color: `${colors[activeIndex]}`}}>freelance full‑stack developer</HighlightText> based in Berlin
    </HeaderCopy>
  </Container>)
}

export default Hero
