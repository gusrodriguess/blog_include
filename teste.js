const post = document.getElementById("post")

let storage = JSON.parse(localStorage.getItem("data") || JSON.stringify(postagens))

let mostrarPosts = () => {
      return post.innerHTML = storage.map((item) => {
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
            </div>`    
      })   
  }
  
mostrarPosts()