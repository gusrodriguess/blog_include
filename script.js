const post = document.getElementById("post")
const visivel = document.getElementById("mostrar")
const ocultos = document.getElementById("ocultos")

let storage = JSON.parse(localStorage.getItem("data") || JSON.stringify(postagens))

let mostrarPosts = () => {
  return post.innerHTML = storage.map((item) => {
    if(item.visibilidade == true) {
        return `    
          <div class="card_post">
              
            <div class="post_img">
                <img src="${item.imagem}" alt="">
                <h5> ${item.titulo} </h5>
            </div>
  
            <div class="descricao">
                <p>
                    ${item.descricao}
                </p>
            </div>

            <div class="visivel">
              <img src="img/visib.png" onclick="ocultar(${item.id})">
            </div>

          </div>`   
    }  
  })
}

let ocultar = (id) => {
  storage.map((item) => {
    if(item.id == id) {
      item.visibilidade = false
      localStorage.setItem("data", JSON.stringify(storage));
      mostrarPosts()
    }
  })
}

let mostrar = () => {
  storage.map((item) => {
    item.visibilidade = true;
    localStorage.setItem("data", JSON.stringify(storage));
  })
}

visivel.addEventListener("click", () => {
  mostrar()
  mostrarPosts()
})

mostrarPosts()