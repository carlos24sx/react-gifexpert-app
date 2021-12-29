import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/* CREAMOS UN CUSTOM HOOKS
PARA MANEJAR EL LOADER Y LLAMAR AL COMPONENTE QUE HACE LA PETICION
*/
export const useFetchGifs = (category) => {
  /* ESTE HOOK NOS SIRVE COMO LOADER Y ASU VEZ ALMACENA LA DATA */
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  /* USAMOS ESTE HOOK PARA QUE LA PETICION SE EJECUTE SOLAMENTE CUANDO HAYA UN CAMBIO
EN CATEGORY
*/
  useEffect(() => {
    /* LLAMAMOS AL HELPER QUE HACE LA PETICION, Y COMO NOS RETORNA UNA PROMESA
    USAMOS EL THEN Y ESTABLECEMOS UN TIEMPO PARA MOSTRAR EL LOADER Y ALMACENAR LA DATA
    */
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        /*CUANDO TENEMOS LA DATA LLAMAMOS ESTE HOOK PARA ASIGNARLE LA INFO */
        setState({ data: imgs, loading: false });
      }, 1000);
    });
  }, [category]);

  /* RETORNAMOS EL STATE. ESTE CONTIENE LA DATA Y EL ESTADO DEL LOADING */
  return state;
};
