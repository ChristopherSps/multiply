// Global Variables


let mult = document.createElement("h1");
document.body.appendChild(mult);
// mult.innerText("Simple Multiplication");
display();

function display(){
	let question = document.createElement("div");
	question.setAttribute("id","question");
	document.body.appendChild(question);

	let answer = document.createElement("input");
	answer.setAttribute("id","input");
	document.body.appendChild(answer);

	let button = document.createElement("button");
	button.setAttribute("onClick","button");
	button.setAttribute("onClick","check()");
	document.body.appendChild(button);
	button.innerText("submit");
}

function check(){

}