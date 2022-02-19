import React, { useState } from 'react'
import propTypes from "prop-types";

export default function AddCategory({ setCaregories }) {
    const [inputValue, setInputValue] = useState('');
const handleInputChange = ( e ) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);

};

const handleSubmit = ( e ) => {
    e.preventDefault();

    // console.log('submit hecho');
    // setCaregories(e.target.value);

    if (inputValue.trim().length > 2) {
    setCaregories( cualquierNombre => [inputValue, ...cualquierNombre]) // agreagar al inicio
    setInputValue('');
    } 
};


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputValue}
        onChange={handleInputChange} // por buenas practicas se usa e

        />
    </form>  
    
  )
};

AddCategory.propTypes = {
    setCaregories: propTypes.func.isRequired
  };




