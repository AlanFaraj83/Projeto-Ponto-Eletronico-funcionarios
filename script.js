var listaRegistros = {
    UltimoIdGerado:0,
    usuario:[]
}

function insertUsuario(Nome) {
    const ID =listaRegistros.UltimoIdGerado + 1;
    listaRegistros.usuario.push({
        ID,Nome
    })
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