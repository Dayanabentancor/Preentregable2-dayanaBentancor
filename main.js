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
        // aca hay algo que estoy haciendo mal, no me doy cuenta ahora, espero para corregirlo en la reentrega

    verCarrito.addEventListener("click", () => {
        
         console.log(funciona);
      });
        const total = carrito.reduce((e, producto) => e + producto.precio, 0);
        
        const totalAPagar = document.createElement("div");
        totalAPagar.innerHTML= `Total a pagar: $ ${total}`;
      
      
    
          
        
        
      
       


