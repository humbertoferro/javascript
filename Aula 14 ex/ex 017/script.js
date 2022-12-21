function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){//senão tiver nenhum valor dentro da caixa, vai aparecer a mensagem abaixo{
        window.alert('Por favor, ditite um número!')
        
    } else {
        let n = Number(num.value)
        let c = 1 //o contador começa com 1, eu posso usar while ou for, nesse caso vou usar while(usado em repetição também)
        tab.innerHTML=''//ou seja, antes de começar, eu limpo a tabuada
        while (c<=10)//enquanto o contador for menor ou igual a 10...
         {
            let item = document.createElement('option')//option, porque dentro do select no html precisa de elemento option. O item text é a parte de dentro do option
            item.text = `${n} x ${c} = ${num*c}`
            tab.appendChild(item)
        }

        
    }


    
    
}