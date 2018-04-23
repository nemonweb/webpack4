import React from "react"
import { hot } from "react-hot-loader"
import styled from "styled-components"
import "modern-normalize/modern-normalize.css"
import { injectGlobal } from "styled-components"

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color: palevioletred;
`

injectGlobal`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`

const App = () => {
  return (
    <div>
      <Title>React here 123!</Title>
    </div>
  )
}

export default hot(module)(App)
