This folder has the answer for question number 7 "HTTP Request". 

## 8 – Crie um método de requisição HTTP que retorne o seguinte json:
data: {
 fintech: "Paketá"
}
Avaliação:
* Código
* Execução do exercício (deve ser possível executar utilizando o comando node <file>.js
* Requisição da api

## Solução Proposta

No problema não especifica se é permitido a utilização do Express. Logo implementei tudo utilizando a library nativa do Nodejs 'http'

Criei um servidor na porta 3333, que levanta uma única página com conteúdo igual ao execício. Criei uma requisição HTTP GET para consumir esses dados e exibir na linha de comando.

A requisição foi inserida em uma chamada assíncrona de timeout para garantir que o servidor já estaria online no momento da requisição.