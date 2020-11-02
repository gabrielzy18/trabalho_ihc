var global_aval_banha = 0;
var global_aval_banha_cont = 0;

function adicionarTexto() {
    var str = "Digite aqui o seu comentario sobre o candidato"
    var texto = document.getElementById('textbox').value
    var aval = document.getElementById('aval').value
    if (texto.localeCompare(str) == 0 || aval == "") {
        alert("Erro! Preencha o comentario e deixe sua avaliação.")
    }
    else {
        console.log(texto.localeCompare(str), aval)
        var nome = document.getElementById('nome').value
        var mydiv = document.getElementById('mydiv')
        var data = new Date()
        const option = {
            year: 'numeric',
            month: 'long',
            weekday: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }
        if (nome.localeCompare("") == 0) {
            nome = "Anônimo/a"
        }
        data = (data.toLocaleDateString('pt-br', option)).italics()
        var conteudo = document.createElement('div')
        conteudo.innerHTML = "<b> Comentario</b>: " + texto + "<br /> <b>Escrito por</b>: " + nome + "<br />" +
                             "<b>Avaliação do usuário</b>: " + aval + "<br />" + data + "<br /><br />"
        mydiv.appendChild(conteudo)
        global_aval_banha += parseInt(aval)
        global_aval_banha_cont++
        var media = global_aval_banha / global_aval_banha_cont
        document.getElementById("banha").innerHTML = "<b>Avalição geral</b>: " + media.toFixed(1) +
                                                     "<br /><b>Total de avaliações</b>: " + global_aval_banha_cont
    }
}

function changeNavigation(id) { document.getElementById('main').innerHTML = document.getElementById(id).innerHTML }