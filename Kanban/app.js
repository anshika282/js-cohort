const addButton = document.querySelector('#addButton');
const toDo = document.querySelector('.to-do-board');
const boards = document.querySelectorAll('.board');
const items = document.querySelectorAll('.item');

function attachDragEvents(target) {
    target.addEventListener('dragstart', (e) => {
        target.classList.add('dragging');
    });
    target.addEventListener('dragend', (e) => {
        target.classList.remove('dragging');
    });
}

addButton.addEventListener('click', (e) => {
    const task = prompt('Enter the task');
    if (!task) return;

    const taskCard = document.createElement('p');
    taskCard.textContent = task;
    taskCard.classList.add('item');
    taskCard.setAttribute('draggable', 'true');

    attachDragEvents(taskCard);
    toDo.appendChild(taskCard);
});

items.forEach(attachDragEvents);
//we use attachDragEvents function to attach drag events to the items and here insted of (item)=> attachDragEvents(item) we can also use attachDragEvents directlty as it has same function 

boards.forEach((board) => {
    board.addEventListener('dragover', (e) => {
        const dragging = document.querySelector('.dragging');
        // console.log(dragging);
        board.appendChild(dragging);
    });
});