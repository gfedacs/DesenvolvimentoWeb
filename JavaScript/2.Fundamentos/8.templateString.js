const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const templete =  ` Olá 
                ${nome} ! `

console.log(concatenacao,templete)

// Expressões ...
console.log ( ` 1 + 1 = ${1+1} `)

const up = string => string.toUpperCase()
console.log(` Ei cuidado... ${up('cuidado')}`)
