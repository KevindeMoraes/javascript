
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO], verifique os dados e tente novamente!')
    } else {
        var fsex =window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade >=10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade >=21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade >=10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade >=21 && idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'iudosomulher.png')
            }
        }
        res.style
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}