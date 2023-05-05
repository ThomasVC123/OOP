function addTask() {
    const taskDescription = document.getElementById('task').value;
    if (taskDescription.trim() === '') {
        showMessage('Please enter a task description');
        return;
    }

    const task = {
        id: Date.now(),
        description: taskDescription,
        done: false
    };

    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    showMessage('Task added successfully');
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task) {
        const taskRow = document.createElement('tr');
        const taskDescriptionCell = document.createElement('td');
        taskDescriptionCell.textContent = task.description;
        const statusCell = document.createElement('td');
        statusCell.textContent = task.done ? 'Done' : 'Not Done';
        const actionCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        });
        actionCell.appendChild(deleteButton);
        taskRow.appendChild(taskDescriptionCell);
        taskRow.appendChild(statusCell);
        taskRow.appendChild(actionCell);
        taskList.appendChild(taskRow);
    });
}

function deleteTask(taskId) {
    let tasks = [];
    if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    const taskIndex = tasks.findIndex(function(task) {
        return task.id === taskId;
    });

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function goToLoginScreen() {
    window.location.href = 'index.html';
}

