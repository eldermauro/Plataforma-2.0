const containerColetas = document.querySelector('[data-containerColetas]');
const containerFiltros = document.querySelector('[data-filtros]');

const btn_receberColeta = document.querySelector('[data-btnReceberColeta]');

btn_receberColeta.addEventListener('click', () => {
    const data_entrada = document.querySelector('[data-dataEntrada]').value;
    const materia_prima = document.querySelector('[data-materiaPrima]').value;
    const extrativista = document.querySelector('[data-extrativista]').value;
    const local = document.querySelector('[data-local]').value;
    const quantidade = document.querySelector('[data-quantidade]').value;
    const valor_pago = document.querySelector('[data-valorPago]').value;
    
    criaColeta(data_entrada, materia_prima, extrativista, local, quantidade, valor_pago);
    alert('coleta recebida com sucesso!');
    location.reload();
});

async function criaColeta(data_entrada, materia_prima, extrativista, local, quantidade, valor_pago) {
    const conexao = await fetch("http://localhost:3000/coletas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            data_entrada: data_entrada,
            materia_prima: materia_prima,
            extrativista: extrativista,
            local: local,
            quantidade: quantidade,
            valor_pago: valor_pago,
            ativo: true
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

/* -------------------------------------------- ocultar/mostrar form receber coleta ------------------------------------*/

const btn_mostrarColeta = document.querySelector('[data-btnMostrarColeta]');

btn_mostrarColeta.addEventListener('click', ()=>{
    const formColeta = document.querySelector('[data-formColeta]');
    formColeta.classList.toggle('inativo')
});

/* --------------------------------------------Exibir coletas recebidas -----------------------------------------*/

const btn_coletasRecebidas = document.querySelector('[data-btnColetasRecebidas]');

btn_coletasRecebidas.addEventListener('click', ()=>{
    containerFiltros.innerHTML = '';
    const materiasPrimas = ['açaí','andiroba','breu','buriti','cacau','café verde','castanha amêndoa','castanha semente','copaíba','cacau',
'citronela', 'cumaru','cupuaçu','látex','murumuru','pataua','pau rosa','pimenta de macaco','pitanga','priprioca','sangue de dragão','tucumã amêndoa',
'tucumã semente','ucuuba']
    containerColetas.innerHTML = "<h1>Selecione a materia prima</h1>";
    for(let i = 0; i < materiasPrimas.length; i++){
        containerColetas.appendChild(constroiCardMateriaPrima(materiasPrimas[i]));
    }
    selecionaMateriaPrima()
})

function constroiCardMateriaPrima(nome){
    const materiaPrima = document.createElement('div');
    materiaPrima.className = 'card-materiaPrima'
    materiaPrima.innerHTML=`
    <p id="${nome}">
        <img src="../assets/icons_novos/${nome}.svg" alt="logo-${nome}" class="icon">
        <span>${nome}</span>
    </p>
    `
    return materiaPrima;
}

function selecionaMateriaPrima(){
    const todasAsMateriasPrimas = document.querySelectorAll('.card-materiaPrima');
    for(let i = 0; i < todasAsMateriasPrimas.length; i++){
        todasAsMateriasPrimas[i].addEventListener('click',()=>{
            let materiaPrimaSelecionada = todasAsMateriasPrimas[i].children[0].children[1].innerText;
            mostraColetasRecebidas(materiaPrimaSelecionada)
        })
    }
}

function mostraColetasRecebidas(materia_prima){
    containerColetas.innerHTML = '';
    containerFiltros.appendChild(constroiFiltros());
    listarColetas(materia_prima)
}

function constroiFiltros(){
    const filtros = document.createElement('div');
    filtros.className = 'filtro';
    filtros.innerHTML = `
            <div>
                <form action="">
                    <label for="">Ordenar por:</label>
                    <label for="">Ordem alfabetica</label>
                    <input type="radio" name="nome" value="alfabetica">
                    <label for="">Data</label>
                    <input type="radio" name="nome" value="data">
                    <label for="">Quantidade Kg</label>
                    <input type="radio" name="nome" value="quantidade">
                    <label for="">Valor pago</label>
                    <input type="radio" name="nome" value="preco">
                </form>
            </div>
            <div>
                <input data-valorBusca type="text">
                <button data-busca>Buscar</button>
            </div>
    `
    return filtros;
}

function constroiCardColetas(nome, data, quantidade, preco){
    const coleta = document.createElement('div');
    coleta.className = 'coleta';
    coleta.innerHTML = `
            <div>
                <img src="#" alt="logo-lupa">
                <p>${nome}</p>
                <p>${data}</p>
                <p>${quantidade} kg</p>
                <p>R$ ${preco}</p>
            </div>
    `
    return coleta;
}

async function listarColetas(materia_prima) {
    const conexao = await fetch("http://localhost:3000/coletas");
    const conexaoConvertida = await conexao.json();

    let materiaPrimaFormatada = '';

    if(materia_prima == 'açaí'){
        materiaPrimaFormatada = 'acai';
    }else if(materia_prima == 'café verde'){
        materiaPrimaFormatada = 'cafe verde'
    }else if(materia_prima == 'castanha amêndoa'){
        materiaPrimaFormatada = 'castanha amendoa'
    }else if(materia_prima == 'copaíba'){
        materiaPrimaFormatada = 'copaiba'
    }else if(materia_prima == 'cupuaçu'){
        materiaPrimaFormatada = 'cupuacu'
    }else if( materia_prima == 'látex'){
        materiaPrimaFormatada = 'latex'
    }else if( materia_prima == 'patauá'){
        materiaPrimaFormatada = 'pataua'
    }else if(materia_prima == 'sangue de dragão'){
        materiaPrimaFormatada = 'sangue de dragao'
    }else if(materia_prima == 'tucumã amêndoa'){
        materiaPrimaFormatada = 'tucuma amendoa'
    }else if(materia_prima == 'tucumã semente'){
        materiaPrimaFormatada = 'tucuma semente'
    }else{
        materiaPrimaFormatada = materia_prima
    }

    conexaoConvertida.forEach((element) => {
        if (element.materia_prima == materiaPrimaFormatada) {
            containerColetas.appendChild(constroiCardColetas(element.extrativista, element.data_entrada, element.quantidade, element.valor_pago))
        }
    });

    iniciaBuscas()
}

/*---------------------------------------------- Filtros coletas recebidas -----------------------------------------*/

function iniciaBuscas(){
    const buscar = document.querySelector('[data-busca]');

    buscar.addEventListener('click',()=>{
        const palavra = document.querySelector('[data-valorBusca]').value;
        buscarApi(palavra)
    })
}

async function buscarApi(palavra){
    const conexao = await fetch(`http://localhost:3000/coletas`);
    const conexaoConvertida = await conexao.json();

    containerColetas.innerHTML = ''
    conexaoConvertida.forEach(element => {
        if(element.extrativista == palavra){
            containerColetas.appendChild(constroiCardColetas(element.extrativista, element.data_entrada, element.quantidade, element.valor_pago))
        }
    });
}




