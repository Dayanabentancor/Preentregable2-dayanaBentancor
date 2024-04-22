const productosMenu = document.getElementById("productosMenu");
const verCarrito = document.getElementById("verCarrito");
const contenidoCarrito = document.getElementById("contenidoCarrito");
const menu = [
    {
        nombre: "Chivito",
        precio: 250,
    },
    {
        nombre: "Pizza",
        precio: 300,
    },
    {
        nombre: "Napolitana",
        precio: 250,
    },
    {
        nombre: "Hamburguesas",
        precio: 280,
    },
    
    ];
    
    let carrito = [];
    
    menu.forEach((producto) =>{
        let content = document.createElement("div");
        content.className = "cards";
        content.innerHTML = `
        <h3> ${producto.nombre}</h3>
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
            });
            console.log(carrito);
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
            <p> $ ${producto.precio} </p>`;
            
            contenidoCarrito.append(h3);
            contenidoCarrito.append(p);
        });
        
    });
       
    verCarrito.addEventListener("click", () => {
        contenidoCarrito.innerHTML = ""; 
        
        let total = 0; 
        
        carrito.forEach((producto) =>{
            let contenidoProducto = document.createElement("div");
            contenidoProducto.innerHTML = `
                <h3> ${producto.nombre} </h3>
                <p> $ ${producto.precio} </p>`;
            contenidoCarrito.appendChild(contenidoProducto);
            
            total += producto.precio; 
        });
    
        const totalAPagar = document.createElement("div");
        totalAPagar.innerHTML = `Total a pagar: $ ${total}`;
        contenidoCarrito.appendChild(totalAPagar);
    });
      
    
          
        
        
      
       


