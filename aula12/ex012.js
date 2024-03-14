var agora = new Date()
var metade = new Date()
var hora = agora.getHours()
var min = metade.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if (hora >= 5 && hora < 12){
    console.log('Bom Dia!')
} else if(hora <= 18 && hora >= 12){
    console.log('Boa Tarde!')
} else if(hora < 24 && hora > 18){
    console.log('Boa Noite!')
} else if(hora < 5) {
    console.log('Boa Madrugada!')
}