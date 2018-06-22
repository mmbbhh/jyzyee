var p = 0;
var j = 0;

function next() {
	p++;
	var p1 = document.getElementById("tup");
	if(p >= 5) {
		p = 0
	}
	if(p <= 0) {
		p1.style.backgroundImage = "url(./img/1.jpg)";
		document.getElementById("0001").click();
	} else if(p <= 1) {
		p1.style.backgroundImage = "url(./img/2.jpg)";
		document.getElementById("0002").click();
	} else if(p <= 2) {
		p1.style.backgroundImage = "url(./img/3.jpg)";
		document.getElementById("0003").click();
	} else if(p <= 3) {
		p1.style.backgroundImage = "url(./img/4.jpg)";
		document.getElementById("0004").click();
	} else {
		p1.style.backgroundImage = "url(./img/5.jpg)";
		document.getElementById("0005").click();
	}

}

function prve() {
	p = p - 1;
	var p2 = document.getElementById("tup");
	if(p < 0) {
		p = 4;
	}
	if(p <= 0) {
		p2.style.backgroundImage = "url(./img/1.jpg)";
		document.getElementById("0001").click();
	} else if(p <= 1) {
		p2.style.backgroundImage = "url(./img/2.jpg)";
		document.getElementById("0002").click();
	} else if(p <= 2) {
		p2.style.backgroundImage = "url(./img/3.jpg)";
		document.getElementById("0003").click();
	} else if(p <= 3) {
		p2.style.backgroundImage = "url(./img/4.jpg)";
		document.getElementById("0004").click();
	} else {
		p2.style.backgroundImage = "url(./img/5.jpg)";
		document.getElementById("0005").click();
	}

}

function funcTest() {
	window.setInterval("next()", 3000);

}
window.onload = funcTest;

function aa() {
	var p3 = document.getElementById("tup");
	p3.style.backgroundImage = "url(./img/1.jpg)";
	p = 0;
}

function bb() {
	var p3 = document.getElementById("tup");
	p3.style.backgroundImage = "url(./img/2.jpg)";
	p = 1;
}

function cc() {
	var p3 = document.getElementById("tup");
	p3.style.backgroundImage = "url(./img/3.jpg)";
	p = 2;
}

function dd() {
	var p3 = document.getElementById("tup");
	p3.style.backgroundImage = "url(./img/4.jpg)";
	p = 3;
}

function ee() {
	var p3 = document.getElementById("tup");
	p3.style.backgroundImage = "url(./img/5.jpg)";
	p = 4;
}


