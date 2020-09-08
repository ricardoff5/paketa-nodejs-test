This folder has the answer for question number 2 "Como NodeJS funciona?". 

## 2 - Como NodeJS funciona?

Node.JS funciona através de um loop de eventos não-bloqueantes implementado em uma única thread.

Na prática, todas as requisições são enviadas para o loop de eventos, ou EventLoop, e seus trechos assíncronos são propagados para as threads disponíveis no servidor. O EventLoop por sua vez não espera a conclusão destas requisições e segue em loop infinito verificando o status das demais requisições. Quando a resposta de uma requisições estive disponível o EventLoop responde para o cliente e remove a requisição do loop.
