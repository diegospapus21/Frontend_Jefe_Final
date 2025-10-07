const API_Jefe_Final = 'http:localhost:8080/10.10.1.47'

export async function getAllPeliculas(id) {
    const res = await fetch(`${API_Jefe_Final}/peliculas`);
    return res.json();
}

export async function CrearPeliculas(pelicula) {
    const res = await fetch(`${API_Jefe_Final}/peliculas`,{
        method:'POST', 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(pelicula)
    });
    return res.json();
}

export async function ModificarPeliculas(id, pelicula) {
    const res = await fetch(`${API_Jefe_Final}/peliculas/${id}`,{
        method:'PUT', 
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(pelicula)
    });
    return res.json();
}

export async function EliminarPeliculas(id) {
    return fetch (`${API_Jefe_Final}/peliculas/${id}`,{
        method:'DELETE'
    }); 
}