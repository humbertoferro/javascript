let num = [5,8,9,3]
num.push(2)//coloco esse valor na última posição
console.log(`nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)//comprimento do vetor
console.log(`O terceiro valor é o ${num[2]}`) //saber qual valor tá dentro dessa posição

for(let pos=0/*a variável pos vai iniciar com 0*/;pos<num.length/*enquanto o pos não chegar ao final do vetor, vai ser feito pos ++ pra fazer o looping*/;pos++){
    console.log()
}
let pos = num.indexOf(9)
console.log(`O valor 8 está na posição ${pos}`)
let valor = num.indexOf(6)
console.log(`O valor 6 está na posição ${valor}`)/*aparece -1 quando não existe*/