//lista das perguntas, com as respostas corretas
const perguntas = [
    {
      pergunta: "Qual é a palavra-chave utilizada para declarar uma variável que não pode ser alterada após a sua atribuição?",
      respostas: [
        "var",
        "const",
        "let",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'charAt()' em JavaScript?",
      respostas: [
        "Retorna o valor booleano indicando se o caractere está presente na string.",
        "Retorna o caractere em uma posição específica na string.",
        "Remove o último caractere da string.",
      ],
      correta: 1
    },
    {
      pergunta: "O que o termo 'hoisting' significa em JavaScript?",
      respostas: [
        "Mover uma declaração para o topo do seu escopo antes da execução do código.",
        "Esconder uma variável do escopo global.",
        "Modificar dinamicamente o valor de uma variável.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "# Este é um comentário",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "O que o operador 'typeof' faz em JavaScript?",
      respostas: [
        "Compara dois valores e verifica se são do mesmo tipo.",
        "Retorna uma string que representa o tipo de dado de uma expressão.",
        "Executa uma operação lógica do tipo XOR.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converte uma string para um número inteiro.",
        "Arredonda um número para a próxima unidade inteira.",
        "Converte um número para uma string.",
      ],
      correta: 0
    },
    {
      pergunta: "O que representa o operador '+' quando utilizado com strings em JavaScript?",
      respostas: [
        "Realiza a adição aritmética.",
        "Concatena duas strings.",
        "Converte uma string para um número.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de criar um loop 'for' que itera de 0 a 4 (inclusive)?",
      respostas: [
        "for (let i = 0; i < 5; i++)",
        "for (let i = 1; i <= 4; i++)",
        "for (let i = 0; i <= 4; i++)",
      ],
      correta: 2
    },
    {
      pergunta: "O que é um closure em JavaScript?",
      respostas: [
        "Um tipo de dado que armazena um conjunto de valores.",
        "Uma função que não tem acesso ao escopo externo.",
        "Uma função que tem acesso ao escopo externo, mesmo após a execução dessa função.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'map()' em arrays?",
      respostas: [
        "Aplica uma função a cada elemento do array e retorna um novo array com os resultados.",
        "Remove o último elemento do array.",
        "Filtra os elementos do array com base em uma condição fornecida.",
      ],
      correta: 0
    },
  ];
  
    //transferindo o conteudo html para o js.
    const quiz = document.querySelector('#quiz')
    const template = document.querySelector('template')
    
    const corretas = new Set()
    const totalDePerguntas = perguntas.length
    const mostraTotal = document.querySelector('#acertos span')
    mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
    //loop ou laço de repetição das perguntas.
    for (const item of perguntas) {
      const quizItem = template.content.cloneNode(true)
      quizItem.querySelector('h3').textContent = item.pergunta
  
    //loop de repetição das alternativas de resposta.
      for(let respostas of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = respostas
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item)) 
        dt.querySelector('input').value = item.respostas.indexOf(respostas)
        dt.querySelector('input').onchange = (event) => {
          const estaCorreta = event.target.value == item.correta
  
          corretas.delete(item)
          if (estaCorreta) {
            corretas.add(item)
            
          }
          mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
  
  
        quizItem.querySelector('dl').appendChild(dt)
      }
  
    //removendo o item "Resposta A" das alternativas. 
      quizItem.querySelector('dl dt').remove('dl')
  
    //coloca as perguntas na tela.
      quiz.appendChild(quizItem)
    }
  