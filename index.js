class hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
}

let heroi = new hero("Alisson", 34, "guerreiro")
let ataque = ""

if (tipo = "mago"){
    ataque = "magia"
}else if (tipo = "guerreiro"){
    ataque = "espada"
}else if (tipo = "monge"){
    ataque = "artes marciais"
}else if (tipo = "ninja"){
    ataque = "shuriken"
}
console.log("O " + tipo + " atacou usando " + ataque)