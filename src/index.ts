//ENUM 

//const admin = 1
//const read = 2
//const backup = 3

enum Trabalho{admin =1, desenvolvedor =2, powerBi=3}

const user = {
    nome: 'Victor',
    idade: 20,
    trabalho: Trabalho.desenvolvedor
}

console.log(user)