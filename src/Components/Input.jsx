import React, { Children, useState } from "react";
import { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";


import Formulario from "./Formulario";

const Input = ({ color, setColor }) => {

  const [error, setError] = useState(false);

  const Buscador = styled.div`
    width: 800px;
    max-width: 600px;
    height: 550px;
    display: flex;
    height: auto;
    background-color: ${color === true ? "#f2f2f2" : "#141d2e"};
    border: 0 ${color === true ? "none" : "#141d2e"};
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Perfil = styled.div`
    width: 90%;
    margin: 20px auto 0px auto;
    height: 527px;
    max-width: 327px;
    background-color: ${color === true ? "#f2f2f2" : "#141d2e"};
  `

  return (
    <>
      <Buscador>
        <Formulario color={color} setColor={setColor}
        error={error}
        setError={setError}
        />
      </Buscador>
    </>
  );
};

export default Input;
