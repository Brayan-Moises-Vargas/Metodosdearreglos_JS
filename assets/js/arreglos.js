let tareas=[
    {id: 1, nombre: "hacer mercado", completado: false },
    {id: 2, nombre: "estudiar", completado: false },
    {id: 3, nombre: "paseo gary", completado: false },
]
const tareaInput = document.getElementById("nuevaTarea")//.value
const btnAgregar = document.getElementById("agregartarea")
const listaDeTareas = document.getElementById("tareas")
const losh4 = document.getElementById("soyh4")
const losh42 = document.getElementById("soyh42")
//agregar tarea
const addtarea = () =>{
    const nombreTarea = tareaInput.value  
    if (!nombreTarea){
        alert("ingresa la tarea")
        //return //esto para que no se ejecute la otra parte del codigo 
    }
const ultimaTarea = tareas[tareas.length-1]
const nuevatarea = {
    id: ultimaTarea? ultimaTarea.id + 1 : 1, // + 1 es incremetal el ID //ternario
    nombre: nombreTarea,
    completado: false, //cuando vaya add algo siempre false
}

tareas.push(nuevatarea)
console.log(tareas)
};
btnAgregar.addEventListener("click", addtarea)
//hasta aqui todo bien 
        //
//cambio de estatus
const status=(id) =>{
const indice = tareas.findIndex((tareas) => tareas.id === id)
if(tareas[indice].completado == false){
    const segundaTarea ={
        id: tareas[indice].id, //para que no cambie y se mantenga
        nombre: tareas[indice].nombre, //para que tampoco cambie
        completado: true, //aqui si quiero que cambie a true la tarea
    }
    tareas.splice(indice, 1, segundaTarea)
}
else{
    const segundaTarea ={
        id: tareas[indice].id, //para que no cambie y se mantenga
        nombre: tareas[indice].nombre, //para que tampoco cambie
        completado: false, //aqui si quiero que cambie a true la tarea
    }
    tareas.splice(indice, 1, segundaTarea)
}
 console.log(tareas)
}
//ok aqui 
const renderizar = () =>{
    let html = "";
    let inputListo="";
    let cuentahecha=[];
    tareas.forEach((tareas) => {
        inputListo= tareas.completado
        ?
         `<p class="click" onclick="status(${tareas.id})">${tareas.nombre} <input type="checkbox" > Esta es mi primera tarea</p>`
         : 
         `<p onclick="status(${tareas.id})">${tareas.nombre} <input type="checkbox" > Esta es mi primera tarea</p>`
        
        html+= 


        `<div class="pintar"> 
        <p>${tareas.id}</p>
        <p>${inputListo} <i id="icono" class="fa-regular fa-circle-xmark" onclick="deleteTask(${tareas.id})"></i></p>
        </div>`
        /*
        
        `<div  id="tareas" class="idtareas">  
        <h4>id</h4>
        <h4>tareas</h4>
        </div> 
        <div class="divdetareas">
        <h4>${tareas.id}</h4>
        <h4>${inputListo} 
        <i id="icono" class="fa-regular fa-circle-xmark"></i>
        <i class="fa-regular fa-circle-check"></i>
        </h4>
        </div>`
        */ 
       
        if(tareas.completado === true){
            cuentahecha.push(tareas)
        }
    })
    
    listaDeTareas.innerHTML = html;
    losh4.innerHTML = tareas.length;
    losh42.innerHTML = cuentahecha.length;
      
}
