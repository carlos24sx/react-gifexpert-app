import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  /* evento o funcion para evitar que se recargue la pagina cuando se haga enter */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue !== undefined && inputValue !=='') {
      setCategorias((category) => [ inputValue,...category]);
      console.log('hecho');
      setInputValue('');
    }

  };


  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};
AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
/* AddCategory.defaultProps = {
  setCategorias: "Hola Mundo",
}; */
