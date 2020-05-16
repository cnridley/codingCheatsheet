/*Grocery list variables */
let groceryList = document.querySelector('ul');

let newItem = document.createElement('li');

/*to-do list variables*/
let toDoList = document.getElementById('toDo');

let newToDo = document.createElement('li');

/*putting a border around example variables*/
let examples1 = document.getElementsByClassName('examples');

/*replace list variables*/
let rep = document.getElementById('replaceList');

let rep1 = document.createElement('li');

/*removing node variables*/

let example = document.getElementById('removingNode');

/*Grocery list methods */
newItem.textContent = 'cheese';

groceryList.appendChild(newItem);

/*to-do list methods*/
newToDo.textContent = 'Write code';

toDoList.insertBefore(newToDo, toDoList.children[1]);

/*putting a border around example method*/
for (i = 0; i < examples1.length; i++){
    examples1[i].style.border = '5px solid purple';
}

/*replace list methods*/

rep1.textContent = 'ooops';

rep.replaceChild(rep1, rep.children[6]);

/*removing node methods*/

example.removeChild(example.children[3]);

example.children[0].remove();
