var listaRegistros = {
    UltimoIdGerado:0,
    usuarios:[]
}


function desenhar() {
    const tbody = document.getElementById("listaRegistrosBody")
    if(tbody) {
        tbody.innerHTML = listaRegistros.usuarios.map(usuario => {
            return `<tr>
                    <td>${usuario}</td>
                    <td></td>
                    <td></td>
                </tr>`
        }).join('')
    }
}
function insertUsuario(Nome) {
    const ID =listaRegistros.UltimoIdGerado + 1;
    listaRegistros.usuarios.push({
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