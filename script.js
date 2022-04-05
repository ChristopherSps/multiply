// Global Variables
var x = 0;
var y = 0;
var product = 0;
var min = 3;
var max = 10;

function display(){
	// Creating Interface
	let interface = document.createElement("div");
	interface.setAttribute("id","interface");
	document.body.appendChild(interface);

	// Creating Heading
	let heading = document.createElement("h1");
	heading.setAttribute("id","heading");
	heading.innerText = "Simple Multiplication";
	interface.appendChild(heading);

	// Creating Paragraph
	let para = document.createElement("p");
	para.setAttribute("id","para");
	para.innerText = askQuestion();
	interface.appendChild(para);

	// Creating Input Box
	let iBox = document.createElement("input");
	iBox.setAttribute("id","iBox");
	interface.appendChild(iBox);

	//Creating Button
	let submitB = document.createElement("button");
	submitB.setAttribute("id","submit");
	submitB.setAttribute("onClick","checkAnswer()");
	submitB.innerText = "Check Answer";
	interface.appendChild(submitB);
}



function askQuestion(){
	x = Math.floor(Math.random()*10)+1;
	y = Math.floor(Math.random()*10)+1;
	product = (x * y);
	let question =  x+" X "+y+" = ?";
	return question;
}

function checkAnswer(){
	let answer = document.getElementById("iBox");
	let answerBox = answer.value;
	if (answerBox == product){
		alert("Correct, "+x+" X "+y+" is "+product);
		document.location = 'index.html';
	}
	else{
		alert("Incorrect! "+x+" X "+y+" is "+product);
		document.location = 'index.html';
	}
}