var listaRegistros = {
    UltimoIdGerado:0,
    usuario:[]
}

function insert(Nome do funcionário) {

}

function edit(ID,Nome do funcionario) {

}

function deleteData(ID) {

}


function visualizar(pagina) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        document.getElementById("nome").focus()
    }
}