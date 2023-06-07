const containerPocessosInacabados = document.querySelector('[data-processosInacabados]');

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
    <h1>Processos produtivos pendentes</h1>
    `
    for (let i = 0; i < dadosApi.length; i++) {
        if (dadosApi[i].Finalizado == false) {
            containerPocessosInacabados.append(await imprimeProcessos(dadosApi[i].id, dadosApi[i].processo))
        }
    }

    const escolha = document.querySelectorAll(".processo-div");

    for (let i = 0; i < escolha.length; i++) {
        escolha[i].addEventListener('click', (e) => {
            e.preventDefault()
            let processo = escolha[i].children[1].children[0].innerText;
            console.log(processo)

            if (processo == 'cacau') {
                processo = 'manteigaDeCacau';
            } else if (processo == 'cafe') {
                processo = 'oleoDeCafe';
            } else if (processo == 'buriti') {
                processo = 'oleoDeBuriti';
            } else if (processo == 'acai') {
                processo = 'oleoDeAcai';
            } else if (processo == 'citronela') {
                processo = 'oleoDeCitronela';
            } else if (processo == 'breu') {
                processo = 'oleoDeBreu';
            } else if (processo == 'cafe verde') {
                processo = 'oleoDeCafeVerde'
            }

            window.location.href = `processos/${processo}/${processo}.html`;
        })
    }
}

listarProcessos()