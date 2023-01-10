import React from 'react'
/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import IconSearch from "../assets/img/icon-search.svg";
import imagenAvatar from '../assets/img/39243942.png'
import InfoAvatar from './InfoAvatar';


const Formulario = ({ color, error, setError }) => {
  const [usuario, setUsuario] = useState("");
  const [avatar, setAvatar] = useState([]);

  const borde = " 1px solid #1e2a47;";
  const colorFondo = `${color === true ? "#fefefe" : "#141d2e"}`;
  const ColorLetra = `${color === true ? "#4B6A9B" : "#fefefe"}`;
  const followersFondo = `${color === true ? "#F6F8FF" : "#141D2F"}`;
  const followersColor = `${color === true ? "#4B6A9B" : "#fefefe"}`

  const Perfil = styled.div`
    width: 90%;
    margin: 20px auto 50px auto;
    height: 527px;
    max-width: 327px;
    background-color: ${color === true ? "#fefefe" : "#141d2e"};

    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
    border-radius: ${color === true ? "15px" : "15px"};
    padding-top: 20px;

    @media(min-width: 768px){
       min-width: 573px;
    }
  `;

  const Avatar = styled.div`
    width: 90%;
    margin: 0px auto;
    height: auto;
    display: flex;
    flex-direction: column;
    border: none;
    background-color: ${color === true ? "#fefefe" : "#141d2e"};
    @media (min-width: 768px) {
      flex-direction: row;
      
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([usuario].includes("")) {
      alert("todos los datos son obligatorios");
      setError(true);
    } else {
      // utilizamos split y join para eliminar espacios entre caracteres
      const usuarioSinEspacio = usuario.split(" ").join("");
      console.log("enviando datos");
      fetch(`https://api.github.com/users/${usuarioSinEspacio}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAvatar(data);
        });
      setError(false);
    }

    setUsuario("");
  };
  return (
    <>
      <form
        className="contenedorBuscador"
        onSubmit={handleSubmit}
        css={css`
          width: 90%;
          max-width: 328px;
          height: auto;
          margin: 0px auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          background-color: ${color === true ? "#f2f2f2" : "#141d2e"};
          border: none;

          @media (min-width: 576px) {
            max-width: 573px;
            width: 90%;
            margin: 0px auto;
            background-color: ${color === true ? "#f2f2f2" : "#141d2e"};
            border: none;
          }
        `}
      >
        <img
          src={IconSearch}
          alt=""
          css={css`
            position: relative;
            left: 30px;
            background-color: ${color === true ? "#f2f2f2" : "#1E2A47"};
            z-index: 10;
          `}
        />

        <input
          type="text"
          value={usuario}
          name={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Search Github user"
          css={css`
            max-width: 327px;
            width: 90%;
            margin: 0px auto;
            height: 40px;
            border: 1px solid gray;
            box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
            background-color: ${color === true ? "#f2f2f2" : "#1E2A47"};
            border-radius: 12px;
            opacity: ${color === true ? "1" : ".9"};
            padding-left: 40px;
            border-color: ${color === true ? "#fefefe" : "#1E2A47"};
            color: ${color === true ? "#1e2a47" : "#f2f2f2"};

            @media (min-width: 576px) {
              width: 90%;
              margin: 0px auto;
              max-width: 573px;
              height: 40px;
              background-color: ${color === true ? "#f2f2f2" : "#1E2A47"};
            }
          `}
        />

        <button
          type="submit"
          css={css`
            position: relative;
            right: 10%;
            width: 84px;
            height: 44px;
            background-color: #0079ff;
            color: #fff;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
          `}
        >
          Search
        </button>
      </form>

      <Perfil>
        {avatar.length === 0 ? (
          <Avatar>
            <div
              className="bloque1"
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: flex-start;
                background-color: ${color === true ? "#fefefe" : "#1E2A47"};
                border: ${color === true ? "none" : borde};
              `}
            >
              <div
                className="imageAvatar"
                css={css`
                  border: none;
                  background-color: ${color === true ? "#fefefe" : "#1E2A47"};
                `}
              >
                <img
                  src={imagenAvatar}
                  alt=""
                  css={css`
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                  `}
                />
              </div>
              <div
                className="textosAvatar"
                css={css`
                  background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                `}
              >
                <p
                  css={css`
                    color: ${color === true ? "#1e2a47" : "#f2f2f2"};
                    background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                  `}
                >
                  The Octocat
                </p>
                <a
                  href="#"
                  css={css`
                    color: ${color === true ? "#0079FF" : "#0079FF"};
                    background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                    text-decoration: none;
                  `}
                >
                  @octocat
                </a>
                <p
                  css={css`
                    color: ${ColorLetra};
                    background-color: ${colorFondo};
                  `}
                >
                  Joined 25 Jan 2011
                </p>
              </div>
            </div>
          </Avatar>
        ) : (
          <Avatar>
            <div
              className="bloque1"
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: flex-start;
                background-color: ${colorFondo};
                border: ${color === true ? "none" : borde};
              `}
            >
              <div
                className="imageAvatar"
                css={css`
                  border: none;
                  background-color: ${color === true ? "#fefefe" : "#1E2A47"};
                `}
              >
                <img
                  src={avatar.avatar_url}
                  alt=""
                  css={css`
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                  `}
                />
              </div>
              <div
                className="textosAvatar"
                css={css`
                  background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                `}
              >
                <p
                  css={css`
                    color: ${color === true ? "#1e2a47" : "#fefefe"};
                    background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                  `}
                >
                  {avatar.name === null ? "user not name" : avatar.name}
                </p>
                <a
                  href="#"
                  css={css`
                    color: ${color === true ? "#0079FF" : "#0079FF"};
                    background-color: ${color === true ? "#fefefe" : "#1e2a47"};
                    text-decoration: none;
                  `}
                >
                  @
                  {avatar.twitter_username === null
                    ? "Sin usuario"
                    : avatar.twitter_username}
                </a>
                <p
                  css={css`
                    color: ${color === true ? "#1e2a47" : "#fefefe"};
                    background-color: ${colorFondo};
                  `}
                >
                  Joined {avatar.created_at.slice(0, 10)}
                </p>
              </div>
            </div>
          </Avatar>
        )}
        {avatar.length === 0 ? (
          <p
            css={css`
              width: 90%;
              margin: 20px auto;
              text-align: justify;
              color: ${color === true ? "#4B6A9B" : "#f2f2f2"};
              background-color: ${colorFondo};
              font-size: 13px;
            `}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        ) : (
          <p
            css={css`
              width: 90%;
              margin: 20px auto;
              color: ${ColorLetra};
              background-color: ${colorFondo};
              font-size: 13px;
            `}
          >
            {avatar.bio === null
              ? "Bio null, el back no mando bien la informacion, al modo. "
              : avatar.bio}
          </p>
        )}
        {
         avatar.length === 0 ? (
          <div className="bloque2" css={css`
            display: flex;
            flex-direction: row;
            width: 90%;
            margin: 10px auto;
            justify-content: space-around;
            background-color: ${followersFondo}; 
            padding: 30px 0px;
          height: 85px;
          align-items: center;
          `}>
             <div className="repos" css={css`
               background-color: ${followersFondo};
               
             `}>
               <h3
               css={css`
               background-color: ${followersFondo};
               color:${followersColor};
               font-size: 11px;
             `}
               >Repos</h3>
               <p css={css`
               background-color: ${followersFondo};
               color:${followersColor};
               text-align: center;
             `}>8</p>
             </div>
             <div className="followers">
                <h3
                 css={css`
                 background-color: ${followersFondo};
                 color:${followersColor};
                 font-size: 11px;
               `}
                >Followers</h3>
                <p
                css={css`
                background-color: ${followersFondo};
                color:${followersColor};
                text-align: center;
              `}
                >3938</p>
             </div>
             <div className="following">
                <h3
                 css={css`
                 background-color: ${followersFondo};
                 color:${followersColor};
                 font-size: 11px;
               `}
                >following</h3>
                <p
                css={css`
                background-color: ${followersFondo};
                color:${followersColor};
                text-align: center;
              `}
                >9</p>
             </div>
          </div>
         ) : (
          <div className="bloque2" css={css`
          display: flex;
          flex-direction: row;
          width: 90%;
          margin: 10px auto;
          justify-content: space-around;
          background-color: ${followersFondo}; 
          padding: 30px 0px;
          height: 85px;
          align-items: center;
        `}>
           <div className="repos" css={css`
             background-color: ${followersFondo};
             
           `}>
             <h3
             css={css`
             background-color: ${followersFondo};
             color:${followersColor};
             font-size: 11px;
           `}
             >Repos</h3>
             <p css={css`
             background-color: ${followersFondo};
             color:${followersColor};
             text-align: center;
           `}>{avatar.public_repos === null ? '0' : avatar.public_repos}</p>
           </div>
           <div className="followers">
              <h3
               css={css`
               background-color: ${followersFondo};
               color:${followersColor};
               font-size: 11px;
             `}
              >Followers</h3>
              <p
              css={css`
              background-color: ${followersFondo};
              color:${followersColor};
              text-align: center;
            `}
              >{avatar.followers === null ? '0' : avatar.followers}</p>
           </div>
           <div className="following">
              <h3
               css={css`
               background-color: ${followersFondo};
               color:${followersColor};
               font-size: 11px;
             `}
              >following</h3>
              <p
              css={css`
              background-color: ${followersFondo};
              color:${followersColor};
              text-align: center;
            `}
              >{avatar.following ===  null ? '0' : avatar.following}</p>
           </div>
        </div>

         )
        }
        <InfoAvatar
        avatar={avatar}
        colorFondo={colorFondo}
        ColorLetra={ColorLetra}
        />
      </Perfil>
    </>
  );
};

export default Formulario