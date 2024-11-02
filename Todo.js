function addTask() {
    // Get the task input
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a class to mark completed tasks
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Add a delete button to each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    
    li.appendChild(deleteButton);

    // Add the new task to the list
    document.getElementById('taskList').appendChild(li);

    // Clear the input
    taskInput.value = '';
}
