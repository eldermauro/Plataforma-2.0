import {
    conectaApi
} from '../js/conectaApi.js';

const container = document.querySelector('[data-main]');

const container_2 = document.querySelector('[data-main2]');


//Escolher processo a ser feito//

function mostraProcessos() {
    const processos = document.createElement('div')
    processos.className = 'processos-item'
    processos.innerHTML = `
    <h1 id="text-processos">Escolha o item a ser processado</h1>

    <div class="container-processos">
        <button class="escolhe-processos" id="cafeVerde" data-processo >café verde</button>
        <button class="escolhe-processos" id="pataua" data-processo >óleo de patauá</button>
        <button class="escolhe-processos" id="cacau" data-processo >manteiga de cacau</button>
        <button class="escolhe-processos" id="buriti" data-processo >óleo de buriti</button>
        <button class="escolhe-processos" id="açai" data-processo >óleo de açaí</button>
        <button class="escolhe-processos" id="citronela" data-processo >óleo essen. de cítronela</button>
        <button class="escolhe-processos" id="breu" data-processo >óleo de breu</button>
    </div>
    `
    return container.appendChild(processos)
}

mostraProcessos()

//preparando lote de entrada//

const escolha = document.querySelectorAll("[data-processo]");

for (let i = 0; i < escolha.length; i++) {
    escolha[i].addEventListener('click', (e) => {
        let escolhido = e.target.id
        listarColetas(escolhido)
    })
}

function constroiCard(id, data_entrada, materia_prima, extrativista, local, quantidade, valor_pago) {
    const coleta = document.createElement('div')
    coleta.className = "coleta-item";
    coleta.innerHTML = `
        <p class="text-item" id="id">${id}</p>
        <p class="text-item" id="data">${data_entrada}</p>
        <p class="text-item" id="materia-prima">${materia_prima}</p>
        <p class="text-item" id="extrativista">${extrativista}</p>
        <p class="text-item" id="local">${local}</p>
        <p class="text-item" id="quantidade">${quantidade}</p>
        <p class="text-item" id="preco"><span>${valor_pago}</span> R$</p>
        `

    return coleta;
}

async function listarColetas(escolhido) {
    const containerApi = await conectaApi.listaColetas()

    container.innerHTML = `
    <button id="encerra-lote">Finalizar lote de entrada</button>
    `

    if (escolhido == 'cafeVerde') {
        escolhido = 'cafe verde'
    };

    containerApi.forEach((element) => {
        if (element.materia_prima == escolhido && element.ativo != false) {
            container.appendChild(constroiCard(element.id, element.data_entrada, element.materia_prima, element.extrativista, element.local,
                element.quantidade, element.valor_pago))
        }
    });

    loteEntrada(escolhido)
}

//lista de coletas selecionadas//
function constroiListaColetasSelecionadas(id, data_entrada, materia_prima, extrativista, local, quantidade, valor_pago) {
    const listaColetas = document.createElement('ul')
    listaColetas.className = "listaColetas"
    listaColetas.innerHTML = `
        <li>${id}</li>
        <li>${data_entrada}</li>
        <li>${materia_prima}</li>
        <li>${extrativista}</li>
        <li>${local}</li>
        <li>${quantidade}</li>
        <li>${valor_pago}</li>
    `
    return listaColetas
}

function loteEntrada(escolhido) {
    const encerraLote = document.getElementById('encerra-lote')

    var lote_entrada = []

    const itensColeta = document.querySelectorAll('.coleta-item');

    for (let i = 0; i < itensColeta.length; i++) {
        itensColeta[i].addEventListener('click', () => {
        
            let array = itensColeta[i].innerText.split('\n')
        
            let id = array[0]
            let data_entrada = array[2]
            let materia_prima = array[4]
            let extrativista = array[6]
            let local = array[8]
            let quantidade = array[10]
            let valor_pago = array[12]

            container_2.appendChild(constroiListaColetasSelecionadas(id, data_entrada, materia_prima, extrativista, local, quantidade, valor_pago))
            lote_entrada.push(itensColeta[i].innerText.split('\n'))
        })
    }

    encerraLote.addEventListener('click', () => {
        let materia_prima = ''
        let extrativistas = ''
        let locais = ''
        let quantidade_total_lote = 0
        let valor_pago = 0

        for (let i = 0; i < lote_entrada.length; i++) {
            let array = lote_entrada[i];
            atualizaColetasSelecionadas(array[0])
        }

        for (let i = 0; i < lote_entrada.length; i++) {
            let array = lote_entrada[i];
            materia_prima = materia_prima + array[4] + ',';
        }

        for (let i = 0; i < lote_entrada.length; i++) {
            let array = lote_entrada[i];
            extrativistas = extrativistas + array[6] + ',';
        }

        for (let i = 0; i < lote_entrada.length; i++) {
            let array = lote_entrada[i];
            locais = locais + array[8] + ',';
        }

        for (let i = 0; i < lote_entrada.length; i++) {
            let array = lote_entrada[i];
            quantidade_total_lote = quantidade_total_lote + Number(array[10]);
        }

        for (let i = 0; i < lote_entrada.length; i++) {
            let array = lote_entrada[i];
            let num = array[12].replace(/[^\d.]/g, '');
            num = num.replace(/\.(?!\d)/g, '');
            num = parseFloat(num);
            valor_pago = valor_pago + num;
            console.log(valor_pago)
        }

        criaLoteEntrada(materia_prima, extrativistas, locais, quantidade_total_lote, valor_pago);
        encaminhaParaProcessos(escolhido)
    })
}

async function atualizaColetasSelecionadas(id){
    const atualiza = await fetch(`http://localhost:3000/coletas/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            ativo: false
        })
    });
    return atualiza;
}

async function criaLoteEntrada(materia_prima, extrativistas, locais, quantidade_total_lote, valor_pago) {
    const conexao = await fetch("http://localhost:3000/loteEntradas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            materia_prima: materia_prima,
            extrativista: extrativistas,
            local: locais,
            quantidade: quantidade_total_lote,
            valor_pago: valor_pago,
            ativo: true
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

function encaminhaParaProcessos(escolhido) {
    let link = escolhido;

    if (link == 'cacau') {
        link = 'manteigaDeCacau';
    } else if (link == 'cafe verde') {
        link = 'oleoDeCafeVerde';
    } else if (link == 'buriti') {
        link = 'oleoDeBuriti';
    } else if (link == 'pataua') {
        link = 'oleoDePataua';
    } else if (link == 'açai') {
        link = 'oleoDeAcai';
    } else if (link == 'citronela'){
        link = 'oleoDeCitronela'
    } else if (link == 'breu'){
        link = 'oleoDeBreu'
    }

    window.location.href = `./${link}/${link}.html`;
}