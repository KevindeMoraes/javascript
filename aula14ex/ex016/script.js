function contar(){
    
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i == 0 || f == 0 ){
        res.innerHTML = 'Não foi possivel contar!'
        
    }    
    if (p == 0) {
        window.alert("Passo inválido! Considerando PASSO 1")
        p = 1
        res.innerHTML = 'Vai começar: '
                
                if (i < f){
                    // contagem crescente
                    for (let c = i; c <= f; c += p ){
                        res.innerHTML += ` ${c} \u{1F449} `
                    }
                    res.innerHTML += `\u{1F3C1}`
                } else {
                    //contagem regressiva
                    for (let c = i; c >= f; c -= p ){
                        res.innerHTML += ` ${c} \u{1F449} `
                    }
                    res.innerHTML += `\u{1F3C1}`
                }   
        
    } else {
        res.innerHTML = 'Vai começar: '
                
                if (i < f){
                    // contagem crescente
                    for (let c = i; c <= f; c += p ){
                        res.innerHTML += ` ${c} \u{1F449} `
                    }
                    res.innerHTML += `\u{1F3C1}`
                } else {
                    //contagem regressiva
                    for (let c = i; c >= f; c -= p ){
                        res.innerHTML += ` ${c} \u{1F449} `
                    }
                    res.innerHTML += `\u{1F3C1}`
                }
    }
    
}
    

