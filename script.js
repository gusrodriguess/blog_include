const form = document.querySelector("#form")
const titulof = document.getElementById("titulo")
const descricaof = document.getElementById("descricao")

let storage = JSON.parse(localStorage.getItem("data") || JSON.stringify(postagens))

let tamanho = storage.length

form.addEventListener("submit", (e) => {
    storage.push({
        id: tamanho+1,
        imagem: "img/competencia.png",
        titulo: titulof.value,
        descricao: descricaof.value,
        visibilidade: true
    })

    localStorage.setItem("data", JSON.stringify(storage));
})
