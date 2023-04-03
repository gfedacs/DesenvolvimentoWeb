const escola = 'Cod3r'

console.log(escola.charAt(4)) // Retorna o elemento dentro do índice escolhido.

console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // Pegar o valor dele na tabela unicod.
console.log(escola.indexOf('3')) // Está pegando o índice e retornando oq tem nele.

console.log(escola.substring(1)) // A partir do índice 1 , ele vai printar todo resto.
console.log(escola.substring(0,3)) // Vai do índice 0 até o índice 3, sem incluir o índice 3
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola '+ escola + '!')
// iteral é um valor que usamos sem armazenar em uma variável 
console.log(escola.replace(3,'e')) // Substituir um pelo outro 
console.log('Ana,Maria,Pedro'.split(',')) // Ele faz um separador por meio do argumento, e depois transforma em um Array


