/*Grocery list variables */
let groceryList = document.querySelector('ul');

let newItem = document.createElement('li');

/*to-do list variables*/
let toDoList = document.getElementById('toDo');

let newToDo = document.createElement('li');

/*putting a border around example*/
let examples1 = document.getElementsByClassName('examples');

/*Grocery list methods */
newItem.textContent = 'cheese';

groceryList.appendChild(newItem);

/*to-do list methods*/
newToDo.textContent = 'Write code';

toDoList.insertBefore(newToDo, toDoList.lastElementChild);

/*putting a border around example method*/
for (i = 0; i < examples1.length; i++){
    examples1[i].style.border = '5px solid purple';
}
