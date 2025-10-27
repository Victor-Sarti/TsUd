//ENUM 
//const admin = 1
//const read = 2
//const backup = 3
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["admin"] = 1] = "admin";
    Trabalho[Trabalho["dev"] = 2] = "dev";
    Trabalho[Trabalho["dash"] = 3] = "dash";
})(Trabalho || (Trabalho = {}));
var user = {
    nome: 'Victor',
    idade: 20,
    trabalho: Trabalho.dev
};
console.log(user);
