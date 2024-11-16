/********************************************************************
 * Objetivo: Sistema de cadastro, edição, exclusão e listagem de livros
 * Data: 30/10/2024
 * Autor: Marcel
 * Versão: 1.0
 ********************************************************************/

//Receber o botão salvar do HTML
const botaoSalvar = document.getElementById('salvar')

//Receber os dados do formulário
const getDadosForm = function(){
    let livroJSON = {}
    let status = true

    //Recebe das caixas do HTML os dados a serão enviados para a API
    let nomeLivro       = document.getElementById('title')
    let descricaoLivro  = document.getElementById('subtitle')
    let fotoLivro       = document.getElementById('image')
    let valorLivro      = document.getElementById('price')

    if(nomeLivro == '' || descricaoLivro == '' || fotoLivro == '' || valorLivro == ''){
        alert('Todos os dados devem ser preenchidos.')
        status = false
    }else{
        //Criamos um objeto JSON como os atributos necessário
        livroJSON.title     = nomeLivro.value
        livroJSON.subtitle  = descricaoLivro.value
        livroJSON.image     = fotoLivro.value
        livroJSON.price     = valorLivro.value
    }

    if(status){
        return livroJSON
    }else{
        return false
    }

}

//Função para salvar um livro novo
const postLivro = function(dadosLivro){
    let url = 'https://app-livraria-2024-gsc9e3gcdsh2f2b5.brazilsouth-01.azurewebsites.net/v2/livraria/livro'

    let response = fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dadosLivro)
    })
}

//Função para alterar um livro existente
const putLivro = function(){

}

//Função para excluir um livro
const deleteLivro = function(){

}

//Função para listar todos os livros
const getLivros = function(){

}

//Função para buscar um livro pelo ID
const getBuscarLivro = function(){

}

botaoSalvar.addEventListener('click', function(){
    //postLivro()
    let dados = getDadosForm()

    if(dados){
        postLivro(dados)
    }
})