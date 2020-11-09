var global_aval_banha = 0;
var global_aval_banha_cont = 0;

function adicionarTexto() {
    var texto = document.getElementById('textbox').value
    var aval = document.getElementById('aval').value
    if (document.getElementById("avaliado").val == 'false') {
        alert("Erro! Preencha o comentario e deixe sua avaliação.")
    }
    else {
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

function Avaliar(estrela) {
	var url = window.location;
	url = url.toString()
	url = url.split("index.html");
	url = url[0];
	
	var s1 = document.getElementById("s1").src;
	var s2 = document.getElementById("s2").src;
	var s3 = document.getElementById("s3").src;
	var s4 = document.getElementById("s4").src;
	var s5 = document.getElementById("s5").src;
	var avaliacao = 0;
	
	if (estrela == 5){ 
		if (s5 == url + "img/star0.png") {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star1.png";
			document.getElementById("s4").src = "img/star1.png";
			document.getElementById("s5").src = "img/star1.png";
			avaliacao = 5;
			} else {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star1.png";
			document.getElementById("s4").src = "img/star1.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 4;
		}
	}
	
	//ESTRELA 4
	if (estrela == 4){ 
		if (s4 == url + "img/star0.png") {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star1.png";
			document.getElementById("s4").src = "img/star1.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 4;
			} else {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star1.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 3;
		}
	}
	
	//ESTRELA 3
	if (estrela == 3){ 
		if (s3 == url + "img/star0.png") {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star1.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 3;
			} else {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star0.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 2;
		}
	}
	
	//ESTRELA 2
	if (estrela == 2){ 
		if (s2 == url + "img/star0.png") {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star1.png";
			document.getElementById("s3").src = "img/star0.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 2;
			} else {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star0.png";
			document.getElementById("s3").src = "img/star0.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 1;
		}
	}
	
	//ESTRELA 1
	if (estrela == 1){ 
		if (s1 == url + "img/star0.png") {
			document.getElementById("s1").src = "img/star1.png";
			document.getElementById("s2").src = "img/star0.png";
			document.getElementById("s3").src = "img/star0.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 1;
			} else {
			document.getElementById("s1").src = "img/star0.png";
			document.getElementById("s2").src = "img/star0.png";
			document.getElementById("s3").src = "img/star0.png";
			document.getElementById("s4").src = "img/star0.png";
			document.getElementById("s5").src = "img/star0.png";
			avaliacao = 0;
		}
	}
	document.getElementById("avaliado").val = true;	
}

function abreProposta(tipoProposta){
	
	if(document.getElementById(tipoProposta).style.display == 'none'){
		document.getElementById(tipoProposta).style.display = "block";
	}else{
		document.getElementById(tipoProposta).style.display = "none";
	}
	
}
