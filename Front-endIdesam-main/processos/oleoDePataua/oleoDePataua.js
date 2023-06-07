const selecaoPrimaria = document.querySelector('.selecao-primaria');
const secagem = document.querySelector('.secagem');
const quebraDeSementes = document.querySelector('.quebra-de-sementes');
const selecaoDasAmendoas = document.querySelector('.selecao-das-amendoas');
const trituracao = document.querySelector('.trituracao');
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
        case "btn-selecao-primaria":
            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');
            secagem.classList.remove('inativo');
            secagem.classList.add('ativo');

            quebraDeSementes.classList.remove('ativo');
            quebraDeSementes.classList.add('inativo');

            selecaoDasAmendoas.classList.remove('ativo');
            selecaoDasAmendoas.classList.add('inativo');

            trituracao.classList.remove('ativo');
            trituracao.classList.add('inativo');

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
            quebraDeSementes.classList.remove('inativo');
            quebraDeSementes.classList.add('ativo');

            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');

            selecaoDasAmendoas.classList.remove('ativo');
            selecaoDasAmendoas.classList.add('inativo');

            trituracao.classList.remove('ativo');
            trituracao.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-quebra-de-sementes":
            quebraDeSementes.classList.remove('ativo');
            quebraDeSementes.classList.add('inativo');
            selecaoDasAmendoas.classList.remove('inativo');
            selecaoDasAmendoas.classList.add('ativo');

            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            trituracao.classList.remove('ativo');
            trituracao.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-selecao-das-amendoas":
            selecaoDasAmendoas.classList.remove('ativo');
            selecaoDasAmendoas.classList.add('inativo');
            trituracao.classList.remove('inativo');
            trituracao.classList.add('ativo');

            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            quebraDeSementes.classList.remove('ativo');
            quebraDeSementes.classList.add('inativo');

            prensagem.classList.remove('ativo');
            prensagem.classList.add('inativo');

            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-trituracao":
            trituracao.classList.remove('ativo');
            trituracao.classList.add('inativo');
            prensagem.classList.remove('inativo');
            prensagem.classList.add('ativo');

            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            quebraDeSementes.classList.remove('ativo');
            quebraDeSementes.classList.add('inativo');

            selecaoDasAmendoas.classList.remove('ativo');
            selecaoDasAmendoas.classList.add('inativo');

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

            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            quebraDeSementes.classList.remove('ativo');
            quebraDeSementes.classList.add('inativo');

            selecaoDasAmendoas.classList.remove('ativo');
            selecaoDasAmendoas.classList.add('inativo');

            trituracao.classList.remove('ativo');
            trituracao.classList.add('inativo');

            embalagem.classList.remove('ativo');
            embalagem.classList.add('inativo');

            break;

        case "btn-filtragem":
            filtragem.classList.remove('ativo');
            filtragem.classList.add('inativo');
            embalagem.classList.remove('inativo');
            embalagem.classList.add('ativo');

            selecaoPrimaria.classList.remove('ativo');
            selecaoPrimaria.classList.add('inativo');

            secagem.classList.remove('ativo');
            secagem.classList.add('inativo');

            quebraDeSementes.classList.remove('ativo');
            quebraDeSementes.classList.add('inativo');

            selecaoDasAmendoas.classList.remove('ativo');
            selecaoDasAmendoas.classList.add('inativo');

            trituracao.classList.remove('ativo');
            trituracao.classList.add('inativo');

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
    const materia_prima = 'pataua';
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
        let result = element.materia_prima.indexOf("pataua")
        element.materia_prima = element.materia_prima.slice(result, result + 6)
        if (element.materia_prima == /* materia prima em questão */ 'pataua') {
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
    const inputQuantidade = document.querySelector('[data-selecaoPrimariaEntrada]');
    const inputId = document.querySelector('[data-selecaoPrimariaId]');
    inputQuantidade.value = quantidade;
    inputId.value = id;
}

//capturando valores dos inputs higienizacao e criando o processo na tabela processos do banco de dados//

const finalizarSelecaoPrimaria = document.querySelector('#btn-selecao-primaria');

finalizarSelecaoPrimaria.addEventListener('click', () => {
    const selecaoPrimariaQuantidade = document.querySelector('[data-selecaoPrimariaQuantidadeSelecionada]');
    const selecaoPrimariaId = document.querySelector('[data-selecaoPrimariaId]');

    const lote_de_entrada = selecaoPrimariaId.value;
    const finalizado = false;
    const quantidade_de_entrada = selecaoPrimariaQuantidade.value;

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
            Secagem: true,
            Despolpa: false,
            Refrigeracao: false,
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
            processo: 'oleo de pataua'
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    preencheSecagem(conexaoConvertida.id)

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

//preencher, finalizar secagem e atualizar tabela processos//

async function preencheSecagem(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`)
    const conexaoConvertida = await conexao.json();

    let secagemEntrada = document.querySelector('[data-secagemEntrada]');
    secagemEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    let secagemId = document.querySelector('[data-SecagemId]');
    secagemId.value = id;
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
            Higenizacao_selecao: false,
            Secagem: false,
            Quebra_de_sementes: true,
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
    let id = document.querySelector('[data-SecagemId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-secagemQuantidadeSeca').value;

    await atualizaProcesso(id, finalizado, quantidade);
    preencheQuebraDeSementes(id);
})

//preencher, finalizar quebra de sementes e atualizar tabela processos//

async function preencheQuebraDeSementes(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const quebraDeSementesEntrada = document.querySelector('[data-quebraDeSementesEntrada]');
    quebraDeSementesEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const quebraDeSementesId = document.querySelector('[data-quebraDeSementesId]');
    quebraDeSementesId.value = id;
}

async function atualizaProcessoQuebraDeSementes(id, finalizado, quantidade_de_entrada) {
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
            Selecao_de_amendoas: true,
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

const finalizarQuebraDeSementes = document.querySelector("#btn-quebra-de-sementes");

finalizarQuebraDeSementes.addEventListener('click', async () => {
    let id = document.querySelector('[data-quebraDeSementesId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-quebraDeSementesQuantidadeQuebrada').value;
    await atualizaProcessoQuebraDeSementes(id, finalizado, quantidade)
    preencheSelecaoDasAmendoas(id)
})

//preencher, finalizar selecao das amendoas e atualizar tabela processos//

async function preencheSelecaoDasAmendoas(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const selecaoDasAmendoasEntrada = document.querySelector('[data-selecaoDasAmendoasEntrada]');
    selecaoDasAmendoasEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const selecaoDasAmendoasId = document.querySelector('[data-selecaoDasAmendoasId]');
    selecaoDasAmendoasId.value = id;
}

async function atualizaProcessoSelecaoDasAmendoas(id, finalizado, quantidade_de_entrada) {
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
            Trituracao: true,
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

const finalizarSelecaoDasAmendoas = document.querySelector("#btn-selecao-das-amendoas");

finalizarSelecaoDasAmendoas.addEventListener('click', async () => {
    let id = document.querySelector('[data-selecaoDasAmendoasId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-selecaoDasAmendoasQuantidadeSeleta').value;
    await atualizaProcessoSelecaoDasAmendoas(id, finalizado, quantidade)
    preencheTrituracao(id)
})

//preencher, finalizar trituracao e atualizar tabela processos//

async function preencheTrituracao(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const trituracaoEntrada = document.querySelector('[data-trituracaoEntrada]');
    trituracaoEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const trituracaoId = document.querySelector('[data-TrituracaoId]');
    trituracaoId.value = id;
}

async function atualizaProcessoTrituracao(id, finalizado, quantidade_de_entrada) {
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
            Prensagem: true,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

const finalizarTrituracao = document.querySelector("#btn-trituracao");

finalizarTrituracao.addEventListener('click', async () => {
    let id = document.querySelector('[data-TrituracaoId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-trituracaoQuantidadeTriturada').value;
    await atualizaProcessoTrituracao(id, finalizado, quantidade)
    preenchePrensagem(id)
})

//preencher, finalizar prensagem e atualizar tabela processos//

async function preenchePrensagem(id) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();

    const prensagemEntrada = document.querySelector('[data-prensagemEntrada]');
    prensagemEntrada.value = conexaoConvertida.Quantidade_de_entrada;
    const prensagemId = document.querySelector('[data-PrensagemId]');
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
    let id = document.querySelector('[data-PrensagemId]').value;
    let finalizado = false;
    let quantidade = document.querySelector('[data-prensagemQuantidadePrensada').value;
    await atualizaProcessoPrensagem(id, finalizado, quantidade)
    preencheFiltragem(id);
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
            Filtragem: false,
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
            produto: 'oleo de pataua',
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

    let secagem = processoPendenteConvertido.Secagem
    let quebraDeSementes = processoPendenteConvertido.Quebra_de_sementes
    let selecaoDasAmendoas = processoPendenteConvertido.Selecao_de_amendoas
    let trituracao = processoPendenteConvertido.Trituracao
    let prensagem = processoPendenteConvertido.Prensagem
    let filtragem = processoPendenteConvertido.Filtragem
    let embalagem = processoPendenteConvertido.embalagem

    let escolhe = undefined;
    if (secagem == true) {
        escolhe = 'btn-selecao-primaria'
        let secagemEntrada = document.querySelector('[data-secagemEntrada]');
        secagemEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const secagemId = document.querySelector('[data-secagemId]');
        secagemId.value = id;
    } else if (quebraDeSementes == true) {
        escolhe = 'btn-secagem'
        let quebraDeSementesEntrada = document.querySelector('[data-quebraDeSementesEntrada]');
        quebraDeSementesEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const quebraDeSementesId = document.querySelector('[data-quebraDeSementesId]');
        quebraDeSementesId.value = id;
    } else if (selecaoDasAmendoas == true) {
        escolhe = 'btn-quebra-de-sementes'
        let selecaoDasAmendoasEntrada = document.querySelector('[data-selecaoDasAmendoasEntrada]');
        selecaoDasAmendoasEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const selecaoDasAmendoasId = document.querySelector('[data-selecaoDasAmendoasId]');
        selecaoDasAmendoasId.value = id;
    } else if (trituracao == true) {
        escolhe = 'btn-selecao-das-amendoas'
        let trituracaoEntrada = document.querySelector('[data-trituracaoEntrada]');
        trituracaoEntrada.value = processoPendenteConvertido.Quantidade_de_entrada;
        const trituracaoId = document.querySelector('[data-trituracaoId]');
        trituracaoId.value = id;
    } else if (prensagem == true) {
        escolhe = 'btn-trituracao'
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