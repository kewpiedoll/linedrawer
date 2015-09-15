aryOne = [];
aryTwo = [];
aryAssoc = [];

function myObj(index, text, x, y) {
	this.index = index;
	this.text = text;
	this.x = x;
	this.y = y;
}

function createObjects() {
	aryOne = [];
  aryTwo = [];
  aryAssoc = [];
	var selOne = document.getElementById('myListOne');
  var x = 0;
  var y = 50;
  for (i = 0; i < selOne.length; i++) {
  	var selx = selOne.selectedIndex=i;
    var sely = selOne.options;
    var obj = new myObj(selx, sely[selx].text, x ,y)
    aryOne.push(obj);
    y += 50;
  }
  var selTwo = document.getElementById('myListTwo');
  var x = 300;
  var y = 50;
  for (i = 0; i < selTwo.length; i++) {
  	var selx = selTwo.selectedIndex=i;
    var sely = selTwo.options;
    var obj = new myObj(selx, sely[selx].text, x ,y)
    aryTwo.push(obj);
    y += 50;
  }
}

function myFunctionOne() {
	var fieldOne = document.getElementById("textFieldOne").value;
	var selOne = document.getElementById('myListOne');
	var opt = document.createElement('option'); // create new option element
	// create text node to add to option element (opt)
	opt.appendChild( document.createTextNode(fieldOne) );
	opt.value = fieldOne; // set value property of opt
	selOne.appendChild(opt); // add opt to end of select box (sel)
}

function myFunctionTwo() {
	var fieldTwo = document.getElementById("textFieldTwo").value;
	var selTwo = document.getElementById('myListTwo');
	var opt = document.createElement('option'); // create new option element
	// create text node to add to option element (opt)
	opt.appendChild( document.createTextNode(fieldTwo) );
	opt.value = fieldTwo; // set value property of opt
	selTwo.appendChild(opt); // add opt to end of select box (sel)
}

function makeAssociation() {
  var str1 = document.getElementById("myListOne").value;
  var str2 = document.getElementById("myListTwo").value;
  for (var i = 0; i < aryOne.length; i++) {
  	if (str1 === aryOne[i].text)  {
  		var aNum1 = aryOne[i].index;
  	}
  }
  for (var i = 0; i < aryTwo.length; i++) {
  	if (str2 === aryTwo[i].text)  {
  		var aNum2 = aryTwo[i].index;
  	}
  }
  
  aryAssoc.push(aNum1);
  aryAssoc.push(aNum2);
  
  var str="";
  for (i=0; i < aryAssoc.length; i += 2) {
    str += (aryOne[aryAssoc[i]].text)+ " <--> " + (aryTwo[aryAssoc[i+1]].text) + "\n";
  }         
  document.getElementById('textarea1').value = str;
}

function showArray() {
	var str;
	for (i = 0; i < aryAssoc.length; i ++) {
    str += ", " + aryAssoc[i];
	}
	alert(str);
}
function drawCanvas() {
	var d = document.getElementById("myCanvas");
  var ctx = d.getContext("2d");
  ctx.clearRect(0, 0, d.width, d.height);
  ctx.font = "30px Arial";
	for (i = 0; i < aryOne.length; i++) {
    ctx.fillText(aryOne[i].text, aryOne[i].x, aryOne[i].y);
	}
	for (i = 0; i < aryTwo.length; i++) {
    ctx.fillText(aryTwo[i].text, aryTwo[i].x, aryTwo[i].y);
	}
  for (i = 0; i < aryAssoc.length; i += 2) {
  	ctx.beginPath();
	  ctx.moveTo(aryOne[aryAssoc[i]].x,aryOne[aryAssoc[i]].y);
	  ctx.lineTo(aryTwo[aryAssoc[i+1]].x,aryTwo[aryAssoc[i+1]].y);
	  ctx.stroke();
  }
}


