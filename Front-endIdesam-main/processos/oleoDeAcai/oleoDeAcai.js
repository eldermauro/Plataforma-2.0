const higienizacao = document.querySelector('.higienizacao');
const refrigeracao = document.querySelector('.refrigeracao');
const secagem = document.querySelector('.secagem');
const despolpa = document.querySelector('.despolpa');
const prensagem = document.querySelector('.prensagem');
const filtragem = document.querySelector('.filtragem');
const embalagem = document.querySelector('.embalagem');

const btn = document.querySelectorAll('.btn');

let escolhe;
mudaForm(escolhe);

function mudaForm(escolhe) {
    if (escolhe == undefined) {
        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', (e) => {
                e.preventDefault()
                escolhe = e.target.id;
                mudaClasses(escolhe)
                container.classList.add('inativo')
            })
        }
    } else {
        mudaClasses(escolhe);
        container.classList.add('inativo');
    }
}

function mudaClasses(escolhe) {
    switch (escolhe) {
        case "btn-higienizacao":
            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');
            refrigeracao.classList.remove('inativo');
            refrigeracao.classList.add('ativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            despolpa.classList.remove('ativo');
            despolpa.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-refrigeracao":
            refrigeracao.classList.remove('ativo');
            refrigeracao.classList.add('inativo');
            secagem.classList.remove('inativo');
            secagem.classList.add('ativo');

            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');

            despolpa.classList.remove('ativo');
            despolpa.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-secagem":
            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');
            despolpa.classList.remove('inativo');
            despolpa.classList.add('ativo');

            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');

            refrigeracao.classList.remove('ativo');
            refrigeracao.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-despolpa":
            despolpa.classList.remove('ativo');
            despolpa.classList.add('inativo');
            prensagem.classList.remove('inativo');
            prensagem.classList.add('ativo');

            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');

            refrigeracao.classList.remove('ativo');
            refrigeracao.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-prensagem":
            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');
            filtragem.classList.remove('inativo');
            filtragem.classList.add('ativo');

            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');

            refrigeracao.classList.remove('ativo');
            refrigeracao.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            despolpa.classList.remove('ativo');
            despolpa.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-filtragem":
            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');
            embalagem.classList.remove('inativo');
            embalagem.classList.add('ativo');

            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');

            refrigeracao.classList.remove('ativo');
            refrigeracao.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            despolpa.classList.remove('ativo');
            despolpa.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            break;

        case "btn-embalagem":
            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');
            embalagem.classList.remove('inativo');
            embalagem.classList.add('ativo');

            higienizacao.classList.remove('ativo');
            higienizacao.classList.add('inativo');

            refrigeracao.classList.remove('ativo');
            refrigeracao.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            despolpa.classList.remove('ativo');
            despolpa.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            break
    }
}

//exibindo os lotes de entrada a serem selecionados//

const container = document.querySelector('[data-lote-selecao]');

async function listaLotesDeEntrada() {
    const conexao = await fetch("http://localhost:3000/loteEntradas")
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

function constroiCard(id, extrativista, local, quantidade) {
    //iniciando a materia prima em questão//
    const lote = document.createElement('div')
    const materia_prima = 'açai';
    lote.className = "loteItem";
    lote.innerHTML = `
        <p id="id">${id}</p>
        <p id="materia-prima">${materia_prima}</p>
        <p id="extrativista">${extrativista}</p>
        <p id="local">${local}</p>
        <p id="quantidade">${quantidade}</p>
        `
    return lote;
}

async function listarLotes() {
    const containerApi = await listaLotesDeEntrada()
    container.innerHTML = `
    <h1 id="titulo-lote">Escolha o lote que foi processado</h1>
    `
    containerApi.forEach((element) => {
        //tratatando a string para que apareça a materia-prima uma unica vez//
        let result = element.materia_prima.indexOf("açai")
        element.materia_prima = element.materia_prima.slice(result, result + 4)
        if (element.materia_prima == /* materia prima em questão */ 'açai') {
            container.appendChild(constroiCard(element.id, element.extrativista, element.local, element.quantidade))
        }
    });

    //selecionando lote de entrada que foi processado//
    const loteSelecionado = document.querySelectorAll('.loteItem');

    for (let i = 0; i < loteSelecionado.length; i++) {
        loteSelecionado[i].addEventListener('click', (e) => {
            let quantidade = loteSelecionado[i].children[4].innerText
            let id = loteSelecionado[i].children[0].innerText
            preencheInput(quantidade, id);
            //criar estrutura do lote final afim de armazenar lista de extrativistas e local//
            let extrativistas = loteSelecionado[i].children[2].innerText
            let locais = loteSelecionado[i].children[3].innerText
            let info = {
                extrativistas: extrativistas,
                locais: locais
            }
            localStorage.setItem('info', JSON.stringify(info));
        })
    }
}

listarLotes()

function preencheInput(quantidade, id) {
    const inputQuantidade = document.querySelector('[data-higienizacaoEntrada]');
    const inputId = document.querySelector('[data-higienizacaoId]');
    inputQuantidade.value = quantidade;
    inputId.value = id;
}

//capturando valores dos inputs higienizacao e criando o processo na tabela processos do banco de dados//

const finalizarHigienizacao = document.querySelector('#btn-higienizacao');

finalizarHigienizacao.addEventListener('click', () => {
    const higienizacao = document.querySelector('[data-higienizacaoQuantidadeHigienizada]');
    const higienizacaoId = document.querySelector('[data-higienizacaoId]');

    const lote_de_entrada = higienizacaoId.value;
    const finalizado = false;
    const quantidade_de_entrada = higienizacao.value;

    criaProcesso(lote_de_entrada, finalizado, quantidade_de_entrada);

    containerPocessosInacabados.classList.toggle('container-processos-pendentes-inativo');
})

async function criaProcesso(lote_de_entrada, finalizado, quantidade_de_entrada) {
    let infoString = localStorage.getItem('info');
    let infoObj = JSON.parse(infoString);
    let extrativistas = infoObj.extrativistas
    let locais = infoObj.locais

    const conexao = await fetch("http://localhost:3000/processos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Lote_de_entrada: lote_de_entrada,
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Higenizacao_selecao: false,
            Secagem: false,
            Despolpa: false,
            Refrigeracao: true,
            Destilacao: false,
            Quebra_de_sementes: false,
            Selecao_de_amendoas: false,
            Trituracao: false,
            Prensagem: false,
            Filtragem: false,
            Envase: false,
            selecao_primaria: false,
            extrativistas: extrativistas,
            locais: locais,
            processo: 'oleo de açai'
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    preencheRefrigeracao(conexaoConvertida.id)

    deletaLote(lote_de_entrada)

    localStorage.clear()

    return conexaoConvertida;
}

async function deletaLote(id) {
    const deleta = await fetch(`http://localhost:3000/loteEntradas/${id}`, {
        method: 'DELETE'
    })

    return deleta;
}

//preencher, finalizar refrigeracao e atualizar tabela processos//

async function preencheRefrigeracao(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`)
    const conexaoConvertida = await conexao.json();

    let refrigeracaoEntrada = document.querySelector('[data-refrigeracaoEntrada]');
    refrigeracaoEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    let refrigeracaoId = document.querySelector('[data-refrigeracaoId]');
    refrigeracaoId.value = id;
}

async function atualizaProcesso(id, finalizado, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Refrigeracao: false,
            Higenizacao_selecao: false,
            Secagem: true,
            Quebra_de_sementes: false,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarRefrigeracao = document.querySelector("#btn-refrigeracao");

finalizarRefrigeracao.addEventListener('click', async () => {
    let id = document.querySelector('[data-refrigeracaoId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-refrigeracaoQuantidadeRefrigerada').value;

    await atualizaProcesso(id, finalizado, quantidade);
    preencheSecagem(id);
})

//preencher, finalizar secagem e atualizar tabela processos//

async function preencheSecagem(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const secagemEntrada = document.querySelector('[data-secagemEntrada]');
    secagemEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const secagemId = document.querySelector('[data-secagemId]');
    secagemId.value = id;
}

async function atualizaProcessoSecagem(id, finalizado, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Higenizacao_selecao: false,
            Secagem: false,
            Despolpa: true,
            Refrigeracao: false,
            Destilacao: false,
            Quebra_de_sementes: false,
            Selecao_de_amendoas: false,
            Trituracao: false,
            Prensagem: false,
            Filtragem: false,
            Envase: false,
            selecao_primaria: false
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarSecagem = document.querySelector("#btn-secagem");

finalizarSecagem.addEventListener('click', async () => {
    let id = document.querySelector('[data-secagemId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-secagemQuantidadeSeca').value;
    await atualizaProcessoSecagem(id, finalizado, quantidade)
    preencheDespolpa(id)
})

//preencher, finalizar despolpa e atualizar tabela processos//

async function preencheDespolpa(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const despolpaEntrada = document.querySelector('[data-despolpaEntrada]');
    despolpaEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const despolpaId = document.querySelector('[data-despolpaId]');
    despolpaId.value = id;
}

async function atualizaProcessoDespolpa(id, finalizado, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Higenizacao_selecao: false,
            Secagem: false,
            Despolpa: false,
            Refrigeracao: false,
            Destilacao: false,
            Quebra_de_sementes: false,
            Selecao_de_amendoas: false,
            Trituracao: false,
            Prensagem: true,
            Filtragem: false,
            Envase: false,
            selecao_primaria: false
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarDespolpa = document.querySelector("#btn-despolpa");

finalizarDespolpa.addEventListener('click', async () => {
    let id = document.querySelector('[data-despolpaId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-despolpaQuantidadeDespolpa').value;
    await atualizaProcessoDespolpa(id, finalizado, quantidade)
    preenchePrensagem(id)
})

//preencher, finalizar Prensagem e atualizar tabela processos//

async function preenchePrensagem(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const prensagemEntrada = document.querySelector('[data-prensagemEntrada]');
    prensagemEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const prensagemId = document.querySelector('[data-prensagemId]');
    prensagemId.value = id;
}

async function atualizaProcessoPrensagem(id, finalizado, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Higenizacao_selecao: false,
            Secagem: false,
            Trituracao: false,
            Prensagem: false,
            Filtragem: true
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarPrensagem = document.querySelector("#btn-prensagem");

finalizarPrensagem.addEventListener('click', async () => {
    let id = document.querySelector('[data-prensagemId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-prensagemQuantidadePrensada').value;
    await atualizaProcessoPrensagem(id, finalizado, quantidade)
    preencheFiltragem(id)
})

//preencher, finalizar filtragem e atualizar tabela processos//

async function preencheFiltragem(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const filtragemEntrada = document.querySelector('[data-filtragemEntrada]');
    filtragemEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const filtragemId = document.querySelector('[data-FiltragemId]');
    filtragemId.value = id;
}

async function atualizaProcessoFiltragem(id, finalizado, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Higenizacao_selecao: false,
            Secagem: false,
            Trituracao: false,
            Prensagem: false,
            Filtragem: false
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarFiltragem = document.querySelector("#btn-filtragem");

finalizarFiltragem.addEventListener('click', async () => {
    let id = document.querySelector('[data-FiltragemId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-filtragemQuantidadeFiltrada').value;
    await atualizaProcessoFiltragem(id, finalizado, quantidade);
    preencheEmbalagem(id)
})

//preencher, finalizar embalagem e atualizar tabela processos//

async function preencheEmbalagem(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const embalagemEntrada = document.querySelector('[data-embalagemEntrada]');
    embalagemEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const embalagemId = document.querySelector('[data-embalagemId]');
    embalagemId.value = id;
}

async function atualizaProcessoEmbalagem(id, finalizado, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: finalizado,
            Quantidade_de_entrada: quantidade_de_entrada,
            Higenizacao_selecao: false,
            Secagem: false,
            Trituracao: false,
            Prensagem: false,
            Filtragem: false,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarEmbalagem = document.querySelector("#btn-embalagem");

finalizarEmbalagem.addEventListener('click', async () => {
    let id = document.querySelector('[data-embalagemId]').value;
    let finalizado = true;
    let quantidade = document.querySelector('[data-embalagemEntrada').value;
    await atualizaProcessoEmbalagem(id, finalizado, quantidade);
    preparaRotulo(id);
})

// criar lote final //

async function preparaRotulo(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    let quantidade = conexaoConvertida.Quantidade_de_entrada;
    let extrativistas = conexaoConvertida.extrativistas;
    let locais = conexaoConvertida.locais;
    criaLoteFinal(quantidade, extrativistas, locais);
}

async function criaLoteFinal(quantidade, extrativistas, locais) {
    const conexao = await fetch(`http://localhost:3000/loteFinal`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            produto: 'oleo de açai',
            quantidade: quantidade,
            extrativistas: extrativistas,
            local: locais
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    location.reload()

    return conexaoConvertida;
}


// Configurando processos pendentes //

async function configEntradaProcessosPendentes(id) {

    const processoPendente = await fetch(`http://localhost:3000/processos/${id}`)
    const processoPendenteConvertido = await processoPendente.json();

    let refrigeracao = processoPendenteConvertido.Refrigeracao
    let secagem = processoPendenteConvertido.Secagem
    let despolpa = processoPendenteConvertido.Despolpa
    let prensagem = processoPendenteConvertido.Prensagem
    let filtragem = processoPendenteConvertido.Filtragem
    let embalagem = processoPendenteConvertido.embalagem

    let escolhe = undefined;
    if (refrigeracao == true) {
        escolhe = 'btn-higienizacao'
        let refrigeracaoEntrada = document.querySelector('[data-refrigeracaoEntrada]');
        refrigeracaoEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const refrigeracaoId = document.querySelector('[data-refrigeracaoId]');
        refrigeracaoId.value = id;
    } else if (secagem == true) {
        escolhe = 'btn-refrigeracao'
        let secagemEntrada = document.querySelector('[data-secagemEntrada]');
        secagemEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const secagemId = document.querySelector('[data-secagemId]');
        secagemId.value = id;
    } else if (despolpa == true) {
        escolhe = 'btn-secagem'
        let despolpaEntrada = document.querySelector('[data-despolpaEntrada]');
        despolpaEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const despolpaId = document.querySelector('[data-despolpaId]');
        despolpaId.value = id;
    } else if (prensagem == true) {
        escolhe = 'btn-despolpa'
        let prensagemEntrada = document.querySelector('[data-prensagemEntrada]');
        prensagemEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const prensagemId = document.querySelector('[data-prensagemId]');
        prensagemId.value = id;
    } else if (filtragem == true) {
        escolhe = 'btn-prensagem'
        let filtragemEntrada = document.querySelector('[data-filtragemEntrada]');
        filtragemEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const filtragemId = document.querySelector('[data-filtragemId]');
        filtragemId.value = id;
    } else if (embalagem == true) {
        escolhe = 'btn-filtragem'
        let embalagemEntrada = document.querySelector('[data-embalagemEntrada]');
        embalagemEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const embalagemId = document.querySelector('[data-embalagemId]');
        embalagemId.value = id;
    }

    mudaForm(escolhe);

    containerPocessosInacabados.classList.toggle('container-processos-pendentes-inativo');
}

const containerPocessosInacabados = document.querySelector('[data-containerProcesso]');

async function pegaProcessos() {
    const processos = await fetch('http://localhost:3000/processos');
    const processosJson = await processos.json();

    return processosJson;
}

async function imprimeProcessos(id, processoNome) {
    const processo = document.createElement('div')
    processo.className = "processo-div";
    processo.innerHTML = `
        <p class="processo-item">id:<span>${id}</span></p>
        <p class="processo-item">Processo:<span>${processoNome}</span></p>
        <p class="processo-item">Situação:<span>pendente</span></p>
    `

    return processo;
}

async function listarProcessos() {
    const dadosApi = await pegaProcessos()
    containerPocessosInacabados.innerHTML = `
    <h1 id="encerra-lote">Processos pendentes</h1>
    `
    for (let i = 0; i < dadosApi.length; i++) {
        if (dadosApi[i].Finalizado == false) {
            containerPocessosInacabados.append(await imprimeProcessos(dadosApi[i].id, dadosApi[i].processo))
        }
    }

    const escolha = document.querySelectorAll(".processo-div");

    for (let i = 0; i < escolha.length; i++) {
        escolha[i].addEventListener('click', () => {
            let id = escolha[i].children[0].children[0].innerText;
            let processo = escolha[i].children[1].children[0].innerText;

            configEntradaProcessosPendentes(id)
        })
    }
}

listarProcessos()