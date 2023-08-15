function ChangeName (){
var inputName = document.getElementById('inputName');

var myName = prompt('What your name');
inputName.innerHTML = 'Hello ' + myName;
}