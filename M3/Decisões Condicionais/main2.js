let numA = 10;
let numB = 2;
let numC = 3;
let maior;

if (numA>numB){
    if(numA>numC){
        maior=numA;
    }else{
        maior = numC
    }
}else{
    if(numB>numC) {
        maior = numB;
    }else{
        maior = numC
    }
}
console.log("O maior número é o: " + maior)
//esse de cima vai comparar o A com o B e depois o A com o C, caso o A permaneça sendo o maior número, vai ser passado para a variável maior, senão vai pra C.