var listaRegistros = {
    UltimoIdGerado:0,
    usuario:[]
}

function insert() {

}

function edit() {
    
}


function visualizar(pagina) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        document.getElementById("nome").focus()
    }
}