function allowDrop(ev) {ev.preventDefault();}

function drag(ev) {ev.dataTransfer.setData("text", ev.target.id);}

function drop(ev) {

    ev.preventDefault();

    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));

                document.getElementById(data).style.color="blue";

                setTimeout(function() {cambiarEstilo (document.getElementById(data))}, 700);

}


function cambiarEstilo(elemento) {

if (elemento.style.color=="blue") else {elemento.style.color="blue" }

setTimeout(function() {cambiarEstilo (elemento)}, 700);}
