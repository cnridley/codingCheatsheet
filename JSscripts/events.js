/* retrieved the div using the getelementbyid method, then created a function calle changeBack, which would change the background color of the div when called. Finally added an event listener onto the div with the click method and called the 'changeBack' function */


let cEx = document.getElementById('clkEx');

let changeBack = () => {
    cEx.style.backgroundColor = 'orange';
}

cEx.addEventListener('click', changeBack);


/* using the dblclick method to change both the text and the style of the element */

let dblEx = document.getElementById("dblClk");

let changeDiv = () => {
    dblEx.innerHTML = "WOAH YOU CHANGED MY TEXT!!";
    dblEx.style.background = "red";
}

dblEx.addEventListener('dblclick', changeDiv);


/* used the mouseenter and mouseleave method together to change the style to 'none' so it disappears when hovered over and the re-appears when you move the mouse */

let Hver = document.getElementById('hoverEx');

let change = () => {
    Hver.style.display = 'none';
}

let back = () => {
    Hver.style.display = 'block';
}

Hver.addEventListener('mouseenter', change);

Hver.addEventListener('mouseleave', back);
