var listaRegistros = {
    UltimoIdGerado:0,
    usuarios:[
        

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
                    <td>${usuario.entrada}</td>
                    <td>${usuario.saidalanche}</td>
                    <td>${usuario.voltalanche}</td>
                    <td>${usuario.saida}</td>
                                       
                </tr>`
        }).join('')
    }
}
function insertUsuario(nome,entrada,saidalanche,voltalanche,saida) {
    const id =listaRegistros.UltimoIdGerado + 1;
    listaRegistros.UltimoIdGerado = id
    listaRegistros.usuarios.push({
        id,nome,entrada,saidalanche,voltalanche,saida
    })

    desenhar()
    visualizar('lista')
}

function editUsuario(id,nome,entrada,saidalanche,voltalanche,saida) {

}

function deleteUsuario(id) {

}


function visualizar(pagina) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        document.getElementById("nome").focus()
        document.getElementById("entrada").focus()
        document.getElementById("saidalanche").focus()
        document.getElementById("voltalanche").focus()
        document.getElementById("saida").focus()
        
        
        
        
    }
}

function submeter(e) {
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        entrada: document.getElementById('timein').value,
        saidalanche: document.getElementById('lunchout').value,
        voltalanche: document.getElementById('lunchback').value,
        saida: document.getElementById('timeout').value,
    }
    if(data.id) {
        editUsuario(...data)
    }else {
        insertUsuario(data.nome,data.entrada,data.saidalanche,data.voltalanche,data.saida)
    }
}

window.addEventListener('load', () => {
    desenhar()
    document.getElementById('cadastroRegistro').addEventListener('submit',submeter)
})