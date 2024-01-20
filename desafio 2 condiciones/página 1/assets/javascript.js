function agregarborde() {
    let borde = document.querySelector('#imagen');
    
    if (borde.classList.contains('borderojo')){
        borde.classList.remove('borderojo')
    } else {
        borde.classList.add('borderojo');

    }
}