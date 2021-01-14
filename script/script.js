var listaDeProductos = [
    {
        id : 1,
        producto: 'Harina',
        precio:  70,
              
    },
    {   
        id : 2,
        producto: 'Azúcar',
        precio:  65,
         
    },
    {
        id : 3,
        producto: 'Pan',
        precio:  180,
         
    },
    {
        id : 4,
        producto: 'Yerba',
        precio:  330,
         
    },
    {
        id : 5,
        producto: 'Melón ',
        precio:  150,
         
    },
    {
        id : 6,
        producto: 'Papas',
        precio:  50,
         
    },
    {
        id : 7,
        producto: 'Vino',
        precio: 390,
         
    },
    {
        id : 8,
        producto: 'Pollo',
        precio:  160,
         
    },
    {
        id : 9,
        producto: 'Caramelos',
        precio:  130,
         
    },
    {
        id : 10,
        producto: 'Encendedor',
        precio:  130,
         
    },
    {
        id : 11,
        producto: 'Pañuelos descartables',
        precio:  130,
         
    },
    {
        id : 12,
        producto: 'Maní con cascara',
        precio:  130,
         
    },
    {
        id : 13,
        producto: 'Doritos',
        precio:  130,
         
    },
    {
        id : 14,
        producto: 'Té',
        precio:  80,
         
    },
    {
        id : 15,
        producto: 'Vinagre',
        precio:  110,         
    },
    {
        id : 16,
        producto: 'Nesquick',
        precio:  230,
         
    },
];
 
let productosVacios = [];
let suma = 0;
function crearLista(){

    const tbodyCrear = document.getElementById('listPrice');

    listaDeProductos.forEach ((item) => {

        const tr = document.createElement('tr');
        const tdProducto = document.createElement('td');
        const tdProductoTXT = document.createTextNode(item.producto);
        tdProducto.appendChild(tdProductoTXT);
        tr.appendChild(tdProducto);

        
        const tdPrecio = document.createElement('td');
        const tdPrecioTXT = document.createTextNode('$ ' + item.precio);
        tdPrecio.appendChild(tdPrecioTXT);
        tr.appendChild(tdPrecio);

        tr.onclick = function () {agregarProducto(item.producto,item.precio);}
        
        tbodyCrear.appendChild(tr);
    })
}

function agregarProducto(nuevoProducto, nuevoPrecio){

    let cantidad = 0;
    productosVacios.forEach ((cadaProducto) => {
        if (cadaProducto.producto == nuevoProducto) {
            cantidad = 1;
        }
    }
    );

    if (cantidad == 0)  {
        productosVacios.push({producto: nuevoProducto, precio: nuevoPrecio});
        actualizarCarrito();
    }
    else {
        cantidad = 0;
    }
};



function actualizarCarrito(){
    
    const tbodyCarrito = document.getElementById('carShop');
    
    let trsOnHtml = tbodyCarrito.querySelectorAll('tr');
        
        
    if (productosVacios.length >= 0){
        trsOnHtml.forEach((item) => {
            tbodyCarrito.removeChild(item);
        });}
        
        productosVacios.forEach ((cadaProductoDelCarro, index) => {
            const tr = document.createElement('tr');
        
            const tdProducto = document.createElement('td');
            const tdProductoTXT = document.createTextNode(cadaProductoDelCarro.producto);
            tdProducto.appendChild(tdProductoTXT);
            tr.appendChild(tdProducto);
            
            const tdPrecio = document.createElement('td');
            const tdPrecioTXT = document.createTextNode('$ ' + cadaProductoDelCarro.precio);
            tdPrecio.appendChild(tdPrecioTXT);
            tr.appendChild(tdPrecio);
        
            tr.onclick = function () {sacameDelCarro(index);};
            
            tbodyCarrito.appendChild(tr);
               
        })        
};
    
function sacameDelCarro(indice){
        productosVacios.splice(indice, 1);
        actualizarCarrito();
};

function importeTotal(){
    resultado = document.querySelector('p');
    totalCarro = 0;


    productosVacios.forEach(cadaProductoCarro =>{
        totalCarro += cadaProductoCarro.precio;            
    });  

    resultado.innerHTML= 'Total: $ ' + totalCarro;

};

function ceroEnCarro() {
    
    resultado = document.querySelector('p');
    totalCarro = 0;
    resultado.innerHTML= 'Total: $ ' + totalCarro;    
    
    
    productosCarrito = [];
    actualizarCarrito();           
};
