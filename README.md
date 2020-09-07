This repository has been requested by Paketá Credito, it must store answers form Paketá's Technical Test. The answer for each question might be in a single folder and has a proper realease.

## Paketá's Technical Test

- Todos os exercícios deverão ser resolvidos em um único repositório de sua escolha, como github, gitlab ou similar. Você deve nos enviar o link do repositório após resolução dos exercícios.
- Cada exercício deverá ser enviado em commits separados, ou seja, não resolva dois
exercícios e envie ambos em um commit. Será critério de avaliação a análise por commit.
Não há problema de enviar mais de um commit para a resolução de um mesmo exercício.
- Trabalhamos com versões semânticas no sistema para poder ter um maior controle de cada incremento que estamos enviando. Sendo assim, após solucionar um problema uma release deverá ser criada, bem como um release-notes para sabermos o que foi feito. Exercício 1,
release ?.?.?. Queremos saber aqui como você irá criar as releases. Subiu algo com
problema? Sem pânico. Como vai ser solucionado? Como fica a release?
- Deve existir um arquivo README.md na raíz do repositório descrevendo quais foram os
problemas deste teste, a descriação da solução para cada problema deve ficar em um arquivo
README.md na raíz de cada exercício. Trabalhamos com monorepo e com isso precisamos
que para cada resolução de exercício você crie uma nova pasta no repositório. Exemplo:
├─README.md
│ ├── Exercise 1
│ │ └── README.md
│ ├── Exercise 2
│ └── Exercise 3

# Tips
• Menos é mais. Seja direto e simples com as resoluções;
• Eu gostaria de mostrar as respostas teóricas para um leigo;
• Clean code é importante;
• Gostamos de abstrações e reaproveitamento de código. Mas em alguns casos um código
“burro” é mais simples de entender e realizar manutenções.
Enjoy!

## 1 - O que é NodeJS?
This question has been answer in folder Exercise 1

## 2 - Como NodeJS funciona?
## 3 - Onde NodeJS pode ser utilizado?
## 4 - O que é Event Loop no NodeJS e como ele funciona?
## 5 - O que é Callback Hell?
## 6 - O time de engenharia da Paketá criou uma biblioteca chamada Geolocation que retorna a Geolocalização do usuário em tempo de execução.

Ela retorna uma promise e um objeto com as seguintes propriedades:
// Promise
Geolocation.getGeolocation()
{
 location: {
 latitude: 13434554,
 longitude: 34343435
 }
}
Ela será utilizada em vários microservices para assinatura dos contratos, para isso o time deseja
criar um utilitário chamado Signature que vai providenciar um id utilizando UUIDV4 e a
geolocalização, utilizando a biblioteca Geolocation. O time também deseja que está biblioteca seja
criada utilizado um Design Pattern chamado Singleton.
Resultado esperado: Chamar o objeto Signature e o mesmo retorne dois métodos getId e
getGeolocation:
Signature.getId()
// Promise
{
 id: 34141343434
}
Signature.getGeolocation()
// Promise
{
 geolocation: {
 latitude: 13434554,
 longitude: 34343435
 }
}
Obs.: Os números acima são meramente ilustrativos
Avaliação:
* Execução do exercício (deve ser possível executar utilizando o comando node <file>.js
* Cumprimento dos requisitos do pattern Singleton
* Lógica

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

## 8 – Crie um método de requisição HTTP que retorne o seguinte json:
data: {
 fintech: "Paketá"
}
Avaliação:
* Código
* Execução do exercício (deve ser possível executar utilizando o comando node <file>.js
* Requisição da api