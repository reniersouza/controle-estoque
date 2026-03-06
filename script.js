function adicionarProduto(){

let produto = document.getElementById("produto").value
let quantidade = document.getElementById("quantidade").value

if(produto === "" || quantidade === ""){
alert("Preencha todos os campos")
return
}

if(quantidade < 5){
alert("Estoque baixo!")
}

let lista = document.getElementById("lista")

let item = document.createElement("li")

item.innerHTML = produto + " - Quantidade: " + quantidade +
" <button onclick='removerProduto(this)'>Remover</button>"

lista.appendChild(item)

document.getElementById("produto").value = ""
document.getElementById("quantidade").value = ""

atualizarContador()

}

function removerProduto(botao){

botao.parentElement.remove()

atualizarContador()

}

function atualizarContador(){

let total = document.querySelectorAll("#lista li").length

document.getElementById("contador").textContent =
"Total de produtos: " + total

}
atualizarContador()
