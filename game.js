let cont = 0;

function ClickBotao(id) {
	if (cont%2 ==0 && document.getElementById(id).innerHTML=="") {
		document.getElementById(id).innerHTML="<img src='x.png'>";
		document.getElementById(id).value = 1;
	}
	else if (cont%2 == 1 && document.getElementById(id).innerHTML==""){
		document.getElementById(id).innerHTML="<img src='o.png'>";	
		document.getElementById(id).value=1
	}
	testaGanhou()
	cont++;
}

function testaGanhou() {
	for (var i = 0; i < 8; i++) {
		
	}
}