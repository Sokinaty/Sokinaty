document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('من فضلك أدخل مهمة!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="complete-btn">تم</button>
    `;

    listItem.querySelector('.complete-btn').addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
});