precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

totalSpan = document.querySelector(".valor-total")
totalSpan.innerHTML = 0 

function aumentar(){
    let aumento = document.querySelector('.cantidad')
    let cuenta = Number(aumento.innerHTML)
    let suma = cuenta + 1
    aumento.innerHTML = suma
    totalSpan.innerHTML = precio * suma 
}

function restar(){
    let menos = document.querySelector('.cantidad')
    let cuenta = Number(menos.innerHTML)
    if (cuenta > 0) {
        let resta = cuenta - 1;
        menos.innerHTML = resta;
        totalSpan.innerHTML = precio * resta
    } 
}

