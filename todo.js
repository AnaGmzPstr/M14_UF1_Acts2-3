//TODO list 
//Funció que comproba que la tasca es vàlida i que afegeix la tasca
function afegirElement() {
    let tarea = document.getElementById('tasca').value.trim();
    console.log(tarea)
    if (tarea == "") alert("Has d'afegir una tasca!")
    else crearTarea(tarea);
}

//Funció que buida la llista de tasques
function vaciarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
}

//Funció que crea tots els elements de la tasca donat el missatge
function crearTarea(mensaje) {
    let lista = document.getElementById('lista');
    
    let contenedor = crearElementTarea(mensaje);
    lista.appendChild(contenedor);

    document.getElementById('tasca').value="";
}

//Funció auxiliar per crear el contenidor de la tasca
function crearElementTarea(tasca){
    let contenedor = document.createElement('div');
    contenedor.className = 'tarea';

    let check = crearCheck();
    let label = crearLabel(tasca);
    let eliminarTarea = crearBtnEliminar(contenedor);

    contenedor.appendChild(check);
    contenedor.appendChild(label);
    contenedor.appendChild(eliminarTarea);

    return contenedor
}

//Funció que crea l'element checkbox
function crearCheck(){
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.addEventListener('change', (event) =>{
        let label = event.target.nextElementSibling;
        if (event.target.checked) {
            label.className='tachar';
        } else {
            label.classList.remove('tachar');
        }
    });

    return check;
}

//Funció que crea un label
function crearLabel(tasca){
    let label = document.createElement('label');
    label.textContent=tasca;
    return label;
}

//Funció que crea el botó que elimina la tasca en concret
function crearBtnEliminar(contenedor){
    let boton = document.createElement('button');
    boton.textContent='X';
    boton.className='eliminar';

    //Afegim un event que elimina la tasca
    boton.addEventListener('click', () =>{
        contenedor.remove();
    });
    return boton;
}

//Afegim un event que accepti la tasca amb la tecla 'enter'
const inputTasca = document.getElementById('tasca');

inputTasca.addEventListener('keydown', (event)=>{
    if (event.key ==='Enter') afegirElement();
})