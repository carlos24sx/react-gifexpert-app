import React from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
/* import { getGifs } from "../helpers/getGifs"; */
/* CREAMOS ESTE FUNCIONAL COMPONENT PARA MOSTRAR LAS CARD */
export const GifGrid = ({ category }) => {
  /* HACEMOS LA DESESTRUCTURACION PARA OBTENER LA DATA Y EL ESTADO DEL LOADING 
    QUE VIENEN DEL CUSTOM HOOKS QUE NOS CARGA EL LOADING Y PROCESA LA PETICION
    */
  const { data, loading } = useFetchGifs(category);
  /* 
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }; */

  return (
    <>
      <h3>{category.toUpperCase()}</h3>
      {loading && <p>Loading...</p>}

      <div className="cardGrid">
        {data.map((img) => (
          /* LLAMAMOS EL COMPONENTE QUE NOS PINTA EL CONTENIDO DE LAS CARD
            Y LE PASAMOS POR LOS PROPS LAS IMAGENES
            */
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
