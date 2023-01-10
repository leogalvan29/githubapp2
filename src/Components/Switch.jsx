import React, { useEffect } from 'react'
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import LogoMoon from '../assets/img/icon-moon.svg'
import LogoSon from '../assets/img/icon-sun.svg'
const Switch = ({color, setColor}) => {



    const cambiarColor = () => {
        console.log('cambiando color a negro')
        if(color === true) {
            setColor(false) 
            
        }
        

       

        
        
    }

    const cambiarColorNegro = () => {
        if(color === false){
            console.log('cambiando color a blanco')
            setColor(true)
            
        }
    }


    
  return (
    <div css={css`
      
       max-width: 327px;
       width: 90%;
       margin: 0px auto;
       height: 40px;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;
       background-color: ${color === true ? '#f2f2f2': '#141d2e'};

       @media(min-width: 576px){
        max-width: 573px;
       width: 90%;
       }
       @media(min-width: 768px){
        max-width: 730px;
        width: 730px;
       }


    `}>

        <h3 css={css`
        
        width: 128px;
        height: 39px;
        font-size: 24px;
        line-height: 30px;
        font-weight: 700;
        color: ${color === true ? '#222731' : '#f2f2f2'};
        background-color:${color === true ? '#f2f2f2' : '#141d2e'} ;
        @media(min-width: 576px){
            position: relative;
            right: 10px;
        }
        `}>devfinder</h3>
        {color === true ? (<div className='switch' css={css`
        
        width: 78px;
        height: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        @media(min-width: 576px){
           position: relative;
           right: 15px;
        }
       
       `}>
           <h4 css={css`
           width: 40px;
           height: 19px;
           text-transform: uppercase;
           font-size: 13px;
           line-height: 19px;
           letter-spacing: 2.5px;
           font-weight: 700;
           color: #4B6A9B;
           `}>Dark</h4>
           <img src={LogoMoon} alt="" 
           onClick={() => cambiarColor()}
           css={css`
           width: 20px;
           height: 20px;
           cursor: pointer;
           `}
           />

       </div>) : (<div className='switch' css={css`
        
        width: 78px;
        height: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #141d2e;
        @media(min-width: 576px){
           position: relative;
           right: 15px;
        }
       
       `}>
           <h4 css={css`
           width: 40px;
           height: 19px;
           text-transform: uppercase;
           font-size: 13px;
           line-height: 19px;
           letter-spacing: 2.5px;
           font-weight: 700;
           color: #fff;
           background-color: #141d2e;
           `}>Light</h4>
           <img src={LogoSon} alt="" 
           onClick={() => cambiarColorNegro()}
           css={css`
           width: 20px;
           height: 20px;
           cursor: pointer;
           background-color: #141d2e;
           `}
           />

       </div>)}
        
      
    </div>
  )
}

export default Switch
