var listaRegistros = {
    UltimoIdGerado:0,
    usuarios:[
        {id:1,nome:'Cassio'},
        {id:2,nome:'Leandro'}

    ]
}


function desenhar() {
    const tbody = document.getElementById("listaRegistrosBody")
    if(tbody) {
        tbody.innerHTML = listaRegistros.usuarios
        .sort((a, b) => {
            return a.nome < b.nome ? -1 : 1
        })
        .map(usuario => {
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

function submeter()

window.addEventListener('load', () => {
    desenhar()

    document.getElementById('cadastroRegistro').addEventListener('submit',submeter)
})