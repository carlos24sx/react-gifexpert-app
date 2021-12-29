


/* Aqui hacemos la peticion a la API */
export const getGifs = async (category) => {
  
  
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=IDnU3TAKTPA8uyOTHb0VzIH35s8lsg6T`;
  /* Hacemos la peticion y almacenamos el resultado */
  const result = await fetch(url);
  /* Aplicamos la desestructuracion a al rultado de la peticion */
  const { data } = await result.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });

  return gifs;
};
