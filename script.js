var listaRegistros = {
    UltimoIdGerado:0,
    usuario:[]
}

function insert() {
    
}


function visualizar(pagina) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        document.getElementById("nome").focus()
    }
}