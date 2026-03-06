function adicionarProduto() {

let produto = document.getElementById("produto").value
let quantidade = document.getElementById("quantidade").value

let lista = document.getElementById("lista")

let item = document.createElement("li")

item.textContent = produto + " - Quantidade: " + quantidade

lista.appendChild(item)

}
