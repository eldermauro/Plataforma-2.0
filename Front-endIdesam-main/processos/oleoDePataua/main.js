import { lotes } from '../../js/loteDeEntrada.js';
import { forms } from '../../js/forms.js';
import { process } from '../../js/controleProcessos.js';


const container = document.querySelector('[data-container]');
container.innerHTML = `
    <button data-SelecionarLoteDeEntrada>Selecionar lote de entrada</button>
    <button data-ContinuarProcesso>Continuar Processo</button>
`
const SelecionarLoteDeEntrada = document.querySelector('[data-SelecionarLoteDeEntrada]');
SelecionarLoteDeEntrada.addEventListener('click', ()=>{
    container.innerHTML = ''
    //função passando a materia prima para filtrar de  outras//
    lotes.listarLotes('pataua');
    forms.FormIniciaProcesso();

    const iniciarProcesso = document.querySelector('[data-btnIniciar]');
    iniciarProcesso.addEventListener('click', async (e)=>{
        e.preventDefault()
        let id = document.querySelector('[data-id]').value;
        let quantidade = document.querySelector('[data-quantidadeDeEntrada]').value;

        const conexao = await fetch(`http://localhost:3000/loteEntradas/${id}`)
        const conexaoConvertida = await conexao.json();

        let extrativistas = conexaoConvertida.extrativista;
        let locais = conexaoConvertida.local;

        //dever ser inicializado com o primeiro processo e materia prima//
        await process.criaProcesso('higienizacao', id, false, quantidade, extrativistas, locais, 'pataua');

        let container = document.querySelector('[data-container]');
        container.innerHTML = ''
        //deve ser inicializado com a materia prima em questão//
        process.listarProcessosPendentes('pataua');

        let containerLotes = document.querySelector('[data-containerLotes]');
        containerLotes.innerHTML = '';
    });
})

const continuarProcesso = document.querySelector('[data-ContinuarProcesso]');
continuarProcesso.addEventListener('click', ()=>{
    container.innerHTML = '';
    //deve ser inicializado com a materia prima em questão//
    process.listarProcessosPendentes('pataua');
});





