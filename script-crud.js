const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const formTextArea = document.querySelector('.app__form-textarea');

const taskList = [];

function createTaskElement(task) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;

    const paragraph = document.createElement('p');
    paragraph.textContent = task.description;

    const button = document.createElement('button');
    const imageButton = document.createElement('img');
    imageButton.setAttribute('src', '/imagens/edit.png');
    button.append(imageButton);

    li.append(svg, paragraph, button);
}

btnAddTask.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
});

formAddTask.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const task = {
        description: formTextArea.value
    }
    taskList.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskList));
});