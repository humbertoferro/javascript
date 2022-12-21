//ARRAYS
// let familia = [true, 45, 'Beto', 25];
// console.log(familia.length);
// console.log(familia[3]);


//FUNCTIONS
// function tem que ser um verbo + substantivo(transformarObjeto, alterarTamanho, resetaCor) () {};

// let corSite = "azul";
// function resetaCor(){
//     corSite = "";
// };
// console.log(corSite);
// resetaCor();
// console.log(corSite);
//nesse caso eu defini uma variável intitulando a cor do site, depois coloquei uma function vazia, no primeiro momento no console log ia estar escrito a cor azul, depois iria aparecer vazio, sem parâmetro.

// let corSite = "azul";
// function resetaCor(cor){
//     corSite = cor;
// };
// console.log(corSite);
// resetaCor("amarelo");
// console.log(corSite);
//nesse caso eu coloquei a entrada de dados, coloquei a variável "cor" para que fosse a cor que fosse alterada no site, e passei essa variável como argumento da minha função, que é o que vou fazer com os valores que coloquei na function. No primeiro console.log vai aparecer azul, mas quando eu chamar o reseta cor, vou poder acrescentar uma outra cor ao site, ai quando eu chamo outro console log, a cor vai ser amarelo.

// let corSite = "azul";
// function resetaCor(cor,tonalidade){
//     corSite = cor + tonalidade;
// };
// console.log(corSite);
// resetaCor("amarelo ","escuro");
// console.log(corSite);
//nesse caso eu adicionei mais um parâmetro dentro da function, aí vou concatenar a cor com a tonalidade. Aí quando eu chamar o segundo console.log vai aparecer mais de um parâmetro.

// let carrosGaragem = "1";
// function acrescentaCarros (quantidade, cor){
//     carrosGaragem = quantidade + cor;
// };
// console.log(carrosGaragem);
// acrescentaCarros(2, ' vermelhos');
// console.log(carrosGaragem);

// let propriedades = "3";
// function acrescentaCasas (quantidade, cor){    
//     propriedades = quantidade + cor;
// }; 
// console.log(propriedades);
// acrescentaCasas(7,' brancas');
// console.log(propriedades); 


//TIPOS DE FUNÇÕES:
//tem a que realiza uma tarefa e não devolve nada:
// function dizerNome(){
//     console.log('Beto');
// }
// dizerNome();
// //e tem a que devolce um valor:
// function MultiplicarPorDois(valor){
//     return valor* 2;
// }
// console.log(MultiplicarPorDois(3));
// //nesse caso acima eu já atribuo um número ao espaço que teria o valor, e eu já tinha dito que o valor que estaria aí dentro seria multiplicado por dois. Aí eu posso pegar esse valor da multiplicação e atriuir a uma variável.
// let resultado = MultiplicarPorDois(3);
// console.log(resultado);


// //  OPERADORES ARITIMÉTICOS
// let salario = 100;
// // + , - , * , /
// console.log(salario+salario);
// console.log(salario*5)
// //vai ter o incremento ++ e o decremento --;
// console.log(++ salario);
// console.log(-- salario);


// //OPERADOR DE ATRIBUIÇÃO:
// //é o uso do "=", exemplo:
// let valor = 100;
// console.log(valor);
// //posso simplificar também:
// valor += valor;
// console.log(valor);
// //é o mesmo que fazer: valor = valor + valor


// //OPERADORES DE IGUALDADE:
// //IGUALDE ESTRITA
// console.log (1 === 1);
// //o resultado vai ser true, já que quando coloco 3 iguais, é para analisar o valor e o tipo.
// console.log('1' === 1);
// //o resultado vai ser false, porque coloque o 1 como string.


// //IGUALDADE SOLTA
// console.log(1==1);
// //aqui ele compara apenas valores.
// console.log('1'==1);
// //o resultado vai ser true porque tá analisando apenas o número.


// //OPERADOR TERNÁRIO
// //exemplo: se o cliente tiver mais que 100 pontos ele é premium, se tiver menos de 100 é comum. Reproduzo isso dessa forma:
// let pontos = 100;
// let tipo = pontos > 100 ? 'premium': 'comum';//ou seja, coloco a expressão que quero que seja comparada, o que vai acontecer caso seja verdadeiro e o que vai acontecer caso seja falso.
// console.log(tipo);


// //OPERADORES LÓGICOS
// //(&&) "e", retorna verdadeiro, se as duas situações forem verdadeiras
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar);
// //nesse caso comparou as duas situações, caso alguma fosse false, o resultado seria falso;

// //(||)"ou", retorna true se algum for true.
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = false;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);

// //(!) "not", vai negar as situações;
// let candidatoRecusado = !podeAplicar; //o candidato sera recusado se não puder aplicar
// console.log(candidatoRecusado);

// //COMPARAÇÕES NÃO BOOLEANAS:
// //Falsy: são todos os valores que são: undefined, null, 0, false, '', NaN - not a number;
// //Truthy: tudo que não for falsy, por exemplo:
// false||'Beto'
// false||3 //vai retornar tanto Beto, quanto 3 já que não estão dentro da categoria de falsy
// false||3||'Beto' //retorna 3, já que o ou não considera o que vem depois do primeiro ou, só precisa encontrar algum valor antes e já para; //// outro exemplo:
// let corPersonalizada = 'Vermelho'; //se eu colocasse '', iria aparecer azul, já que  '' é falsy e o || vai reproduzir o primeiro valor verdadeiro.
// let corPadrao = 'Azul';
// let corPerfil = corPersonalizada || corPadrao;
// console.log(corPerfil);


// //TROCAR DE POSIÇÃO:
// let a = 'vermelho';
// let b = 'azul';

// let c = a;//vou ter que criar uma terceira variável para poder guardar o valor de a, pra poder conseguir inverter os valores.
// a = b;
// b = c;
// console.log (a);
// console.log (b);

// //CONDICIONAIS: if, else...
// //Se a hora estiver entre 06:00 até 12:00: Bom dia!
// //Se a hora estiver entre 12:00 até 18:00: Boa tarde!
// //Caso contrário: Boa noite!
// //if (condição){código a ser executado}
// //else if (outraCondição){código a ser executado}
// //else {código a ser executado}
// let hora = 19;
// if(hora > 06 && hora < 12){
//     console.log('Bom dia!')
// }
// else if (hora > 12 && hora < 18){
//     console.log('Boa tarde!')
// }
// else{
//     console.log('Boa noite!')
// }



// // CONDICIONAIS SWITCH..CASE: é para analisar uma sequência de fatos e o break é pra para caso encontre esse fato.
// let permissao = 'diretor'
// switch(permissao){
//     case 'comum':
//         console.log('Usuario comum');
//         break;
    
//     case 'gerente':
//         console.log ('Usuario gerente');
//         break;

//     case 'diretor':
//         console.log ('Usuario diretor');
//         break;

//     default:
//         console.log('Usuário não identificado');
// }


// //LAÇO/LOOP:

// //1. FOR
// for(let i = 0; i < 5; i++){
//     console.log('Estou aprendendo!', i)
// }
// //EXEMPLO REPRODUZINDO APENAS NÚMERO ÍMPARES:
// for(let i = 0; i < 5; i++){
//     if (i % 2 !== 0) //quando o resto da divisão de i for diferente de 0
//     {console.log(i)}
// }
 
// //2. WHILE LOOP
// let i = 5;
// while (i>=1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     //ou seja a variável i vai ser 5, enquanto o i, que vai ser 5, não for menor ou igual a 1, ou seja, não chegar até 1, vai existir o loop, nesse caso vai aparecer apenas os ímpares.
// }

//LAÇO DO.. WHILE (verifica primeiro e executa depois)
// let i = 0;
// do {
//     console.log('digitando', i); //esse é o comando que eu quero que seja executado
//     i++; //tenho que incrementar, se não vai ficar um looping infinito
// }while (i < 10); //ou seja, vai ser executado aquele comando acima, enquanto o i for menor que 10.

//LAÇO FOR..IN
// const pessoa = {
//     nome: 'Jhonatan',
//     idade: 25
// };
// //essa chave abaixo vem de key.value, exemplo: nome é o key e Jhonatan o value
// for (let chave in pessoa){
//     console.log(chave, pessoa['nome']);
// }

// const cores = ['Vermelho', 'Azul', 'Verde'];//embaixo eu colcoquei índice, porque vai estar relacionado a 0,1,2..., quando eu coloco cores e depois índice, vai aparecer o índice e depois as cores
// for (let indice in cores) {
//     console.log(indice, cores [indice])
// }


//LAÇO FOR..OF (é uma execução simplificada, do texto acima)
// const cores = ['Vermelho', 'Azul', 'Verde'];
// for(let cor of cores){
//     console.log(cor)
// }
// const moveis = ['sofá', 'mesa', 'televisão'];
// for(let casa of moveis){
//     console.log(casa)
// }

// SER EXIBIDO NA TELA O MAIOR ENTRE DOIS NÚMEROS:
// let a = 7;
//  let b = 7;
//  if (a>b){
//     console.log("o maior número é ", a)
//  }
//  else {
//     console.log ("o maior número é ", b)
//  }
// OU
// let valorMaior = max(10,10);
// console.log(valorMaior);

// function max(numero1,numero2){
//    return numero1>numero2 ? numero1:numero2; //significa:o numero 1 é maior que o numero 2, se sim apareça o numero1, se não apareça o numero 2
// }

// FIZZBUZZ: vai comparar alguns valores e ter um tipo de retorno, com base nos valores de entrada. O objetivo é, caso o número seja divisível por 3 aparecer: Fizz; por 5: buzz; por 3 e 5 fizzbuzz; nenhum dos dois 'não é número'.
let numero = 7;
if(numero%3==0 && numero%5==0){
   console.log('BuzzFizz')
}
else if (numero%3==0){
   console.log('Fizz')
}
else if (numero%5==0){
   console.log('Buzz')
}
else {
   console.log('Não é um numero')
}
//OU
const resultado = fizzBuzz(1);
console.log(resultado);
function fizzBuzz(entrada){
   if(typeof entrada !== 'number')
      return 'Não é um número';
   if (entrada%3 ===0)
      return 'Fizz';
   if (entrada%5===0)
      return 'Buzz';
   if (entrada%3 === 0 && entrada % 5 ===0)
   return 'FizzBuzz';
   return entrada;
}

