var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

	setInterval(() => {
		proximaImg()
	}, 6000)

function proximaImg(){}
	cont++

	if(cont > 3){
		cont = 1
	}

	document.getElementById('radio'+cont).checked = true

// }
// const btnMobile = Document.getElementById('btn-mobile');
// function ToggleMenu(){
// 	const nav = document.getElementById('nav');
// 	nav.classList.toggle('ative');
// }


// btnMobile.addEventlistEner('click',ToggleMenu )

