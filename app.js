// Selector 

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event Listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

// Function
function addTodo(event) {
	// Prevent form from submitting
	event.preventDefault()
	// create Todo DIV
	const todoDiv = document.createElement('div')
	todoDiv.classList.add('todo')
	// create li
	const newTodo = document.createElement('li')
	newTodo.innerText = todoInput.value
	newTodo.classList.add('todo-item')
	todoDiv.appendChild(newTodo)
	// check mark button
	const completedButton = document.createElement('button')
	completedButton.innerHTML = '<i class="fas fa-check"></i>'
	completedButton.classList.add('complete-btn')
	todoDiv.appendChild(completedButton)
	// check delete button
	const deleteButton = document.createElement('button')
	deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
	deleteButton.classList.add('delete-btn')
	todoDiv.appendChild(deleteButton)

	// Append to list
	todoList.appendChild(todoDiv)
	todoInput.value = ""
}

function deleteCheck(e) {
	const item = e.target
	// delete todo
	if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //ANIMATION TRANSITION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }

	// complete todo
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement
		todo.classList.toggle('completed')
	}
}