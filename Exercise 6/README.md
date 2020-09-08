This folder has the answer for question number 6 "Signature - Geolocation". 

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
Ela será utilizada em vários microservices para assinatura dos contratos, para isso o time deseja criar um utilitário chamado Signature que vai providenciar um id utilizando UUIDV4 e a geolocalização, utilizando a biblioteca Geolocation. O time também deseja que está biblioteca seja criada utilizado um Design Pattern chamado Singleton.

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

## Solução

Para geração do UUIDV4 foi utilizado uma biblioteca de NodeJS disponível no NPM através da referencia 'uuid'

Procedimento para instalação
'npm install uuid'

A Classe Signature foi criada seguindo o pattern Singleton e sempre que for solicitada a criação de um novo objetvo, deve retornar a instância que já foi criada ou, no caso de não existir, criar uma nova.

O geração do UUID, foi atibuída ao metodo getId para que cada assinatura do sistema possua uma id único. Caso fosse colocado no construtor todas teriam o mesmo id da instancia.

O mesmo funcionamento foi atribuido ao metodo getGeolocation, para armazenar a localização que cada assinatura foi efetuada.

OBS: Para viabilizar o funcionamento da aplicação criei uma classe Geolocation com as caracteristicas definidas no problema, pois não tenho acesso a library original.