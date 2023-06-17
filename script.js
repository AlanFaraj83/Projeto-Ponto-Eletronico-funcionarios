var listaRegistros = {
    UltimoIdGerado:0,
    usuarios:[]
}


function desenhar() {
    const tbody = document.getElementById("listaRegistrosBody")
    if(tbody) {
        tbody.innerHTML = listaRegistros.usuarios.map(usuario => {
            return `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                </tr>`
        }).join('')
    }
}
function insertUsuario(nome) {
    const ID =listaRegistros.UltimoIdGerado + 1;
    listaRegistros.usuarios.push({
        ID,nome
    })
}

function editUsuario(ID,nome) {

}

function deleteUsuario(ID) {

}


function visualizar(pagina) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        document.getElementById("nome").focus()
    }
}