function adicionarProduto(){

let produto = document.getElementById("produto").value
let quantidade = document.getElementById("quantidade").value

if(produto === "" || quantidade === ""){
alert("Preencha todos os campos")
return
}

let lista = document.getElementById("lista")

let item = document.createElement("li")

item.innerHTML = produto + " - Quantidade: " + quantidade +
" <button onclick='removerProduto(this)'>Remover</button>"

lista.appendChild(item)

document.getElementById("produto").value = ""
document.getElementById("quantidade").value = ""

}

function removerProduto(botao){

botao.parentElement.remove()

}
if(quantidade < 5){
alert("Estoque baixo!")
}
