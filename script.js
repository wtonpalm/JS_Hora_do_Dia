function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //Bom Dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#fce2c8'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#7b4136'
    } else {
        //Boa Noite!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1d3746'
    }
}