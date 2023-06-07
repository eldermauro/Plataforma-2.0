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

async function listarColetas() {
    const conexao = await fetch("http://localhost:3000/coletas");
    const conexaoConvertida = await conexao.json();
    const container = document.querySelector('[data-container]')
    conexaoConvertida.forEach((element) => {
        container.appendChild(constroiCardColetas(element.extrativista, element.data_entrada, element.quantidade, element.valor_pago))
    });
}

export const funcao = {
    listarColetas,
}