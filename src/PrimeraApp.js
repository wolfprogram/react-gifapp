//import { Fragment } from "react";
//import React from 'react'
import propTypes from "prop-types";

const PrimeraApp = ({ saludo, subtitule }) => {
//  const PrimeraApp = ({ saludo = "Valor por default si no se envian nada" }) => {

  // const saludo = "Hola Mundo Const";

  // console.log(saludo, subtitule);
  return (
    <>
      <h1>Hola Mundo</h1>
      <h1>{saludo}!!!</h1>
      <p>{subtitule}</p>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: propTypes.string.isRequired
};

PrimeraApp.defaultProps = {
  subtitule: 'Soy un subtitule'
}

export default PrimeraApp;