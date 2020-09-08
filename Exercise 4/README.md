This folder has the answer for question number 4 "O que é Event Loop no NodeJS e como ele funciona?". 

## 4 - O que é Event Loop no NodeJS e como ele funciona?

EventLoop é o algoritmo de gerenciamento de Threads executado na thread principal do NodeJS. Responsável por receber, propagar e responder as resquisiçoes efetuadas pelos clientes.

Os eventos possuem um ciclo de vida dentro do loop de eventos. 
- Estado de espera: Quando uma requisiçao é recebido pelo servidor, ela fica neste estado até ser propagada para uma thread. A propagação depende da disponibilidade de threads no pocessador.

- Estado de processamento: Quando a requisição foi propagada para uma Thread contudo ainda não concluída.

- Estado de processado: Quando a thread finaliza a execução da requisição e a resposta está disponível. Utilizado pelo EventLoop para responder a requisição e também para propagar uma nova requisição a Thread que acabou de ficar disponível.

- Estado de concluído: Ocorre após a resposta para o cliente e a requisição é removida do EventLoop.
