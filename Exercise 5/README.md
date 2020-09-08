This folder has the answer for question number 5 "O que é Callback Hell?". 

## 5 - O que é Callback Hell?

Callback é uma função que será passada como parâmetros juntamente com a requisição e será executada quando a mesma for concluída.

Como o NodeJS incentiva os desenvolvedores a trabalhar de forma assíncrona, alguns programadores pouco experientes podem cometer o erro de coloca diversas funções de callback "aninhadas", ou seja, uma dentro da outra. Chamado de Callback Hell.

Exemplo:
```
doSome.then(()=>{
    ...
    doSome.then(()=>{
        ...
        doSome.then(()=>{
            ...
            doSome.then(()=>{
                ...
                doSome.then(()=>{
                    ...
                });
            });
        });
    });
});

```

Esse tipo de codificação dificulta a leitura, o entendimento e pincipalmente a manutenção do código, para evita este tipo de poblema recomenda-se:

- Clean Code : Busque sempre escrever o código da maneira mais simples e reduzida possível, busque nomear as funções para facilitar o entendimento.

- Modularize : Sempre que um trecho de código estiver muito extenso ou complexo, separa em vários arquivos, até o momento que esteja fácil de entender.

- Threat Errors : Sempre trate erros imediatamente após a origem do mesmo, com mensagens claras que possam ser identificadas facilmente.

Outra abordagem, é a utilização das funcionalidades das versões mais recentes do ECMAScript, mas precisamente o 'async await', que permitem de forma menos verbosa efetuar várias chamadas assíncronas.
