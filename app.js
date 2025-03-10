// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let mejoresamigos = [];


/*funcion principal para agregar amigos a la lista con 3 variantes
primera variante (if): si el valor es nulo envia un alert
segunda variante (else if): si el valor ya se encuentra registrado envia un alert solicitando otro nombre
tercera variante (else): agrega el nombre al listado y lo muestra en pantalla
*/
    function agregarAmigo(){
    let nombreamigo = document.getElementById('amigo').value;
    document.getElementById("resultado").innerHTML = "";
    if (nombreamigo === ''){
        alert("inserte un nombre");
    }else if(mejoresamigos.includes(nombreamigo)){
        alert("Ese nombre ya se encuenta registrado");
    }
    
    else
    mejoresamigos.push(nombreamigo);
    mostrarLista();
    reiniciar();

    }
    
//ayuda a crear la lista
    function mostrarLista() {
        let listaNombres = document.getElementById('listaAmigos');
        listaNombres.innerHTML = "";
        for (let i = 0; i < mejoresamigos.length; i++) {
            let item = document.createElement("li");
            item.textContent = mejoresamigos[i];
            listaNombres.appendChild(item);
            }
           
        }

//reinicia el valor del input a cero
    function reiniciar(){
        document.getElementById('amigo').value ="";
    }

    function sortearAmigo(){
        if(mejoresamigos <= 1){
            alert("necesitas agregar mas personas para realizar el sorteo");
        }else{
                const numeroGenerado =  Math.floor(Math.random()*mejoresamigos.length);
                resultado.innerHTML = "";
                const amigoSeleccionado = mejoresamigos[numeroGenerado];
                const alaLi = document.createElement('li');
                alaLi.textContent = `El amigo seleccionado es: ${amigoSeleccionado}`;
                resultado.appendChild(alaLi);
                listaAmigos.innerHTML = ""; // Limpiar la lista de amigos en pantalla
                const alaLiLi = document.createElement('li');
                sorteoNuevo();}
        
        }
    

    function sorteoNuevo(){
        reiniciar();
        document.getElementById("listaAmigos").innerHTML = "";
        mejoresamigos = [];
    }