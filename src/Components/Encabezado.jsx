import React from 'react'
import styled from '@emotion/styled'


const Header = styled.div`

    width: 100%;
    height: 38px;
    background-color:#0079FF;
    margin: 0px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

const TituloHeader = styled.h3`
    background-color: #0079FF;
    width: 50%;
    color: #fff;
`

const LogoHeader = styled.img`

      width: 50%;

`
const Encabezado = () => {
  return (
    <>

     <Header>
       <TituloHeader>Busca tu Usuario</TituloHeader>
       <LogoHeader></LogoHeader>
     </Header>
      
    </>
  )
}

export default Encabezado
