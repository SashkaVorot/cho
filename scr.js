const button = document.getElementById("qans");
const add = document.getElementById("add_b");
const ins = document.getElementById("ins");

add.addEventListener("click", createCD);
ins.addEventListener("delete", function(event){
	const chos = document.getElementsByClassName("choice");
	
	for (let i = event.di; i < chos.length; i++)
		chos[i].update();
});

function createCD(){
	const chos = document.getElementsByClassName("choice");
	const CD = new ChoiceDiv( chos.length );

	CD.paste()
}