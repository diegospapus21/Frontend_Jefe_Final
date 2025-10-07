import { getAllPeliculas, CrearPeliculas, ModificarPeliculas, EliminarPeliculas } from "./peliculasService";

export async function loadPeliculas(tbody) {
    const pelicula = await getAllPeliculas();
    tbody.innerHTML= "";
    pelicula.forEach(P => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${p.id}</td><td>${p.Titulo}</td><td>${p.Director}</td><td>${p.Genero}</td>
        <td>${p.Estreno}</td><td>${p.Año}</td><td>${p.Duracion}</td><td>${p.Creacion}</td><td><button data id="${P.id}" class="edit">Editar</button>
        <button data id="${P.id}" class="delete">Borrar</button></td>`;
        tbody.appendchild(tr);
    });
}

export async function bindPeliculaForm(Form, tbody) {
    Form.addEventListener('submit', async (e)=> {
        e.preventDefault();
        const fd = new FormData(form);
        const dto = {Titulo:fd.get('Titulo'), Director:fd.get('Director'), Genero:fd.get('Genero'), Año:fd.get('Año'), Duracion:fd.get('Duracion') ? Number(fd.get('Duracion')):null, Fecha:fd.get('Fecha')};
        await createPelicula(dto);
        form.reset();
        await loadPeliculas(tbody);
    });
}

export function bindTableActions(tbody, modalCallback){
    tbody.addEventListener('click', async (e)=> {
        if(e.target.matches('.delete')){
            const id = e.target.dataset.id;
            if(confirm('Borrar Pelicula'+ id + '?')){
                await deletePelicula(id);
                await loadPeliculas(tbody);
            }
        }else if (e.target.matches('.edit')){
            const id = e.target.dataset.id;
            modalCallback(id);
        }
    });
}