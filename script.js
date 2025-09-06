// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage on page load
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = do not save again
  }

  // Function to add a new task
  function addTask(taskText = taskInput.value.trim(), save = true) {
    if (taskText === '') {
      if (save) alert('Please enter a task'); // Alert only for user input
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Remove task on button click
    removeButton.onclick = () => {
      taskList.removeChild(li);
      updateLocalStorage();
    };

    // Append button and list item
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Save to Local Storage
    if (save) {
      updateLocalStorage();
    }

    // Clear input field if task came from user input
    if (save) taskInput.value = '';
  }

  // Update Local Storage with current tasks
  function updateLocalStorage() {
    const tasks = [];
    const listItems = taskList.querySelectorAll('li');
    listItems.forEach(li => {
      // Remove the "Remove" button text before saving
      const text = li.firstChild.textContent;
      tasks.push(text);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Event listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') addTask();
  });

  // Load tasks on page load
  loadTasks();
});