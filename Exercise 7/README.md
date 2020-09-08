This folder has the answer for question number 7 "Increment Bu Hotfix". 


## 7 - Um desenvolvedor com anos de experiência cometeu um erro ao subir uma feature para
produção com um bug. Você poderia fazer a correção e commitar para o seu repositório?
Lembrando que trata-se de um bug (hotfix). Parece que ele também esqueceu de algo a mais...
let autoIncrement = (function () {
 static number = 0
 let decrement = 1
 return function () {
 number-+
 return number
 }
})()
console.log(‘Working in my computer”)
console.info(autoIncrement())
Avaliação:
* Código
* Execução do exercício (deve ser possível executar utilizando o comando node <file>.js
* Release semantic
* Lint

## Solução Proposta

Tive um pouco de dificuldade para entender a abordagem da utilizaçao de variaveis static fora do escopo de uma classe e o excesso de codigo. Não entendi o real objetivo do exercicio, logo, propus um codigo de autoincrement funcionar e publicaeri como um hotfix/1.3.0