// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim(); // Get and trim input

    if (taskText === '') {
      alert('Please enter a task'); // Alert if input is empty
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'; // Use className instead of classList.add

    // Remove task when remove button is clicked
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item and list item to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for pressing Enter key inside input field
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
