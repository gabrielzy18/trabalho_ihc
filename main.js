function adicionarTexto()
{
    var texto = document.getElementById('textbox').value
    var nome = document.getElementById('nome').value
    var mydiv = document.getElementById('mydiv')
    var data = new Date();
    const option = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }
    data = data.toLocaleDateString('pt-br', option)
    var conteudo = document.createElement('div')
    conteudo.innerHTML = texto + "<br /> Escrito por: " + nome + "<br />"+ data + "<br /><br />"
    mydiv.appendChild(conteudo)
    console.log(texto, nome)
    
}

function changeNavigation(id) { document.getElementById('main').innerHTML = document.getElementById(id).innerHTML }