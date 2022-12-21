function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() //é a data atual
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    //BOM DIA!
    img.src= 'manha.png.png'
    document.body.style.background = '#7e7090'
}else if(hora>=12 && hora < 18){
    //BOA TARDE!
    img.src= 'tarde.png.png'
    document.body.style.background = '#fec13b'
}else{
    //BOA NOITE!
    img.src= 'noite.png.png'
    document.body.style.background = '#115977'
}
}
