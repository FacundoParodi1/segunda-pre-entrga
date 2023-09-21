class Item{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const pocion = new Item("Pocion de Salud", 50, "pocion.png");
const escudo = new Item("Escudo de Oro", 50, "escudo.png");
const espada = new Item("Espada Ignea", 50, "espada.png");

const inventario = [];

let oro = 500; 

const elOro = document.querySelector("#oro span");
elOro.innerText = oro;
const elInventario = document.getElementById("inventario");

function comprar(item){
    if(oro - item.precio >= 0){
        inventario.push(item);
        oro-= item.precio;
        acualizarHTML();
    }else{
        alert(`No tenes oro suficiente para comprar ${item.nombre}.`)
    }
}

function vender(nombreItem){
    const itemVenta = inventario.find((item)=> item.nombre == nombreItem);
    if(itemVenta){
        oro += itemVenta.precio;
        inventario.splice(inventario.indexOf(itemVenta), 1)
        acualizarHTML();
    }
}

function acualizarHTML(){
    elOro.innerText = oro;
    elInventario.innerHTML = "";
    for(const item of inventario){
        const indice = inventario.indexOf(item);
        const li =`
        <li onclick="vender('${item.nombre}')">
        <img src="img/${item.imagen}" alt"${item.imagen}"
        </li>
        `;
        elInventario.innerHTML = elInventario.innerHTML + li;
    }
}