const productosMenu = document.getElementById("productosMenu");
const verCarrito = document.getElementById("verCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");
const cantidadCarrito = document.getElementById("cantidadCarrito");


    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
const getproducts = async () => {
    const respuesta = await fetch ("productos.json");
    const data = await respuesta.json();
    console.log(data);

    data.forEach((producto) =>{
        let content = document.createElement("div");
        content.className = "cards";
        content.innerHTML = `
        <h3> ${producto.nombre}</h3>
        <img src= "${producto.img}">
        <p class= "price"> $ ${producto.precio}</p>
        `;
        
        productosMenu.append(content);
    
    
        let comprar = document.createElement("button");
        comprar.innerText = "Comprar";
        content.append(comprar);
        comprar.className = "comprar";  
    
        comprar.addEventListener("click", () => {
           carrito.push({
               nombre: producto.nombre,
               precio: producto.precio,
               cantidad: producto.cantidad,
               img: producto.img,
            });
            console.log(carrito);
            mostrarCarrito();
            guardarCarrito();
        });
    //   local Storage
        const guardarCarrito = () =>{
    
            localStorage.setItem("carrito", JSON.stringify(carrito));
        };

        carrito.forEach((producto) =>{
            let contenidoCarrito = document.createElement("div");
            contenidoCarrito.innerHTML= `
            <h3> ${producto.nombre} </h3>
            <img src= ${producto.img}>
            <p> $ ${producto.precio} </p>
            <p>  ${producto.cantidad} </p>`;
            
           
        });
        
    });
       
    verCarrito.addEventListener("click", () => {
        contenidoCarrito.innerHTML = ""; 
        
        let total = 0; 
        
        carrito.forEach((producto) =>{
            let contenidoProducto = document.createElement("div");
            contenidoProducto.innerHTML = `
                <h3> ${producto.nombre} </h3>
                <img src= ${producto.img}>
                <p> $ ${producto.precio} </p>
                <p> ${producto.cantidad} </p>`;
            contenidoCarrito.appendChild(contenidoProducto);
            
            total += producto.precio; 
        });
    
        const totalAPagar = document.createElement("div");
        totalAPagar.innerHTML = `Total a pagar: $ ${total}`;
        contenidoCarrito.appendChild(totalAPagar);
    });
      
};
getproducts();

    
    
          
        
        
      
       


