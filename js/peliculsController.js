import { getPelicula, createPelicula, updatePelicula, deletePelicula } from "./peliculasService";

export async function loadPeliculas(tbody) {
    const pelicula = await getPelicula();
}