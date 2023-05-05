function renderTasks() {
    const tasksContainer = document.getElementById('tasks');
    let tasks = [];
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  
    tasksContainer.innerHTML = '';
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      checkbox.addEventListener('change', () => {
        task.done = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });
  
      const label = document.createElement('label');
      label.innerHTML = task.description;
  
      taskElement.appendChild(checkbox);
      taskElement.appendChild(label);
      tasksContainer.appendChild(taskElement);
    });
  }
  function goToLoginScreen() {
    window.location.href = 'index.html';
  }
  
  