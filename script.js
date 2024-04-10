const form = document.querySelector("#form")
const titulof = document.getElementById("titulo")
const descricaof = document.getElementById("descricao")

let storage = JSON.parse(localStorage.getItem("data") || JSON.stringify(postagens))

form.addEventListener("submit", (e) => {
    storage.push({
        imagem: "img/competencia.png",
        titulo: titulof.value,
        descricao: descricaof.value
    })

    localStorage.setItem("data", JSON.stringify(storage));
})
