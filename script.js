document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    loadTasks();

    function addTask(taskText, save = true) {
        if (taskText.trim() === '') {
            alert('Please enter a task.');
            return;
        }
        
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeFromStorage(taskText);

        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
        
    }

    function handleAddTask() {
        const taskText = taskInput.value.trim();
        addTask(taskText);
        saveTasks();
    }
    button.addEventListener('click', handleAddTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleAddTask();
        }
    });
});
