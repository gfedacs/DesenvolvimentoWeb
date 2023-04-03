let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)
console.log(!isAtivo)
console.log(!!isAtivo)
console.log(!isAtivo)

console.log('Os verdadeiros são ... ')

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo= true))
console.log(!!(isAtivo= Infinity))
console.log(!!(isAtivo= 33))

console.log('Os falsos são ...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo= false))

console.log('Pra finalizar ...')
console.log(!!(''|| null || 0 || 'epa')) // Se um for verdadeiro, tudo será verdadeiro
console.log(''|| null || 0 || 'epa'|| 123) // Só retorna o único valor verdadeiro , e a primeira ocorrência

let nome = '' // Gabriel
console.log(nome || 'Desconhecido')