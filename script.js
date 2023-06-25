const KEY_BD = '@usuariosestudo'


var listaRegistros = {
    UltimoIdGerado:0,
    usuarios:[]
}

var FILTRO =''


function gravarBD() {
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))
}

function lerBD () {
    const data =  localStorage.getItem(KEY_BD)
    if(data) {
        listaRegistros = JSON.parse(data)
    }
    desenhar()
}


function desenhar() {
    const tbody = document.getElementById("listaRegistrosBody")
    if(tbody) {
      var data = listaRegistros.usuarios;
      if(FILTRO.trim()) {
        const exReg = eval(`/${FILTRO.trim()}/i`)
      }
      data = listaRegistros.usuarios
          .sort((a, b) => {
            return a.nome < b.nome ? -1 : 1
          })
          .map(usuario => {
             return `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.date}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.entrada}</td>
                    <td>${usuario.saidalanche}</td>
                    <td>${usuario.voltalanche}</td>
                    <td>${usuario.saida}</td>
                    <td>
                        <button class='azul' onclick='visualizar("cadastro",false,${usuario.id})'>Editar</button>
                        <button class='vermelho'onclick='perguntarSeDeleta(${usuario.id})'>Deletar</button>
                    </td>
                                       
                </tr>`
            })
       tbody.innerHTML = data.join('')
    }
}
function insertUsuario(date,nome,entrada,saidalanche,voltalanche,saida) {
    const id =listaRegistros.UltimoIdGerado + 1;
    listaRegistros.UltimoIdGerado = id
    listaRegistros.usuarios.push({
        id,date,nome,entrada,saidalanche,voltalanche,saida
    })
    gravarBD()
    desenhar()
    visualizar('lista')
}

function editUsuario(id,date,nome,entrada,saidalanche,voltalanche,saida) {
    var usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
    usuario.date = date
    usuario.nome = nome;
    usuario.entrada = entrada;
    usuario.saidalanche = saidalanche;
    usuario.voltalanche = voltalanche;
    usuario.saida = saida;
    gravarBD()
    desenhar()
    visualizar('lista')
}

function deleteUsuario(id) {
        listaRegistros.usuarios = listaRegistros.usuarios.filter( usuario => {
            return usuario.id != id
        })
        gravarBD()
        desenhar()
}

function perguntarSeDeleta(id) {
    if(confirm('Quer deletar o registro de id: '+id)) {
        deleteUsuario(id)
        
    }
}

function limparEdicao() {
    document.getElementById("date").value = ''
    document.getElementById("nome").value = ''
    document.getElementById("entrada").value = ''
    document.getElementById("saidalanche").value =''
    document.getElementById("voltalanche").value =''
    document.getElementById("saida").value =''
}


function visualizar(pagina, novo=false,id=null) {
    document.body.setAttribute('page',pagina);
    if(pagina === 'cadastro') {
        if(novo) limparEdicao()
        if(id) {
            const usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
            if(usuario) {
                document.getElementById("id").value = usuario.id
                document.getElementById("date").value = usuario.date
                document.getElementById("nome").value = usuario.nome
                document.getElementById("entrada").value = usuario.entrada
                document.getElementById("saidalanche").value = usuario.saidalanche
                document.getElementById("voltalanche").value = usuario.voltalanche
                document.getElementById("saida").value = usuario.saida
            }
        }
        document.getElementById("date").focus()
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
        date: document.getElementById('date').value,
        nome: document.getElementById('nome').value,
        entrada: document.getElementById('timein').value,
        saidalanche: document.getElementById('lunchout').value,
        voltalanche: document.getElementById('lunchback').value,
        saida: document.getElementById('timeout').value,
    }
    if(data.id) {
        editUsuario(data.id,data.date,data.nome,data.entrada,data.saidalanche,data.voltalanche,data.saida)
    }else {
        insertUsuario(data.date,data.nome,data.entrada,data.saidalanche,data.voltalanche,data.saida)
    }
}

window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistro').addEventListener('submit',submeter)
})

