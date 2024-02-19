const ingreso = document.querySelector(".pesos");
const convertir = document.querySelector(".monedaExterna");
const buscar = document.querySelector(".btn");
const resultado = document.querySelector("#resultado");
const apiUrl = "https://mindicador.cl/api";



async function getMonedas(){
    const pesos = ingreso.value;
    const moneda = convertir.value;

    try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        let conversion; 

        if(moneda === 'dolar') {
            conversion =pesos / data.dolar.valor;
            mostrarResultado (conversion,'dolares');
        } else if (moneda === 'euro'){
            conversion = pesos / data.euro.valor;
            mostrarResultado(conversion,'euros');
        }else if (moneda === 'utm'){
            conversion = pesos / data.utm.valor;
            mostrarResultado(conversion,'utm');
        }else if (moneda === 'uf'){
            conversion = pesos / data.uf.valor;
            mostrarResultado(conversion,'uf');
        } else {moneda === 'nada'
            mostrarMensaje("Por favor seleccione una moneda.");
        }

    } catch(e){
        const errorSpan = document.querySelector("#errorSpan");
        errorSpan.innerHTML =`Algo salió mal! Error: ${e.message}`;
    }
    
    function mostrarResultado(conversion, moneda) {
    resultado.innerHTML = `${conversion.toFixed(2)} ${moneda}`;
    }

    function mostrarMensaje(mensaje) {
    resultado.innerHTML = mensaje;
    }
    
}

async function getAndCreateDataToChart(moneda){
    const fechaHoy = new Date();
    fechaHoy.setDate(fechaHoy.getDate() - 9);

    const anioHoy = fechaHoy.getFullYear();
    const fechaHoyString = `${anioHoy}`;

    const res = await fetch(`https://mindicador.cl/api/${moneda}/${fechaHoyString}`);
    const data = await res.json();

    const labels =data.serie.map(day => {
        const fecha = new Date(day.fecha);
        const dia = ("0" + fecha.getDate()).slice(-2);
        const mes = ("0" + (fecha.getMonth() + 1)).slice(-2);
        const anio = fecha.getFullYear();
        return `${dia}-${mes}-${anio}`;
    }).slice(0,10);

    const values = data.serie.map(day => day.valor).slice(0,10);

    const datasets = [
        {
            label: `Indicador a pesos chilenos: ${moneda}`,
            borderColor: "rgb(255, 99, 132)",
            data: values
        }
    ];

    return {labels, datasets};    
};

async function renderGrafica(){
    const moneda = convertir.value;
    const data = await getAndCreateDataToChart(moneda);
    const config = {
        type: "line",
        data: {
            labels: data.labels,
            datasets: data.datasets,
        },
    };

    const myChartCanvas = document.querySelector("#myChart").getContext('2d');

    if (window.myChart instanceof Chart){
        window.myChart.destroy();
    }

    window.myChart = new Chart(myChartCanvas, config);
}


buscar.addEventListener("click", function(){
    getMonedas();
    renderGrafica();
});
