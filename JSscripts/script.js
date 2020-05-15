let idExample = document.getElementById('example');
let classExample = document.getElementsByClassName('JSEXAMPLE');
let classExample2 = document.getElementsByClassName('JSEXAMPLE1');
let tagExample = document.getElementsByTagName('section');
let queryExample = document.querySelector('#queryEx');
let queryAllExample = document.querySelectorAll('.Query-Selector-All');




idExample.style.background = "yellow";
idExample.style.border = "3px dashed blue";

classExample[0].style.border = "3px solid purple";
classExample[1].style.background = "pink";

for (i = 0; i < classExample2.length; i++) {
    classExample2[i].style.border="2px dashed black";
}

for (i=0; i< tagExample.length; i++){
    tagExample[i].style.background="#cffffa";
    tagExample[i].style.border = "2px solid purple";
}

queryExample.style.background = "orange";

queryAllExample.forEach(query =>{
    query.style.border = "2px dashed green";
})
