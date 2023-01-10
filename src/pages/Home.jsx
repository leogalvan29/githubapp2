import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Switch from '../Components/Switch'
import Input from '../Components/Input'

const Home = () => { 

  const [color, setColor] = useState(true)
 
  
  
  return (
    <div css={css`
    
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;
      padding-top: 50px;
      background-color:${color === true ? '#f2f2f2': '#141d2e'};
      min-height: 100vh;
    
    `}>
      <Switch
        color={color}
        setColor={setColor}
       
      />
      <Input
       color={color}
       setColor={setColor}
      />
    </div>
  )
}

export default Home
