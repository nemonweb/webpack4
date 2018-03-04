import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  color: palevioletred;
`

const zzz = ''

const App = () => {
  return (
    <div>
      <Title>React here 321!</Title>
    </div>
  )
}
export default hot(module)(App)
