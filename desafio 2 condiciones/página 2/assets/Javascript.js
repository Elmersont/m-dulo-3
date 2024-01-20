function suma(){
    let leon = document.querySelector('#leon').value ;

    let perro = document.querySelector('#perro').value ;

    let rinoceronte = document.querySelector('#rinoceronte').value ;

    let suma = Number(leon) + Number(perro) + Number(rinoceronte);

    if ( suma <= 10) {

        stickers = suma
    } else {

        stickers = 'demasiados'
    }
}

function verificar(){

    let texto = document.querySelector ('.cantidadStickers');

    texto.innerHTML = stickers
}