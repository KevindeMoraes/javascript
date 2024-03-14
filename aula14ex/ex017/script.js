function tabuada(){
    var num = document.getElementById('txtn')
    var numero = Number(num.value)
    var tab = document.getElementById('seltab')
    var res = document.querySelector('div#res')
    var r = 0
    if (num.value == 0){
        window.alert("mo bosta")
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }

        /*var n = numero
        res.innerHTML = `Sua tabuada: <br>`
        for (let c = 1;c < 10; c++){
            let item = document.createElement('option')
            r = n * c
            item.text = `${n} x ${c} = ${r}`
            tab.appendChild(item)
            
            //res.innerHTML += `${n} x ${c} = ${r}<br>`
        }*/
    }
    
    
}