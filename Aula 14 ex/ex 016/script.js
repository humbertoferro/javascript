function contar () /*toda vez que clicar em contar, vai retomar essa função aqui no javascript */{
    /*vou criar as variáveis que podem ser escritas com var ou let e colocar os valores dos id de cada um usado no html*/
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') /*Que é pra mudar o "preparando a contagem quando eu botar o valor"*/

    if (ini.value.length == 0/*length é comprimento, essa expressão significa= quantas letras tem dentro*/ || /*ou*/fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!') /*se o inicio estiver vazio ou o fim estiver vazio ou o passo estiver vazio, escreva a frase ali em cima*/
    }else{
        /*alert('Tudo OK!') coloquei o que está entre parênteses para testar*/
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if( p<=0 ){
            window.alert(`Passo inválido! Considerando PASSO 1`) 
            p = 1
        }/*ou seja, converti os valores que estão dentro das caixas, no lugar de texto, virou número*/
        /*podemos realizar a contagem usando while, do while e for, cada espaço é importante*/
        if (i < f){ for (let c = i; c <= f; c += p)/*a variável c é o contador, o contador vai começar o início e enquanto o contador for menor ou igual ao fim, o contador vai receber ele mais o passo, lembrando que o contador são os números que apareceção no fim*/{
            res.innerHTML += `${c}\u{1F449}`
            /*pra colocar emoji vai no unicode emojilist, aí copio o código e coloco da forma que tá aqui em cima*/ 
        }
        
        } else {/*agora vou fazer o código de contar do menor para o maior código*/
        for(let c = i; c >= f; c -= p){
        res.innerHTML += `${c}\u{1F449}`
            }
            

        }
          
        res.innerHTML += `\u{1F3C1}` //posso deixar fora, já que vai abranger os dois
    
    }

}