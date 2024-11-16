/******************************************************************************
 * Objetivo: Manipular dados de um array de livros, utilizando conceito de API
 * Data: 02/10/2024
 * Autor: Marcel
 * Versão: 1.0
 ******************************************************************************/

import { livros } from './livros.js' 

//Retornar os livros da biblioteca de livros
const setCreateCard = function(dadosLivros){
    
    //Recebe o elemento principal do HTML para colocarmos as caixas dos produtos
    let divCardProdutos = document.getElementById('cardProdutos')
    
    dadosLivros.books.forEach(function(item){

    //Cria um elemento HTML pelo Javascript <div>   </div>
    let divCaixaProduto     = document.createElement('div')
    let h2CaixaTitulo       = document.createElement('h2')
    let figureCaixaImagem   = document.createElement('figure')
    let img                 = document.createElement('img')
    let divCaixaTexto       = document.createElement('div')
    let pCaixaTexto         = document.createElement('p')

    //Cria um bloco de texto para ser inserido em um elemento HTML
    let textoTitulo     = document.createTextNode(item.title)
    let textoParagrafo  = document.createTextNode(item.subtitle)



    //Permite criar um atributo no HTML pelo JS
    divCaixaProduto.setAttribute('class', 'caixa_produto')
    h2CaixaTitulo.setAttribute('class', 'caixa_titulo')
    figureCaixaImagem.setAttribute('class', 'caixa_imagem')
    img.setAttribute('src', item.image)
    img.setAttribute('alt', item.title)
    img.setAttribute('title', item.title)
    divCaixaTexto.setAttribute('class', 'caixa_texto')



    //Permite associar um elemento filho ao elemento pai
    divCardProdutos.appendChild(divCaixaProduto)
    divCaixaProduto.appendChild(h2CaixaTitulo)
    h2CaixaTitulo.appendChild(textoTitulo)
    divCaixaProduto.appendChild(figureCaixaImagem)
    figureCaixaImagem.appendChild(img)
    divCaixaProduto.appendChild(divCaixaTexto)
    divCaixaTexto.appendChild(pCaixaTexto)
    pCaixaTexto.appendChild(textoParagrafo)

})


}

const getDadosLivrosAPI = async function(){
    let url = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livros'

    let response = await fetch(url)

    let dados = await response.json()

    setCreateCard(dados)
}

//Criando um evento de escuta para a ação de carregar(load) do site
window.addEventListener('load', function(){
    setCreateCard(livros[0])
    //getDadosLivrosAPI()
})