function verificar(){
var data = new Date()
var ano = data.getFullYear()//Esse getFullYear é para mostrar a data completa com 4 digitos
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || Number(fano.value) > ano){//ou seja, se o valor do ano for zero ou maior que o ano atual...
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex') //botei por tag name, já que o id era igual 
    var idade = ano - Number (fano.value) // o ano atual menos o valor digitado em fano
    var genero = ''
    //abaixo vou criar uma imagem dinamicamente e logo após vou atribuir um id pra essa foto:
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) //se oq tiver marcado foi a 1ª bolinha...
{
    gênero = 'homem'
    if (idade>=0 && idade<10){
        //criança
        img.setAttribute('src','menininho.png')
    } else if (idade >= 10 && idade<21){
        //jovem
        img.setAttribute('src','menino.png')
    }else if (idade < 50){
        //adulto
        img.setAttribute('src','homem.png')
    } else {
        //idoso
        img.setAttribute('src','senhor.png')
    }
} else if (fsex[1].checked){
    gênero = 'mulher'
    if (idade>=0 && idade<10){
        //criança
        img.setAttribute('src','menininha.png')
    } else if (idade >= 10 && idade<21){
        //jovem
        img.setAttribute('src','menina.png')
    }else if (idade < 50){
        //adulto
        img.setAttribute('src','mulher.png')
    } else {
        //idoso
        img.setAttribute('src','senhora.png')
    }
}
res.style.textAlign = 'center'//pra centralizar ao centro usando javascript
res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos. 
`
res.appendChild(img) //adicionar o elemento img
}
}