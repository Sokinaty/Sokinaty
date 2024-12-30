// استرجاع المهام المحفوظة عند فتح الصفحة
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToList(task);
    });
};

// إضافة المهمة إلى القائمة
document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('من فضلك أدخل مهمة!');
        return;
    }
    
    addTaskToList(taskText);
    taskInput.value = '';
    saveTasks();
});

// إضافة المهمة إلى القائمة وعرضها
function addTaskToList(taskText) {
    const taskList = document.getElementById('task-list');
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">تم</button>
    `;
    
    // إضافة وظيفة الزر "تم" 
    listItem.querySelector('.complete-btn').addEventListener('click', function () {
        listItem.classList.toggle('completed');
        saveTasks(); // حفظ المهام بعد التغيير
    });
    
    taskList.appendChild(listItem);
}

// حفظ المهام في LocalStorage
function saveTasks() {
    const tasks = [];
    const taskListItems = document.querySelectorAll('#task-list li');
    
    taskListItems.forEach(item => {
        tasks.push({
            text: item.querySelector('span').textContent,
            completed: item.classList.contains('completed')
        });
    });
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}