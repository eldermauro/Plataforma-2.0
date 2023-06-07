import { forms } from "./forms.js";


async function criaProcesso(iniciaProcesso, lote_de_entrada, finalizado, quantidade_de_entrada, extrativistas, locais, materiaPrima) {
    if (iniciaProcesso == 'higienizacao') {
        const conexao = await fetch("http://localhost:3000/processos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Lote_de_entrada: lote_de_entrada,
                Finalizado: finalizado,
                Quantidade_de_entrada: quantidade_de_entrada,
                Higenizacao_selecao: true,
                Secagem: false,
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
                processo: materiaPrima,
                despesas: 0
            })
        });
        if (!conexao.ok) {
            throw new Error("Não foi possível enviar")
        }
        const conexaoConvertida = await conexao.json();

        atualizaLote(lote_de_entrada)

        return conexaoConvertida;
    } else {
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
                Refrigeracao: false,
                Destilacao: false,
                Quebra_de_sementes: false,
                Selecao_de_amendoas: false,
                Trituracao: false,
                Prensagem: false,
                Filtragem: false,
                Envase: false,
                selecao_primaria: true,
                extrativistas: extrativistas,
                locais: locais,
                processo: materiaPrima,
                despesas: 0
            })
        });
        if (!conexao.ok) {
            throw new Error("Não foi possível enviar")
        }
        const conexaoConvertida = await conexao.json();
        atualizaLote(lote_de_entrada)
    }
    let idProcesso = conexaoConvertida.id;
    return conexaoConvertida;
}

async function atualizaLote(id){
    const atualiza = await fetch(`http://localhost:3000/loteEntradas/${id}`, {
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


//------------------------------------------------ Listar Processos-----------------------------------------------------------//

async function listarProcessosPendentes(materiaPrima) {
    const conexao = await fetch("http://localhost:3000/processos")
    const conexaoConvertida = await conexao.json();
    const container = document.querySelector('[data-containerProcessos]');
    container.innerHTML = `
        <h1 id="titulo-lote">Escolha o processo a ser continuado</h1>
    `
    conexaoConvertida.forEach((element) => {
        if (element.processo == /* materia prima em questão */ materiaPrima && element.Finalizado == false) {
            container.appendChild(constroiCard(element.id, element.processo, element.Quantidade_de_entrada))
        }
    });

    const processosPendentes = document.querySelectorAll('.processosPendentes');
    const btnsContinuar = document.querySelectorAll('[data-btnContinuar]');
    for (let i = 0; i < btnsContinuar.length; i++) {
        btnsContinuar[i].addEventListener('click', () => {
            let id = processosPendentes[i].children[0].children[0].innerText
            let container = document.querySelector('[data-containerProcessos]');
            container.innerHTML = ''
            encaminhaProcessosPendentes(id);
            preencheInputEncaminhado(id);
        })
    }

    const divir = document.querySelectorAll('[data-btnDividirProcesso]');
    for (let i = 0; i < divir.length; i++) {
        divir[i].addEventListener('click', (e) => {
            e.preventDefault()
            let id = processosPendentes[i].children[0].children[0].innerText;
            CriaCardDivisao(id, materiaPrima)
        })
    }
}

function constroiCard(id, processo, quantidade) {
    const processoPendente = document.createElement('div')
    processoPendente.className = "processosPendentes";
    processoPendente.innerHTML = `
        <p id="id">Id:<span>${id}</span></p>
        <p id="processo">Materia em processo:<span>${processo}</span></p>
        <p id="quantidade"><span>${quantidade}</span> KG</p>
        <button data-btnContinuar>Continuar processo</button>
        <button data-btnDividirProcesso>Dividir quantidade</button>
        `
    return processoPendente;
}


function CriaCardDivisao(id, materiaPrima) {
    let container = document.querySelector('[data-containerProcessos]');
    container.innerHTML = `
    <div>
        <label for="">Quanto gostaria de processar?</label>
        <input data-quantidadeProcesso type="number">
            
        <button data-btnDividir>Processar</button>
    </div>
    `
    let Dividir = document.querySelector('[data-btnDividir]');
    Dividir.addEventListener('click', () => {
        let valor = document.querySelector('[data-quantidadeProcesso]').value;
        criaProcessoPendente(id, valor, materiaPrima);
    })
}

async function criaProcessoPendente(lote_de_entrada, valor, materiaPrima) {
    let dadosApi = await fetch(`http://localhost:3000/processos/${lote_de_entrada}`);
    let dadosConvertidos = await dadosApi.json();
    let extrativistas = dadosConvertidos.extrativista;
    let locais = dadosConvertidos.local;
    let quantidadeAtualLoteAntigo = dadosConvertidos.Quantidade_de_entrada - valor;
    lote_de_entrada = dadosConvertidos.Lote_de_entrada;
    await atualizaProcesso(lote_de_entrada, quantidadeAtualLoteAntigo);

    //replicando os processos que a maria prima ja sofreu//
    let higienizacao = dadosConvertidos.Higenizacao_selecao;
    let secagem = dadosConvertidos.Secagem;
    let despolpa = dadosConvertidos.Despolpa;
    let refrigeracao = dadosConvertidos.Refrigeracao;
    let destilacao = dadosConvertidos.Destilacao;
    let quebra_de_sementes = dadosConvertidos.Quebra_de_sementes;
    let selecao_de_amendoas = dadosConvertidos.Selecao_de_amendoas;
    let trituracao = dadosConvertidos.Trituracao;
    let prensagem = dadosConvertidos.Prensagem;
    let filtragem = dadosConvertidos.Filtragem;
    let envase = dadosConvertidos.Envase;
    let selecao_primaria = dadosConvertidos.selecao_primaria;
    let despesas = dadosConvertidos.despesas;

    const conexao = await fetch("http://localhost:3000/processos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Lote_de_entrada: lote_de_entrada,
            Finalizado: false,
            Quantidade_de_entrada: valor,
            Higenizacao_selecao: higienizacao,
            Secagem: secagem,
            Despolpa: despolpa,
            Refrigeracao: refrigeracao,
            Destilacao: destilacao,
            Quebra_de_sementes: quebra_de_sementes,
            Selecao_de_amendoas: selecao_de_amendoas,
            Trituracao: trituracao,
            Prensagem: prensagem,
            Filtragem: filtragem,
            Envase: envase,
            selecao_primaria: selecao_primaria,
            extrativistas: extrativistas,
            locais: locais,
            processo: materiaPrima,
            despesas: despesas
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function atualizaProcesso(id, quantidade_de_entrada) {
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Quantidade_de_entrada: quantidade_de_entrada,
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();
    location.reload()

    return conexaoConvertida;
}

//-------------------------------------------------encaminha processos pendentes-----------------------------------------//

async function encaminhaProcessosPendentes(id) {
    let pendente = await verificaProcesso(id)
    switch (pendente) {
        case 'higienizacao':
            return forms.FormHigienizacao()
            break;
        case 'secagem':
            return forms.FormSecagem()
            break;
        case 'despolpa':
            return forms.FormDespolpa()
            break;
        case 'destilacao':
            return forms.FormDestilacao()
            break;
        case 'quebra de sementes':
            return forms.FormQuebraDeSementes()
            break;
        case 'selecao das amendoas':
            return forms.FormSelecaoDasSementes()
            break;
        case 'trituracao':
            return forms.FormTrituracao()
            break;
        case 'prensagem':
            return forms.FormPrensagem()
            break;
        case 'filtragem':
            return forms.FormFiltragem()
            break;
        case 'selecao primaria':
            return forms.FormSelecaoPrimaria()
            break;
        default:
            return alert('error!')
    }
}

async function verificaProcesso(id) {
    let dadosApi = await fetch(`http://localhost:3000/processos/${id}`);
    let dadosConvertidos = await dadosApi.json();
    let processoPendente = '';
    if (dadosConvertidos.Higenizacao_selecao == true) {
        processoPendente = 'higienizacao'
    } else if (dadosConvertidos.Secagem == true) {
        processoPendente = 'secagem'
    } else if (dadosConvertidos.Despolpa == true) {
        processoPendente = 'despolpa'
    } else if (dadosConvertidos.Refrigeracao == true) {
        processoPendente = 'refrigeracao'
    } else if (dadosConvertidos.Destilacao == true) {
        processoPendente = 'destilacao'
    } else if (dadosConvertidos.Quebra_de_sementes == true) {
        processoPendente = 'quebra de sementes'
    } else if (dadosConvertidos.Selecao_de_amendoas == true) {
        processoPendente = 'selecao das amendoas'
    } else if (dadosConvertidos.Trituracao == true) {
        processoPendente = 'trituracao'
    } else if (dadosConvertidos.Prensagem == true) {
        processoPendente = 'prensagem'
    } else if (dadosConvertidos.Filtragem == true) {
        processoPendente = 'filtragem'
    } else if (dadosConvertidos.Envase == true) {
        processoPendente = 'envase'
    } else if (dadosConvertidos.selecao_primaria == true) {
        processoPendente = 'selecao primaria'
    }
    return processoPendente;
}

async function preencheInputEncaminhado(id){
    let dadosApi = await fetch(`http://localhost:3000/processos/${id}`);
    let dadosConvertidos = await dadosApi.json();
    const quantidade_de_entrada = document.querySelector('[data-quantidadeDeEntrada]');
    document.querySelector('[data-id]').value = id;
    quantidade_de_entrada.value = dadosConvertidos.Quantidade_de_entrada;
}

//--------------------------------------------  FINALIZAR PROCESSO  ----------------------------------------------------//
async function gatosEnergia(id){
    let energiaTotal = 0;
    let dadosApi = await fetch(`http://localhost:3000/gastosProdutivos`);
    const dadosConvertidos = await dadosApi.json();
    dadosConvertidos.forEach(element => {
        if(element.processo_id == id){
            energiaTotal = energiaTotal + Number(element.energia);
        }
    })
    return energiaTotal;
}

async function gastosMaoDeObra(id){
    let maoDeObraTotal = 0;
    let dadosApi = await fetch(`http://localhost:3000/gastosProdutivos`);
    const dadosConvertidos = await dadosApi.json();
    dadosConvertidos.forEach(element => {
        if(element.processo_id == id){
            maoDeObraTotal = maoDeObraTotal + Number(element.mao_de_obra);
        }
    })
    return maoDeObraTotal;
}

async function gastosDepreciacao(id){
    let depreciacaoTotal = 0;
    let dadosApi = await fetch(`http://localhost:3000/gastosProdutivos`);
    const dadosConvertidos = await dadosApi.json();
    dadosConvertidos.forEach(element => {
        if(element.processo_id == id){
            depreciacaoTotal = depreciacaoTotal + Number(element.depreciacao);
        }
    })
    return depreciacaoTotal;
}


async function gastosmateriaPrima(id) {
    let dadosApi = await fetch('http://localhost:3000/gastosProdutivos');
    const dadosConvertidos = await dadosApi.json();
    
    const elementoEncontrado = dadosConvertidos.find(element => element.processo_id == id);
    
    if (elementoEncontrado) {
        return elementoEncontrado.valor_materia_prima;
    }
    
    // Retorne um valor padrão ou lide com o caso em que o elemento não é encontrado
    // Por exemplo, você pode retornar null ou lançar um erro.
    return null;
}

async function gastosInsumos(nomeEmbalagem, quantidade) {
    let embalagemTotal = 0;
    let dadosApi = await fetch('http://localhost:3000/embalagens');
    const dadosConvertidos = await dadosApi.json();
    dadosConvertidos.forEach(element => {
        if (element.nome == nomeEmbalagem){
            embalagemTotal = Number(element.valor);
        }
    });
    embalagemTotal = embalagemTotal * Number(quantidade);
    return embalagemTotal;
}


async function FormEmbalagem(id){
    let energia = await gatosEnergia(id);
    energia = Number(energia)
    energia = energia.toFixed(2)
    let mao_de_obra = await gastosMaoDeObra(id);
    mao_de_obra = Number(mao_de_obra)
    mao_de_obra = mao_de_obra.toFixed(2)
    let materia_prima = await gastosmateriaPrima(id);
    materia_prima = Number(materia_prima)
    materia_prima = materia_prima.toFixed(2)
    let depreciacao = await gastosDepreciacao(id);
    depreciacao = Number(depreciacao)
    depreciacao = depreciacao.toFixed(2)
    let custo_total = somaGastos(energia, mao_de_obra, materia_prima, depreciacao);
    let custo_unitario = await gastosUnitario(id, custo_total);

    const container = document.querySelector('[data-container]');
    container.innerHTML = ``
    const form_embalagem = document.createElement('div');
    form_embalagem.className = 'div-embalagem';
    form_embalagem.innerHTML = `
    <form action="" class="embalagem inativo">
        <fieldset>
            <input style="display: none;" data-id data-embalagemId type="number" style="display: none;">
            <input data-embalagemEntrada type="number" style="display: none;">
            <legend>Embalagem</legend>
            <label for="">Nome</label>
            <input data-embalagemNome type="text">
            <label for="">Tamanho</label>
            <input data-embalagemTamanho type="number">
            <label for="">Quantidade</label>
            <input data-embalagemQuantidade type="number">
        </fieldset>
        <button data-btnFinalizar class="btn" id="btn-embalagem">Finalizar processo</button>
    </form>
    <div>
        <p>Processo:<span>${id}</span></p>
        <p>Gastos com energia:<span>${energia} R$</span></p>
        <p>Custos mão de obra:<span>${mao_de_obra} R$</span></p>
        <p>Valor da matéria-prima:<span>${materia_prima} R$</span></p>
        <p>Valor depreciação das máquinas:<span>${depreciacao} R$</span></p>
        <p>Custo total:<span>${custo_total} R$</span></p>
        <p>Custo unitário:<span>${custo_unitario} L</span></p>
    </div>
    `
    container.appendChild(form_embalagem);
    const btn = document.querySelector('[data-btnFinalizar]');
    btn.addEventListener('click', async(e)=>{
        e.preventDefault()
        let quantidade = document.querySelector('[data-embalagemQuantidade]').value;
        let nomeEmbalagem = document.querySelector('[data-embalagemNome]').value;
        let insumos = await gastosInsumos(nomeEmbalagem, quantidade);
        await criaValorProcessos(id, energia, mao_de_obra, materia_prima, depreciacao, insumos, 'embalagem', 0);
        //let etapa = e.target.id
        await filtraInfo(id)
    })
}

function somaGastos(energia, mao_de_obra, materia_prima, depreciacao){
    let total = Number(energia) + Number(mao_de_obra) + Number(materia_prima) + Number(depreciacao);
    return total;
}

async function gastosUnitario(id, custo_total){
    const conexao = await fetch(`http://localhost:3000/processos/${id}`);
    const conexaoConvertida = await conexao.json();
    let producao = conexaoConvertida.Quantidade_de_entrada;
    let unitario = Number(custo_total) / Number(producao);
    return unitario;
}

async function criaValorProcessos(id, energia, mao_de_obra, valor_materia_prima, depreciacao, insumos, processo, horas_duracao){
    const conexao = await fetch("http://localhost:3000/gastosProdutivos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                processo_id: id,
                energia: energia,
                mao_de_obra: mao_de_obra,
                valor_materia_prima: valor_materia_prima,
                depreciacao: depreciacao,
                insumos: insumos,
                processo: processo,
                horas_duracao: horas_duracao
            })
        });
        if (!conexao.ok) {
            throw new Error("Não foi possível enviar")
        }
        const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
}

async function filtraInfo(id){
    const processos = await fetch(`http://localhost:3000/processos/${id}`);
    const processosJ = await processos.json();
    let quantidade = processosJ.Quantidade_de_entrada;
    let extrativistas = processosJ.extrativistas;
    let locais = processosJ.locais;
    let materiaPrima = processosJ.processo;
    await criaLoteFinal(quantidade, extrativistas, locais, materiaPrima);
    await finalizaProcesso(id);
}

async function criaLoteFinal(quantidade, extrativistas, locais, materiaPrima) {
    const conexao = await fetch(`http://localhost:3000/loteFinal`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            produto: materiaPrima,
            quantidade: quantidade,
            extrativistas: extrativistas,
            local: locais
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function finalizaProcesso(id){
    const conexao = await fetch(`http://localhost:3000/processos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            Finalizado: true,
        })
    });
    if (!conexao.ok){
        throw new Error("Não foi possível enviar")
    }
    const conexaoConvertida = await conexao.json();
    alert(`O processo ${id} foi finalizado`)
    location.reload()
    return conexaoConvertida;
}

//-----------------------------------------------   exports  ----------------------------------------//


export const process = {
    criaProcesso,
    listarProcessosPendentes,
    FormEmbalagem,
}