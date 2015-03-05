//TO-do :- improve in-game description,set local storage

//Size of the grid
var size = 4;
var min = 0;
var max = size - 1;

var isMoved = false;
var score = 0;

var excludeIds = [];


function reset(){
  
  for(var i =0;i<4;i++){
    for(var j=0;j<4;j++){
      var id = i+""+j;
      var zero = document.getElementById(id);
      zero.style.backgroundColor = "#cdc1b5";
      zero.innerHTML = "";
    }
  }

  load();
}

function load() {
  //alert("load");
  
  //Load the table and generate 2 random 2's  
  var id1 = getId();
  var id2 = "";
  while(true) {
    id2 = getId();
    if(id1 != id2)
    break;
  }
  //Set initial 2 values
document.getElementById(id1).innerHTML = "2";
document.getElementById(id2).innerHTML = "2";

document.getElementById(id1).style.backgroundColor = getColor(2);
document.getElementById(id1).style.color = getTextColor(2);
document.getElementById(id2).style.backgroundColor = getColor(2);
document.getElementById(id2).style.color = getTextColor(2);
  
  score = 0;
  document.getElementById("score").innerHTML = score;

  return false;
}
function getRandom()
{
  return Math.floor(Math.random()*(max-min+1)+min);
}
function getId()
{
  var i = getRandom();
  var j = getRandom();
  return i+""+j;
}
function up() {
  isMoved = false;
  excludeIds = [];
  for(var j=min;j<=max;j++) {
    for(var i=min;i<=max;i++) {
      var id = i+""+j;
      if(document.getElementById(id).innerHTML != "") {
        moveUp(id);
      }
    }
  }
  if(isMoved == true) {
    update();
  }
  return false;
}
function moveUp(id) {   
  if(!id.startsWith(min)) {
    var arr = id.split("");
    var i = parseInt(arr[0]);
    var j = parseInt(arr[1]);
    for(var k=(i-1);k>=min;k--) {
      var nId = k+""+j;
      if(document.getElementById(nId).innerHTML != "") {
        var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
        var nVal = parseInt(document.getElementById(nId).innerHTML);
        if(val == nVal) {
          if(excludeIds.indexOf(nId) == -1){
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = (val+nVal);
            document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
            document.getElementById(nId).style.color = getTextColor((val+nVal));
            document.getElementById((k+1)+""+j).innerHTML = "";
            document.getElementById((k+1)+""+j).style.backgroundColor = "#cdc1b5";
            isMoved = true;
            score += (val+nVal);
          }
          break;
        }
      }
      else {
        document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
        document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
        document.getElementById(nId).style.color = document.getElementById((k+1)+""+j).style.color;
        document.getElementById((k+1)+""+j).innerHTML = "";
        document.getElementById((k+1)+""+j).style.backgroundColor = "#cdc1b5";
        isMoved = true;
      }
    }
  }
  return false;
}
function left() {
  isMoved = false;
  excludeIds = [];
  for(var i=min;i<=max;i++) {
    for(var j=min;j<=max;j++) {
      var id = i+""+j;
      if(document.getElementById(id).innerHTML != "") {
        moveLeft(id);
      }
    }
  }
  if(isMoved == true) {
    update();
  }
  return false;
}
function moveLeft(id) {
  if(!id.endsWith(min)) {
    var arr = id.split("");
    var i = parseInt(arr[0]);
    var j = parseInt(arr[1]);
    for(var k=(j-1);k>=min;k--) {
      var nId = i+""+k;
      if(document.getElementById(nId).innerHTML != "") {
        var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
        var nVal = parseInt(document.getElementById(nId).innerHTML);
        if(val == nVal) {
          if(excludeIds.indexOf(nId) == -1){
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = (val+nVal);
            document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
            document.getElementById(nId).style.color = getTextColor((val+nVal));
            document.getElementById(i+""+(k+1)).innerHTML = "";
            document.getElementById(i+""+(k+1)).style.backgroundColor = "#cdc1b5";
            isMoved = true;
            score += (val+nVal);
          }
          break;
        }
      }
      else {
        document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
        document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
        document.getElementById(nId).style.color = document.getElementById(i+""+(k+1)).style.color;
        document.getElementById(i+""+(k+1)).innerHTML = "";
        document.getElementById(i+""+(k+1)).style.backgroundColor = "#cdc1b5";
        isMoved = true;
      }
    }
  }
  return false;
}
function down() {
  isMoved = false;
  excludeIds = [];
  for(var i=min;i<=max;i++) {
    for(var j=max;j>=min;j--) {
      var id = j+""+i;
      if(document.getElementById(id).innerHTML != "") {
        moveDown(id);
      }
    }
  }
  if(isMoved == true) {
    update();
  }
  return false;
}
function moveDown(id) {
  if(!id.startsWith(max)) {
    var arr = id.split("");
    var i = parseInt(arr[0]);
    var j = parseInt(arr[1]);
    for(var k=(i+1);k<=max;k++) {
      var nId = k+""+j;
      if(document.getElementById(nId).innerHTML != "") {
        var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
        var nVal = parseInt(document.getElementById(nId).innerHTML);
        if(val == nVal) {
          if(excludeIds.indexOf(nId) == -1){
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = (val+nVal);
            document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
            document.getElementById(nId).style.color = getTextColor((val+nVal));
            document.getElementById((k-1)+""+j).innerHTML = "";
            document.getElementById((k-1)+""+j).style.backgroundColor = "#cdc1b5";
            isMoved = true;
            score += (val+nVal);
          }
          break;
        }
      }
      else {
        document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
        document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
        document.getElementById(nId).style.color = document.getElementById((k-1)+""+j).style.color;
        document.getElementById((k-1)+""+j).innerHTML = "";
        document.getElementById((k-1)+""+j).style.backgroundColor = "#cdc1b5";
        isMoved = true;
      }
    }
  }
  return false;
}
function right() {
  isMoved = false;
  excludeIds = [];
  for(var i=min;i<=max;i++) {
    for(var j=max;j>=min;j--) {
      var id = i+""+j;
      if(document.getElementById(id).innerHTML != "") {
        moveRight(id);
      }
    }
  }
  if(isMoved == true) {
    update();
  }
  return false;
}
function moveRight(id) {
  if(!id.endsWith(max)) {
    var arr = id.split("");
    var i = parseInt(arr[0]);
    var j = parseInt(arr[1]);
    for(var k=(j+1);k<=max;k++) {
      var nId = i+""+k;
      if(document.getElementById(nId).innerHTML != "") {
        var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
        var nVal = parseInt(document.getElementById(nId).innerHTML);
        if(val == nVal) {
          if(excludeIds.indexOf(nId) == -1){
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = (val+nVal);
            document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
            document.getElementById(nId).style.color = getTextColor((val+nVal));
            document.getElementById(i+""+(k-1)).innerHTML = "";
            document.getElementById(i+""+(k-1)).style.backgroundColor = "#cdc1b5";
            isMoved = true;
            score += (val+nVal);
          }
          break;
        }
      }
      else {
        document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
        document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
        document.getElementById(nId).style.color = document.getElementById(i+""+(k-1)).style.color;
        document.getElementById(i+""+(k-1)).innerHTML = "";
        document.getElementById(i+""+(k-1)).style.backgroundColor = "#cdc1b5";
        isMoved = true;
      }
    }
  }
  return false;
}
function update() {   
  //Add new value
  var ids = [];
  for(var i=min;i<=max;i++) {
    for(var j=min;j<=max;j++) {
      var id = i+""+j;
      if(document.getElementById(id).innerHTML == "") {
        ids.push(id);
      }
    }
  }
  var id = ids[Math.floor(Math.random()*ids.length)];
  document.getElementById(id).innerHTML = "2";
  document.getElementById(id).style.backgroundColor = getColor(2);
  document.getElementById(id).style.color = getTextColor(2);

  //Check if no move space available
  var allFilled = true;
  for(var i=min;i<=max;i++) {
    for(var j=min;j<=max;j++) {
      var id = i+""+j;
      if(document.getElementById(id).innerHTML == "") {
        allFilled = false;
        break;
      }
    }
  }   
  //Update score
  document.getElementById("score").innerHTML = score;
  if(allFilled) {
    checkGameOver();
  }
}

function checkGameOver() {
  var isOver = true;
  for(var j=min;j<=max;j++) {
    for(var i=min;i<=(max-1);i++) {
      //alert(i+" "+j);
      var val = parseInt(document.getElementById(i+""+j).innerHTML);
      var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
      if(val == nVal) {
        isOver = false;
        break;
      }
    }
  }   
  if(isOver == true) {
    for(var i=min;i<=max;i++) {
      for(var j=min;j<=(max-1);j++) {
        //alert(i+" "+j);
        var val = parseInt(document.getElementById(i+""+j).innerHTML);
        var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
        if(val == nVal) {
          isOver = false;
          break;
        }
      }
    }
  }
  if(isOver) {
    alert("Game over!");
  }
  return false;
}
function getColor(val)
{
  var color = "#cdc1b5";
  switch(val) {
    case 2:   color = "#eee4da"; break;
    case 4:   color = "#ece0ca"; break;
    case 8:   color = "#f2b179"; break;
    case 16:  color = "#f59563"; break;
    case 32:  color = "#f57c5f"; break;
    case 64:  color = "#f65e3b"; break;
    case 128: color = "#edcf72"; break;
    case 256: color = "#edcc61"; break;
    case 512: color = "#edc850"; break;
    case 1024:  color = "#edc53f"; break;
    case 2048:  color = "#edc22e"; break;
    default:  color = "fff";
  }
  return color;
}
function getTextColor(val)
{
  var textcolor = "#fff";
  switch(val){
    case 2: textcolor = "#74655b"; break;
    case 4: textcolor = "#7a6f66"; break;
    case 8: textcolor = "#ffffff"; break;
    case 16: textcolor = "#ffffff"; break;
    case 32: textcolor = "#ffffff"; break;
    case 64: textcolor = "#ffffff"; break;
    case 128: textcolor = "#ffffff"; break;
    case 256: textcolor = "#ffffff"; break;
    case 512: textcolor = "#ffffff"; break;
    case 1024: textcolor = "#ffffff"; break;
    case 2048: textcolor = "#ffffff"; break;
  }
  return textcolor;
}

if ( typeof String.prototype.startsWith != 'function' ) {
  String.prototype.startsWith = function( str ) {
  return this.substring( 0, str.length ) === str;
  }
};
if ( typeof String.prototype.endsWith != 'function' ) {
  String.prototype.endsWith = function( str ) {
  return this.substring( this.length - str.length, this.length ) === str;
  }
};
document.onkeydown = function(e) {
  e.preventDefault();//to prevent scroll of screen
  switch (e.keyCode) {
    case 37:
      left();
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      down();
      break;
  }
};
//calling load method
load();
