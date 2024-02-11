const tareas = [{id: "1707596583499", descripcion: "Hacer compras", realizada: false},{id: "1707596583500", descripcion: "Estudiar", realizada: false},{id: "1707596583501", descripcion: "Cocinar", realizada: false}]

const tareaInput = document.querySelector("#nuevaTarea")

const btnAgregar = document.querySelector("#btnAgregar")

const idElementos = document.querySelector("#idElementos")

const descripcionElementos = document.querySelector("#descripcionElementos")

const totalTareas = document.querySelector("#total")

const tareasRealizadas = document.querySelector("#realizadas")

renderList(tareas);

btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value
    tareas.push({id: Date.now(), descripcion: nuevaTarea, realizada: false})
    tareaInput.value = ""
    renderList(tareas)
});

function renderList(tareas){

    let idElementoHTML = ""
    let descripcionElementoHTML =""
    let tareasRealizadasCount = 0;

    tareas.forEach(tarea => {
        idElementoHTML += `<li> ${tarea.id} </li>`;
        descripcionElementoHTML += `<li class="${tarea.realizada ? 'textListo' : 'textNoListo'}"> ${tarea.descripcion} <label>
        <button id="btnAgregar" onclick="listo('${tarea.descripcion}')">Realizado
        </button>
        </label>
        <label> <input type="checkbox" id="eliminar" onclick="borrar('${tarea.descripcion}')">
            <i  id="icon" class="fa-solid fa-circle-xmark" style="color: #ff2600;"></i>
        </input> </label> </li>`;

        if(tarea.realizada){
            tareasRealizadasCount++;
        }

    });


    idElementos.innerHTML = idElementoHTML
    descripcionElementos.innerHTML = descripcionElementoHTML;

    tareasRealizadas.textContent = tareasRealizadasCount
    totalTareas.textContent = tareas.length;

}

function borrar(descripcion){
    const index = tareas.findIndex((tarea) => tarea.descripcion === descripcion)
    tareas.splice(index,1)
    renderList(tareas)
}

function listo(descripcion){
    const tareaLista = tareas.find(tarea => tarea.descripcion === descripcion)
    
    if (tareaLista) {
        if (tareaLista.realizada) {
            tareaLista.realizada = false;
        } else {
            tareaLista.realizada = true;
        }   
    }

    renderList(tareas);

}
