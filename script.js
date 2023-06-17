var listaRegistros = {
    UltimoIdGerado:0,
    usuario:[]
}

function insertUsuario(Nome) {
    listaRegistros.usuario.push()
}

function editUsuario(ID,Nome) {

}

function deleteUsuario(ID) {

}


function visualizar(pagina) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        document.getElementById("nome").focus()
    }
}