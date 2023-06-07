async function listaColetas(){
    const conexao = await fetch("http://localhost:3000/coletas")
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida
}

export const conectaApi = {
    listaColetas,
}

