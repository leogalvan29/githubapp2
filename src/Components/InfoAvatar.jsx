import React from 'react'
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Location from '../assets/img/icon-location.svg'
import Website from '../assets/img/icon-website.svg'
import Twitter from '../assets/img/icon-twitter.svg'
import Company from '../assets/img/icon-company.svg'

const InfoAvatar = ({avatar , colorFondo, ColorLetra}) => {
    console.log(avatar)
    const {company , blog , twitter_username, location } = avatar 

  return (
    <>
    <div css={css`
    
     background-color: ${colorFondo};
    
    
    `}>

    {
        avatar.length === 0 ? 
        (<div css={css`
          background-color: ${colorFondo};
          padding: 30px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 127px;
        
        `}>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Location} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>San Francisco</p>
           </div>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Website} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>https://github.blog</p>
           </div>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Twitter} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>Not Available</p>
           </div>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Company} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>@github</p>
           </div>
        </div>) 
        : 
        
        (
            <div css={css`
          background-color: ${colorFondo};
          padding: 30px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 127px;
        
        `}>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Location} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>{location === null ? 'Not info' : location}</p>
           </div>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Website} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>{blog === null || blog === ''  ? 'Not info' : blog}</p>
           </div>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Twitter} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>{twitter_username === null ? 'Not info' : twitter_username}</p>
           </div>
           <div className="ubicacion" css={css`
                background-color: ${colorFondo};
                display: flex;
                justify-content: flex-start; 
                position: relative;
                left: 5%;
           `}>
              <img src={Company} alt="" 
              css={css`
              margin: 0px 5px;
              width: 14px;
              height: 20px;
              background-color: ${colorFondo};
              `}
              />
              <p css={css`
              background-color: ${colorFondo};
               margin: 0px 5px;
               background-color: ${colorFondo};
               color: ${ColorLetra};
              `}>{company === null ? 'Not info' : company}</p>
           </div>
        </div>
        )
    }

    </div>

    </>
  )
}

export default InfoAvatar