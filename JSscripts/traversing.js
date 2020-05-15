/*traversing elements variables*/
let childEx1 = document.getElementsByTagName("ul")[0];
let childEx2 = document.getElementsByTagName("ul")[1];
let sibling = document.getElementsByTagName("ul")[2];
let siblingEx = sibling.children[1];
/*traversing JS code*/

childEx1.firstElementChild.style.background = "yellow";

childEx1.lastElementChild.style.background = "pink";

for(let element of childEx2.children){
    element.style.border = '2px dashed purple';
}

siblingEx.previousElementSibling.style.background = "green";
siblingEx.nextElementSibling.style.border = "3px dashed orange";
