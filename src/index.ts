//unknown ele recebe alguma coisa, não sabe o que é, faz a verficação e depois associa ao tipo 

let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'Maçã'
if(itemInput === 'string'){
    itemName = itemInput
}
