function confirmar(){
    let numero1 = document.querySelector('#valor1').value;

    let numero2 = document.querySelector('#valor2').value;

    let numero3 = document.querySelector('#valor3').value;
    
    let password = document.querySelector('.resultado');

    let suma = numero1 + numero2 + numero3

    if (suma === '911') {
        password.innerHTML = 'password 1 correcto'; 
    } else if (suma === '714'){
        password.innerHTML = 'password 2 correcto';
    } else {
        password.innerHTML = 'password incorrecto';
    }
}

