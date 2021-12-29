import React, { useState } from "react";
/* import PropTypes from "prop-types"; */
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["goku"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* agregamos la propiedad setCategorias para poder agregar categorias desde otro componente */}
      <AddCategory setCategorias={setCategorias} />
  

   
      <ol>
        {categorias.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

/* GifExpertApp.propTypes = {}; */

export default GifExpertApp;
