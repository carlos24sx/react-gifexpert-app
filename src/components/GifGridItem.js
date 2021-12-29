import React from "react";
/* import PropTypes from "prop-types"; */
/* ESTE FUNCIONAL COMPONENT SE ENCARGA DE PINTAR EL CONTENIDO DE LAS CARD */
/* SE HACE DESECTRUCTURACION DE LAS IMG Y OBTENEMOS EL TITULO Y LA URL */
export const GifGridItem = ({ title, url }) => {
  /* PINTAMOS EL CONTENIDO DE LAS CARD */
  return (
    <div className="card animate__animated animate__bounceInUp">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};


